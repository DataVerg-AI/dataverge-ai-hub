import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles, ChevronDown, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AIAPI } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
  id: number;
}

const QUICK_REPLIES = [
  "How does DataVerg work?",
  "What data sources do you support?",
  "Show me pricing plans",
  "Talk to sales",
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 0,
    role: "bot",
    text: "Hi there! 👋 I'm the DataVerg AI assistant.\n\nI can help you explore our Data Convergence Platform, answer questions about features, pricing, and integrations. What would you like to know?",
  },
];

let msgId = 1;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");

    const userMsg: Message = { id: msgId++, role: "user", text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res: any = await AIAPI.generate({
        system: "You are the DataVerg AI assistant on the public website. DataVerg is a Data Convergence Platform — it merges and unifies data from multiple sources (APIs, databases, cloud platforms) into one intelligent system. Be helpful, friendly, and concise. Guide users toward DataVerg's features, pricing, and booking a demo. Keep responses under 3 sentences when possible.",
        messages: [
          ...messages.slice(-6).map(m => ({
            role: m.role === "bot" ? "assistant" : "user",
            content: m.text,
          })) as { role: "assistant" | "user"; content: string }[],
          { role: "user" as const, content: trimmed },
        ],
        maxTokens: 256,
      });
      // Parse real API response: data.choices[0].message.content
      const choice = res?.data?.choices?.[0];
      const reply = choice?.message?.content
        || res?.data?.text
        || res?.message
        || "Thanks for your question! Our team will be able to provide a more detailed answer. Would you like to book a demo?";
      setMessages(prev => [...prev, { id: msgId++, role: "bot", text: reply }]);
    } catch {
      setMessages(prev => [...prev, {
        id: msgId++, role: "bot",
        text: "I'm having a brief connectivity issue. Please try again or contact us at hello@dataverg.com."
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => { setOpen(o => !o); setHasUnread(false); }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, hsl(61 100% 59%), hsl(48 100% 50%))",
        }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="h-6 w-6 text-black" />
              </motion.div>
            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="h-6 w-6 text-black" />
              </motion.div>
          }
        </AnimatePresence>

        {/* Unread badge */}
        {hasUnread && !open && (
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white"
          >1</motion.span>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] rounded-2xl border border-border/60 bg-background shadow-2xl overflow-hidden flex flex-col"
            style={{ height: minimized ? "auto" : "520px", maxHeight: "80vh" }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, hsl(61 100% 59% / 0.15), hsl(48 100% 50% / 0.08))",
                borderBottom: "1px solid hsl(var(--border) / 0.5)"
              }}
              onClick={() => setMinimized(m => !m)}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 border border-accent/30">
                <Sparkles className="h-4 w-4 text-accent-foreground" style={{ color: "hsl(61 100% 40%)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">DataVerg AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] text-muted-foreground">Online · Convergence Intelligence</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                {minimized ? <ChevronDown className="h-4 w-4 rotate-180" /> : <Minimize2 className="h-4 w-4" />}
              </button>
            </div>

            {/* Body */}
            <AnimatePresence>
              {!minimized && (
                <motion.div
                  initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                  className="flex flex-col flex-1 min-h-0 overflow-hidden"
                >
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
                    {messages.map(m => (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        {/* Avatar */}
                        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
                          m.role === "bot"
                            ? "bg-accent/15 border-accent/25"
                            : "bg-foreground/10 border-border"
                        }`}>
                          {m.role === "bot"
                            ? <Bot className="h-3.5 w-3.5" style={{ color: "hsl(61 100% 40%)" }} />
                            : <User className="h-3.5 w-3.5 text-foreground" />}
                        </div>
                        {/* Bubble */}
                        <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                          m.role === "user"
                            ? "bg-foreground text-background rounded-br-sm"
                            : "bg-card border border-border rounded-bl-sm text-foreground"
                        }`}>
                          {m.text}
                        </div>
                      </motion.div>
                    ))}

                    {loading && (
                      <div className="flex items-end gap-2">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border bg-accent/15 border-accent/25">
                          <Bot className="h-3.5 w-3.5" style={{ color: "hsl(61 100% 40%)" }} />
                        </div>
                        <div className="flex items-center gap-1.5 bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                          {[0, 0.2, 0.4].map((d, i) => (
                            <motion.div key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                              transition={{ duration: 0.9, delay: d, repeat: Infinity }} />
                          ))}
                        </div>
                      </div>
                    )}
                    <div ref={bottomRef} />
                  </div>

                  {/* Quick replies */}
                  {messages.length <= 1 && (
                    <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                      {QUICK_REPLIES.map(q => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="text-[11px] bg-card hover:bg-accent/10 border border-border hover:border-accent/30 text-foreground px-2.5 py-1 rounded-full transition-all"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input */}
                  <form
                    onSubmit={e => { e.preventDefault(); send(input); }}
                    className="flex gap-2 border-t border-border/50 p-3"
                  >
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder="Ask about DataVerg…"
                      disabled={loading}
                      className="h-9 text-sm bg-card/60 border-border"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="h-9 w-9 shrink-0"
                      disabled={loading || !input.trim()}
                      style={{ background: "hsl(61 100% 50%)", color: "black" }}
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </form>

                  {/* Footer */}
                  <div className="px-4 pb-3 text-center">
                    <p className="text-[10px] text-muted-foreground">Powered by DataVerg Convergence Intelligence</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
