import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-extrabold text-accent-foreground">D</span>
              </div>
              <span className="text-lg font-bold">DataVerge</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Merging fragmented data into one intelligent, unified system.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Product</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/product" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">DataVerGAI</Link>
              <Link to="/pricing" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">Pricing</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">Blog</Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">About</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">Contact</Link>
              <Link to="/terms" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">Terms</Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">Privacy</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/60">Get the latest on data convergence.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button variant="accent" size="default" type="submit">Join</Button>
            </form>
            <div className="flex gap-4 pt-2">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a key={s} href="#" className="text-xs text-primary-foreground/50 transition-colors hover:text-accent">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} DataVerge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
