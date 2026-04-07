export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.dataverg.com/api";

/**
 * Perform a secure SHA-256 hash using the native Web Crypto API
 * Returns exactly 64 hex characters as required by the backend.
 */
export async function hashSHA256(message: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Core API handler
 */
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as any)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred with the API request');
  }

  return data;
}

/**
 * Authentication API
 */
export const AuthAPI = {
  login: async (email: string, password_hash: string) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password_hash })
    });
  },
  register: async (data: {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password_hash: string;
    password_hash_confirmation: string;
    turnstile_token?: string;
  }) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  logout: async () => {
    return apiRequest('/auth/logout', {
      method: 'POST'
    });
  },
  forgotPassword: async (email: string, turnstile_token?: string) => {
    return apiRequest('/auth/password/forgot', {
      method: 'POST',
      body: JSON.stringify({ email, turnstile_token })
    });
  }
};

/**
 * User API
 */
export const UserAPI = {
  getProfile: async () => {
    return apiRequest('/user');
  },
  updateProfile: async (data: any) => {
    return apiRequest('/user', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
};

/**
 * Chat/AI API
 * Supports:
 *   - Simple prompt: AIAPI.generate("hello")
 *   - Full messages array: AIAPI.generate({ messages: [...], system: "..." })
 */
export const AIAPI = {
  generate: async (
    promptOrOptions: string | { messages: { role: string; content: string }[]; system?: string; maxTokens?: number },
    _deprecated?: any
  ) => {
    let body: Record<string, any>;

    if (typeof promptOrOptions === "string") {
      // Simple prompt path
      body = { prompt: promptOrOptions, async: false };
    } else {
      // Messages path — preferred for chat with history
      const { messages, system, maxTokens } = promptOrOptions;
      const fullMessages = system
        ? [{ role: "system", content: system }, ...messages]
        : messages;
      body = { messages: fullMessages, max_tokens: maxTokens ?? 512, async: false };
    }

    return apiRequest('/ai/generate', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
};


/**
 * Subscriptions API
 */
export const SubscriptionAPI = {
  getPlans: async () => {
    return apiRequest('/subscription-plans');
  },
  subscribe: async (data: any) => {
    return apiRequest('/subscriptions', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

/**
 * General/Email API
 */
export const EmailAPI = {
  newsletter: async (email: string, turnstile_token: string) => {
    return apiRequest('/mail/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email, turnstile_token })
    });
  },
  contact: async (data: any) => {
    return apiRequest('/mail/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

/**
 * Maps API
 */
export const MapsAPI = {
  createPin: async (address: string, zoom = 15, width = 600, height = 450) => {
    return apiRequest('/maps/pin', {
      method: 'POST',
      body: JSON.stringify({ address, zoom, width, height })
    });
  }
};

export default {
  AuthAPI,
  UserAPI,
  AIAPI,
  SubscriptionAPI,
  EmailAPI,
  MapsAPI,
  hashSHA256
};
