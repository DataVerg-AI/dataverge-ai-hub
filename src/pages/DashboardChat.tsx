import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AIAPI } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, Loader2, Bot, User, Sparkles, RotateCcw,
  Database, Zap, TrendingUp, ChevronRight, Copy, CheckCheck
} from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "assistant" | "user";
  text: string;
  timestamp: Date;
  tokens?: number;
  model?: string;
}

const SUGGESTIONS = [
  "Summarize my data pipeline health",
  "Which data source has the most errors?",
  "Show me anomalies in last 7 days",
  "How do I connect a new PostgreSQL source?",
  "What's the predicted load for next week?",
];

const INITIAL_MSG: Message = {
  id: "0",
  role: "assistant",
  text: "Hello! I'm DataVerg AI, your intelligent convergence assistant.\n\nI can help you analyze your data pipelines, detect anomalies, summarize model performance, and answer questions about your unified data layer. What would you like to explore today?",
  timestamp: new Date(),
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/20 border border-accent/30">
        <Bot className="h-4 w-4 text-accent-foreground" />
      </div>
      <div className="flex items-center gap-1.5 bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3">
        {[0, 0.2, 0.4].map((d, i) => (
          <motion.div key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
            transition={{ duration: 1, delay: d, repeat: Infinity }} />
        ))}
      </div>
    </div>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const [copied, setCopied] = useState(false);
  const isBot = msg.role === "assistant";

  const copy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-3 ${isBot ? "" : "flex-row-reverse"}`}
    >
      {/* Avatar */}
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
        isBot
          ? "bg-accent/20 border-accent/30"
          : "bg-foreground/10 border-border"
      }`}>
        {isBot
          ? <Bot className="h-4 w-4 text-accent-foreground" />
          : <User className="h-4 w-4 text-foreground" />}
      </div>

      {/* Bubble */}
      <div className={`group relative max-w-[85vw] sm:max-w-[78%] ${isBot ? "" : ""}`}>
        <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isBot
            ? "bg-card border border-border rounded-bl-sm text-foreground"
            : "bg-accent text-accent-foreground rounded-br-sm"
        }`}>
          {msg.text}
        </div>
        <div className={`flex items-center gap-2 mt-1 flex-wrap ${isBot ? "" : "justify-end"}`}>
          <span className="text-[10px] text-muted-foreground">
            {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          {isBot && msg.model && (
            <span className="text-[10px] bg-accent/10 text-accent-foreground px-1.5 py-0.5 rounded font-mono">
              {msg.model}
            </span>
          )}
          {isBot && msg.tokens !== undefined && (
            <span className="text-[10px] text-muted-foreground">{msg.tokens} tokens</span>
          )}
          {isBot && (
            <button onClick={copy} className="opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? <CheckCheck className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3 text-muted-foreground" />}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: trimmed, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res: any = await AIAPI.generate({
        system: "You are DataVerg AI, an intelligent assistant built into the DataVerg Data Convergence Platform. Help users analyze their data pipelines, detect anomalies, understand model performance, and manage integrations. Be concise, insightful, and technical when appropriate.",
        messages: [
          ...messages.slice(-8).map(m => ({
            role: m.role as "assistant" | "user",
            content: m.text,
          })),
          { role: "user" as const, content: trimmed },
        ],
        maxTokens: 512,
      });
      // Parse real API response: data.choices[0].message.content
      const choice = res?.data?.choices?.[0];
      const reply = choice?.message?.content
        || res?.data?.text
        || res?.message
        || "I processed your query but received an empty response from the convergence engine.";
      const tokenCount: number | undefined = res?.data?.usage?.total_tokens;
      const modelName: string | undefined = res?.data?.model;
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: "assistant",
        text: reply,
        timestamp: new Date(),
        tokens: tokenCount,
        model: modelName,
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now().toString(), role: "assistant",
        text: "⚠️ The convergence engine is temporarily unreachable. Please verify your API token is set and try again.",
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const reset = () => {
    setMessages([INITIAL_MSG]);
    toast("Conversation reset.");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 border border-accent/30">
                <Sparkles className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">DataVerg AI</h2>
                <p className="text-xs text-muted-foreground">Powered by the Convergence Engine · Connected to your data layer</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-4 w-4 mr-2" /> New Chat
            </Button>
          </div>
        </AnimatedSection>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: Database, label: "Data Sources", value: "12 Active" },
            { icon: Zap,      label: "Queries Today", value: "4,821" },
            { icon: TrendingUp, label: "Model Accuracy", value: "98.4%" },
          ].map((s) => (
            <GlowCard key={s.label} className="bg-card/60" hoverY={-2}>
              <div className="p-3 flex items-center gap-3">
                <s.icon className="h-4 w-4 text-accent-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-bold text-foreground">{s.value}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Chat window */}
        <GlowCard className="bg-card/60 flex flex-col min-h-[60vh]">
          {/* Messages */}
          <div className="flex-1 min-h-0 p-5 space-y-5 overflow-visible">
            <AnimatePresence>
              {messages.map(m => <Bubble key={m.id} msg={m} />)}
            </AnimatePresence>
            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-5 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="flex items-center gap-1.5 text-xs bg-accent/10 hover:bg-accent/20 border border-accent/20 text-foreground px-3 py-1.5 rounded-full transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-accent-foreground" />
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border/50 p-4">
            <form
              onSubmit={e => { e.preventDefault(); send(input); }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask anything about your data convergence layer…"
                disabled={loading}
                className="flex-1 min-w-0 bg-background/50 border-border"
              />
              <Button type="submit" disabled={loading || !input.trim()} className="w-full sm:w-auto shrink-0">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </GlowCard>
      </div>
    </DashboardLayout>
  );
}
