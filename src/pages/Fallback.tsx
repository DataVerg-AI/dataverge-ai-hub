import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, Home, RefreshCw, MessageSquare } from "lucide-react";
import DataStreamBg from "@/components/DataStreamBg";

const Fallback = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background">
        <DataStreamBg density="medium" />
        
        {/* Animated Background Rings */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-[600px] w-[600px] rounded-full border border-accent/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute h-[450px] w-[450px] rounded-full border border-primary/20"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-destructive/10 text-destructive shadow-2xl shadow-destructive/20 border border-destructive/20">
              <AlertCircle size={48} className="animate-pulse" />
            </div>
            
            <h1 className="mb-4 text-6xl font-extrabold tracking-tighter md:text-8xl">
              SIGNAL <span className="text-shine">LOST</span>
            </h1>
            
            <div className="mx-auto mb-12 max-w-2xl">
              <p className="text-xl font-medium text-foreground/80 md:text-2xl">
                Technical interference detected in the convergence stream.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                <span>Error_Code: 07x82b</span>
                <span className="opacity-40">|</span>
                <span>System_Status: Degraded</span>
                <span className="opacity-40">|</span>
                <span>Node: US-EAST-1</span>
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="accent"
                size="lg"
                className="h-14 min-w-[200px] text-base font-bold uppercase tracking-wider glow-accent"
                onClick={() => navigate("/")}
              >
                <Home className="mr-2 h-5 w-5" />
                Return to Core
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="h-14 min-w-[200px] text-base font-bold uppercase tracking-wider backdrop-blur-md"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Retry Uplink
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="h-14 min-w-[200px] text-base font-bold uppercase tracking-wider hov-accent"
                onClick={() => navigate("/contact")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Support Desk
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle decorative bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      </div>
    </Layout>
  );
};

export default Fallback;
