import { useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AIAPI } from "@/lib/api";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm the DataVerge assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMessage }]);
    setInput("");
    setIsGenerating(true);

    try {
      const res: any = await AIAPI.generate(userMessage, {
        history: messages.slice(-5) // Send some context
      });
      
      const botResponse = res?.data?.text || res?.message || "I'm having trouble connecting to the neural link. Please try again.";
      
      setMessages((m) => [
        ...m,
        { role: "bot", text: botResponse },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Connection error. Please check your signal and try again." },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-96 w-80 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <div className="border-b border-border bg-accent px-4 py-3">
            <span className="text-sm font-semibold text-accent-foreground">DataVerge Assistant</span>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-sm text-secondary-foreground italic">
                  <Loader2 size={12} className="animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-border p-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="h-9 text-sm"
            />
             <Button variant="accent" size="icon" type="submit" className="h-9 w-9 shrink-0" disabled={isGenerating}>
              {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
