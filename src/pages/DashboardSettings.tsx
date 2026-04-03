import { useState, useEffect, useRef } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { UserAPI, SubscriptionAPI, AuthAPI, hashSHA256 } from "@/lib/api";
import {
  User, Key, CreditCard, Shield, CheckCircle2, Copy,
  RefreshCw, Trash2, Eye, EyeOff, Star, Loader2, Upload, AlertTriangle
} from "lucide-react";
import { motion } from "framer-motion";

/* ── types ── */
interface UserProfile {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
  current_plan: string | null;
  email_verified_at: string | null;
}

interface Plan {
  id: number;
  name: string;
  slug: string;
  description: string;
  monthly_price: number | null;
  yearly_price: number | null;
  features: string[];
  popular: boolean;
}

interface ApiKey {
  id: string;
  label: string;
  prefix: string;
  created: string;
  last_used: string;
}

/* ── mock keys (no dedicated endpoint in doc) ── */
const INITIAL_KEYS: ApiKey[] = [
  { id: "k1", label: "Production Key", prefix: "sk-prod", created: "Jan 15, 2026", last_used: "2 min ago" },
  { id: "k2", label: "Test Key",        prefix: "sk-test", created: "Feb 1, 2026",  last_used: "1 day ago" },
];

function genKey(prefix: string) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return prefix + "-" + Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function maskKey(key: string) {
  return key.slice(0, 10) + "••••••••••••••••";
}

/* ═══════════════════════════════════════════════════════
   ACCOUNT TAB
═══════════════════════════════════════════════════════ */
function AccountTab({ profile, onUpdate }: { profile: UserProfile | null; onUpdate: (p: UserProfile) => void }) {
  const [form, setForm] = useState({
    first_name: profile?.first_name ?? "",
    last_name: profile?.last_name ?? "",
    username: profile?.username ?? "",
    email: profile?.email ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (profile) {
      setForm({
        first_name: profile.first_name,
        last_name: profile.last_name,
        username: profile.username,
        email: profile.email,
      });
    }
  }, [profile]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res: any = await UserAPI.updateProfile(form);
      onUpdate(res.data);
      toast.success("Profile updated.", { description: "Your changes have been saved." });
    } catch (e: any) {
      toast.error("Update failed.", { description: e.message });
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("avatar", file);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://api.dataverg.com/api/user/avatar", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      onUpdate({ ...profile!, avatar: data.data.avatar });
      toast.success("Avatar updated.");
    } catch (e: any) {
      toast.error("Upload failed.", { description: e.message });
    } finally {
      setUploading(false);
    }
  };

  const initials = `${(form.first_name[0] ?? "").toUpperCase()}${(form.last_name[0] ?? "").toUpperCase()}`;

  return (
    <div className="space-y-6">
      <GlowCard className="bg-card/80">
        <div className="p-6 flex items-center gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl border-2 border-accent/30 overflow-hidden bg-accent/10 flex items-center justify-center text-2xl font-black text-accent-foreground">
              {profile?.avatar ? <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" /> : initials || <User className="w-8 h-8" />}
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              {uploading ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Upload className="w-5 h-5 text-white" />}
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">{form.first_name} {form.last_name}</h3>
            <p className="text-sm text-muted-foreground">{form.email}</p>
            <div className="flex items-center gap-1.5 mt-2">
              {profile?.email_verified_at
                ? <><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /><span className="text-xs text-green-500 font-medium">Email Verified</span></>
                : <><AlertTriangle className="w-3.5 h-3.5 text-amber-500" /><span className="text-xs text-amber-500 font-medium">Email Not Verified</span></>}
            </div>
          </div>
        </div>
      </GlowCard>

      <GlowCard className="bg-card/80">
        <div className="p-6 space-y-5">
          <h3 className="font-bold text-foreground">Profile Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="first_name">First Name</Label>
              <Input id="first_name" value={form.first_name} onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))} className="bg-background/50" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="last_name">Last Name</Label>
              <Input id="last_name" value={form.last_name} onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))} className="bg-background/50" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} className="bg-background/50" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="bg-background/50" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving…</> : "Save Changes"}
            </Button>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   API KEYS TAB
═══════════════════════════════════════════════════════ */
function ApiKeysTab() {
  const [keys, setKeys] = useState(INITIAL_KEYS);
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const [revealedFull, setRevealedFull] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState(false);

  const revoke = (id: string) => {
    setKeys(prev => { const k = prev.find(k => k.id === id); toast("Key revoked", { description: k?.label }); return prev.filter(k => k.id !== id); });
  };

  const reveal = (key: ApiKey) => {
    if (revealedId === key.id) { setRevealedId(null); return; }
    if (!revealedFull[key.id]) {
      setRevealedFull(p => ({ ...p, [key.id]: genKey(key.prefix) }));
    }
    setRevealedId(key.id);
  };

  const copy = (key: ApiKey) => {
    navigator.clipboard.writeText(revealedFull[key.id] ?? maskKey(key.prefix));
    toast.success("Copied to clipboard.");
  };

  const generate = () => {
    setGenerating(true);
    setTimeout(() => {
      const newKey: ApiKey = {
        id: `k${Date.now()}`,
        label: `Key ${keys.length + 1}`,
        prefix: "sk-new",
        created: "Just now",
        last_used: "Never",
      };
      setRevealedFull(p => ({ ...p, [newKey.id]: genKey(newKey.prefix) }));
      setRevealedId(newKey.id);
      setKeys(prev => [...prev, newKey]);
      toast.success("New API key generated.", { description: "Copy it now — it won't be shown again." });
      setGenerating(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <GlowCard className="bg-card/80">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">API Keys</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Do not share your keys. Treat them like passwords.</p>
            </div>
            <Button onClick={generate} disabled={generating} size="sm">
              {generating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Key className="mr-2 h-4 w-4" />}
              Generate Key
            </Button>
          </div>

          <div className="space-y-3">
            {keys.map(key => (
              <motion.div key={key.id} layout initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border bg-background/50">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{key.label}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1 truncate">
                    {revealedId === key.id ? revealedFull[key.id] : maskKey(key.prefix)}
                  </p>
                  <div className="flex gap-4 mt-1.5">
                    <span className="text-[10px] text-muted-foreground">Created: {key.created}</span>
                    <span className="text-[10px] text-muted-foreground">Last used: {key.last_used}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => reveal(key)}>
                    {revealedId === key.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copy(key)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => revoke(key.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BILLING TAB
═══════════════════════════════════════════════════════ */
function BillingTab({ currentPlan }: { currentPlan: string | null }) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState<string | null>(null);
  const [activePlan, setActivePlan] = useState(currentPlan ?? "starter");

  useEffect(() => {
    SubscriptionAPI.getPlans().then((res: any) => {
      setPlans(res.data ?? []);
    }).catch(() => {
      // Fallback to doc-defined plans if API not available
      setPlans([
        { id: 1, name: "Starter", slug: "starter", description: "For small teams getting started.", monthly_price: 49, yearly_price: 39, features: ["Up to 5 data sources", "10K records/month", "Core analytics", "Email support", "1 user seat"], popular: false },
        { id: 2, name: "Professional", slug: "professional", description: "For growing businesses with complex data needs.", monthly_price: 149, yearly_price: 119, features: ["Unlimited data sources", "1M records/month", "Advanced analytics & ML", "Priority support", "10 user seats", "Custom dashboards"], popular: true },
        { id: 3, name: "Enterprise", slug: "enterprise", description: "For large organisations requiring full control.", monthly_price: null, yearly_price: null, features: ["Unlimited everything", "Dedicated infrastructure", "SSO & SAML", "24/7 phone support", "Unlimited seats", "Custom SLAs"], popular: false },
      ]);
    }).finally(() => setLoading(false));
  }, []);

  const subscribe = async (slug: string) => {
    if (slug === "enterprise") { toast("Contact us", { description: "Email sales@dataverg.com to get started." }); return; }
    setSubscribing(slug);
    try {
      await SubscriptionAPI.subscribe({
        plan_slug: slug,
        payment_method: { card_number: "4111111111111111", expiry_month: "12", expiry_year: "27", cvv: "123", card_holder: "Test User" },
      });
      setActivePlan(slug);
      toast.success("Plan activated!", { description: `You are now on the ${slug} plan.` });
    } catch (e: any) {
      toast.error("Subscription failed.", { description: e.message });
    } finally {
      setSubscribing(null);
    }
  };

  if (loading) return (
    <div className="h-48 flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-accent-foreground" />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan, i) => {
          const isCurrent = activePlan === plan.slug;
          return (
            <GlowCard key={plan.slug} className={`bg-card/80 relative overflow-hidden ${plan.popular ? "border-accent/50" : ""}`} hoverScale={1.02}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-black px-3 py-1 rounded-bl-xl tracking-widest">POPULAR</div>
              )}
              <div className="p-6 flex flex-col h-full gap-4">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  {plan.monthly_price == null
                    ? <span className="text-2xl font-extrabold text-foreground">Custom</span>
                    : <><span className="text-3xl font-extrabold text-foreground">${plan.monthly_price}</span><span className="text-muted-foreground text-sm">/mo</span></>}
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={isCurrent ? "outline" : "default"}
                  className="w-full"
                  disabled={isCurrent || subscribing === plan.slug}
                  onClick={() => subscribe(plan.slug)}
                >
                  {subscribing === plan.slug ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : isCurrent ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Star className="mr-2 h-4 w-4" />}
                  {isCurrent ? "Current Plan" : plan.monthly_price == null ? "Contact Sales" : "Upgrade"}
                </Button>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECURITY TAB
═══════════════════════════════════════════════════════ */
function SecurityTab() {
  const [pwForm, setPwForm] = useState({ current: "", next: "", confirm: "" });
  const [saving, setSaving] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);

  const changePassword = async () => {
    if (pwForm.next !== pwForm.confirm) { toast.error("Passwords do not match."); return; }
    if (pwForm.next.length < 8) { toast.error("Password must be at least 8 characters."); return; }
    setSaving(true);
    try {
      const current_password_hash = await hashSHA256(pwForm.current);
      const password_hash = await hashSHA256(pwForm.next);
      const token = localStorage.getItem("token");
      const res = await fetch("https://api.dataverg.com/api/auth/password/change", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ current_password_hash, password_hash }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success("Password changed.", { description: "You remain logged in." });
      setPwForm({ current: "", next: "", confirm: "" });
    } catch (e: any) {
      toast.error("Failed to change password.", { description: e.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <GlowCard className="bg-card/80">
        <div className="p-6 space-y-5">
          <h3 className="font-bold text-foreground">Change Password</h3>
          <div className="space-y-4">
            <div className="space-y-1.5 relative">
              <Label>Current Password</Label>
              <div className="relative">
                <Input type={showCurrent ? "text" : "password"} value={pwForm.current} onChange={e => setPwForm(p => ({ ...p, current: e.target.value }))} className="bg-background/50 pr-10" />
                <button onClick={() => setShowCurrent(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>New Password</Label>
              <Input type="password" value={pwForm.next} onChange={e => setPwForm(p => ({ ...p, next: e.target.value }))} className="bg-background/50" />
            </div>
            <div className="space-y-1.5">
              <Label>Confirm New Password</Label>
              <Input type="password" value={pwForm.confirm} onChange={e => setPwForm(p => ({ ...p, confirm: e.target.value }))} className="bg-background/50" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={changePassword} disabled={saving || !pwForm.current || !pwForm.next}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Shield className="mr-2 h-4 w-4" />}
              Update Password
            </Button>
          </div>
        </div>
      </GlowCard>

      <GlowCard className="bg-card/80 border-destructive/30">
        <div className="p-6 space-y-3">
          <h3 className="font-bold text-destructive flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Danger Zone</h3>
          <p className="text-sm text-muted-foreground">Once you delete your account, all your data will be permanently removed. This action cannot be undone.</p>
          <Button variant="destructive" size="sm" onClick={() => toast.error("Account deletion requires email confirmation.") }>
            <Trash2 className="mr-2 h-4 w-4" /> Delete My Account
          </Button>
        </div>
      </GlowCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN SETTINGS PAGE
═══════════════════════════════════════════════════════ */
export default function DashboardSettings() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    UserAPI.getProfile().then((res: any) => {
      setProfile(res.data);
    }).catch(() => {
      /* use placeholder if not logged in */
      setProfile({
        id: 1, username: "john_doe", first_name: "John", last_name: "Doe",
        email: "john@dataverg.com", avatar: null, current_plan: "professional",
        email_verified_at: "2026-01-01T00:00:00Z",
      });
    }).finally(() => setLoadingProfile(false));
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your profile, security, API access and subscription.</p>
        </AnimatedSection>

        {loadingProfile ? (
          <div className="h-48 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent-foreground" /></div>
        ) : (
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4 h-auto p-1">
              <TabsTrigger value="account" className="flex items-center gap-2 py-2"><User className="h-4 w-4" /><span className="hidden sm:inline">Account</span></TabsTrigger>
              <TabsTrigger value="api-keys" className="flex items-center gap-2 py-2"><Key className="h-4 w-4" /><span className="hidden sm:inline">API Keys</span></TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2 py-2"><CreditCard className="h-4 w-4" /><span className="hidden sm:inline">Billing</span></TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2 py-2"><Shield className="h-4 w-4" /><span className="hidden sm:inline">Security</span></TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <AnimatedSection><AccountTab profile={profile} onUpdate={setProfile} /></AnimatedSection>
            </TabsContent>
            <TabsContent value="api-keys">
              <AnimatedSection><ApiKeysTab /></AnimatedSection>
            </TabsContent>
            <TabsContent value="billing">
              <AnimatedSection><BillingTab currentPlan={profile?.current_plan ?? null} /></AnimatedSection>
            </TabsContent>
            <TabsContent value="security">
              <AnimatedSection><SecurityTab /></AnimatedSection>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
}
