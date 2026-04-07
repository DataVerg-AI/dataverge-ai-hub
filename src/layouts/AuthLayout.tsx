import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Database } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left side - Branding/Info */}
      <div className="hidden md:flex flex-col flex-1 bg-muted/30 p-10 justify-between relative overflow-hidden border-r border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-50" />
        <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 p-32 bg-purple-500/20 blur-[100px] rounded-full" />

        <Link to="/" className="flex items-center gap-2 relative z-10 w-fit">
          <Logo />
        </Link>
        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Accelerate your AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">infrastructure</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of developers building scalable, high-performance AI applications with DataVerg AI Hub.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 relative">
        <div className="w-full max-w-[400px]">
          <div className="md:hidden flex items-center gap-2 mb-8">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
