import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmailAPI } from "@/lib/api";
import { Turnstile } from "@marsidev/react-turnstile";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaYoutube, FaPinterest, FaXTwitter, FaFacebook, FaRocket } from "react-icons/fa6";
import Logo from "@/components/ui/logo";
import { SiCrunchbase } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    if (!turnstileToken) {
      toast({
        title: "Captcha Required",
        description: "Please complete the CAPTCHA to join.",
        variant: "destructive"
      });
      return;
    }

    setStatus("loading");
    try {
      await EmailAPI.newsletter(email, turnstileToken);
      setStatus("success");
      setEmail("");
      toast({
        title: "Welcome aboard!",
        description: "You've successfully joined our newsletter.",
      });
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
      toast({
        title: "Subscription failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="relative border-t border-border bg-secondary text-foreground">
      {/* Wave SVG divider at top */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block h-6 w-full" style={{ transform: "rotate(180deg)" }}>
          <path
            d="M0,20 C300,40 400,0 600,20 C800,40 900,0 1200,20 L1200,40 L0,40 Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>

      <div className="container pt-20 pb-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-sm text-foreground/60">
              Merging fragmented data into one unified, intelligent system.
            </p>
            {/* Decorative data dots */}
            <div className="flex gap-2 pt-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="h-1 w-1 rounded-full bg-accent/30"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">Product</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/product", label: "DataVerGAI" },
                { to: "/pricing", label: "Pricing" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to={link.to} className="text-sm text-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">Company</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/terms", label: "Terms" },
                { to: "/privacy", label: "Privacy" },
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to={link.to} className="text-sm text-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">Stay Updated</h4>
            <p className="text-sm text-foreground/60">Get the latest on data convergence.</p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <div className="flex gap-2">
                <div className="flex-1 glow-input rounded-md">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    className="h-10 border-foreground/20 bg-background text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <Button
                  variant="accent"
                  size="default"
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    "Join"
                  )}
                </Button>
              </div>
              <div className="flex justify-start transform scale-75 origin-left -mt-1 opacity-80 hover:opacity-100 transition-opacity">
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ size: "normal", theme: "auto", action: "newsletter" }}
                />
              </div>
            </form>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/dataverg-tech/", label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://x.com/dataverg", label: "X" },
                { icon: FaYoutube, href: "https://www.youtube.com/@DataVergTech", label: "YouTube" },
                { icon: FaFacebook, href: "https://www.facebook.com/dataVerg/", label: "Facebook" },
                { icon: FaPinterest, href: "https://www.pinterest.com/Dataverg/", label: "Pinterest" },
                { icon: SiCrunchbase, href: "https://www.crunchbase.com/organization/dataverg-tech", label: "Crunchbase" },
                { icon: FaRocket, href: "https://www.f6s.com/dataverg-tech", label: "F6S" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent-foreground hover:text-accent transition-colors bg-accent text-accent-foreground"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  title={s.label}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-8 text-center text-xs text-foreground/40">
          © {new Date().getFullYear()} DataVerge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
