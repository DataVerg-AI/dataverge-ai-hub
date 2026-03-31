import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import React from "react";
import { EmailAPI, MapsAPI } from "@/lib/api";
import { Turnstile } from "@marsidev/react-turnstile";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import DataStreamBg from "@/components/DataStreamBg";
import { Mail, Phone, Clock, MapPin, ArrowRight, MessageSquare, ExternalLink, Globe2 } from "lucide-react";
import { FaLinkedin, FaYoutube, FaPinterest, FaXTwitter, FaFacebook, FaRocket } from "react-icons/fa6";
import { SiCrunchbase } from "react-icons/si";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [mapEmbedUrl, setMapEmbedUrl] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const HQ_ADDRESS = "1290 S Olive Street, Suite 520, Skyline Workspace, Los Angeles, CA 90015, USA";

  useEffect(() => {
    const fetchMapPin = async () => {
      try {
        const res: any = await MapsAPI.createPin(HQ_ADDRESS);
        if (res?.data?.embed_url) {
          setMapEmbedUrl(res.data.embed_url);
        }
      } catch (err) {
        console.error("Failed to fetch map pin:", err);
      }
    };
    fetchMapPin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!turnstileToken) {
      toast({ 
        title: "Security Check Required", 
        description: "Please complete the CAPTCHA before sending.",
        variant: "destructive"
      });
      return;
    }

    setErrors({});
    setSending(true);
    
    try {
      await EmailAPI.contact({
        ...form,
        turnstile_token: turnstileToken
      });
      
      toast({ 
        title: "Message received.", 
        description: "Secure channel established. We'll be in touch." 
      });
      setForm({ name: "", email: "", company: "", message: "" });
      setTurnstileToken(""); // Reset for next submission
    } catch (err: any) {
      toast({ 
        title: "Transmission failed.", 
        description: err.message || "Could not established secure connection.",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        <DataStreamBg density="medium" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
        <div className="container relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/80 backdrop-blur px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                System Online · Open for Comms
              </motion.div>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                Initiate <span className="text-shine">Connection</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground w-3/4">
                Bypass the noise. Connect directly with our engineering and enterprise solutions teams to architect your convergence strategy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content: Info Bento + Form */}
      <section className="bg-background pb-32 relative z-20 -mt-8">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left: Asymmetric Info Bento Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-[160px]">
               {/* Global HQ - Tall card */}
                <AnimatedSection className="col-span-2 row-span-2" delay={0.1}>
                  <GlowCard className="h-full bg-card group border-border relative overflow-hidden" hoverScale={1.01}>
                    {/* Dynamic Map Background */}
                    <div className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-105">
                      {mapEmbedUrl ? (
                         <iframe 
                           src={mapEmbedUrl}
                           width="100%" 
                           height="100%" 
                           style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
                           allowFullScreen={false} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           className="absolute inset-0"
                         />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 p-4">
                          <Globe2 className="absolute -right-10 -bottom-10 w-64 h-64 text-accent/20" strokeWidth={0.5} />
                        </div>
                      )}
                    </div>
                   
                   <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                     <div>
                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mb-6">
                         <MapPin className="text-accent" size={24} />
                       </div>
                       <h3 className="text-2xl font-bold uppercase tracking-wide">Global HQ</h3>
                       <p className="mt-2 text-muted-foreground text-lg">1290 S Olive Street, Suite 520,<br/>Skyline Workspace, Los Angeles,<br/>CA 90015, USA</p>
                     </div>
                     <a href="https://maps.google.com/?q=1290+S+Olive+Street,+Suite+520,+Skyline+Workspace,+Los+Angeles,+CA+90015" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-foreground transition-colors mt-8 w-fit">
                       View Coordinates <ExternalLink size={14} />
                     </a>
                   </div>
                 </GlowCard>
               </AnimatedSection>

               {/* Email - Wide card */}
               <AnimatedSection className="col-span-2 row-span-1" delay={0.2}>
                 <GlowCard className="h-full bg-card group flex items-center p-6 border-border" hoverScale={1.02}>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 mr-6">
                       <Mail className="text-primary" size={24} />
                     </div>
                     <div>
                       <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Direct Line</div>
                       <a href="mailto:help@dataverg.com" className="text-xl font-bold hover:text-accent transition-colors">help@dataverg.com</a>
                     </div>
                 </GlowCard>
               </AnimatedSection>

               {/* Phone - Square card */}
               <AnimatedSection className="col-span-1 row-span-1" delay={0.3}>
                 <GlowCard className="h-full bg-card flex flex-col justify-center p-6 border-border group" hoverScale={1.03}>
                    <Phone className="text-muted-foreground mb-4 group-hover:text-accent transition-colors" size={24} />
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Support Desk</div>
                    <a href="tel:+15642618250" className="font-bold text-sm tracking-tight">+15642618250</a>
                 </GlowCard>
               </AnimatedSection>
               
               {/* Hours - Square card */}
               <AnimatedSection className="col-span-1 row-span-1" delay={0.4}>
                 <GlowCard className="h-full bg-card flex flex-col justify-center p-6 border-border group overflow-hidden relative" hoverScale={1.03}>
                    {/* Animated clock ring */}
                    <motion.div 
                      className="absolute right-0 top-0 w-24 h-24 border border-accent/10 rounded-full translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent absolute top-0 left-1/2 -ml-1 -mt-1" />
                    </motion.div>
                    
                    <Clock className="text-muted-foreground mb-4 relative z-10" size={24} />
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 relative z-10">Uptime</div>
                    <div className="font-bold text-sm relative z-10">9AM - 6PM EST<br/><span className="text-accent text-xs">Mon - Fri</span></div>
                 </GlowCard>
               </AnimatedSection>

                {/* Digital Presence - Wide card */}
                <AnimatedSection className="col-span-2 row-span-1" delay={0.5}>
                  <GlowCard className="h-full bg-card p-6 border-border group" hoverScale={1.02}>
                    <div className="flex flex-col h-full justify-between">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Digital Presence</div>
                      <div className="flex flex-wrap gap-3">
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
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            title={s.label}
                          >
                            <s.icon size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
            </div>

            {/* Right: Immersive Contact Form Terminal */}
            <div className="lg:col-span-7 h-full">
              <AnimatedSection delay={0.3} className="h-full">
                <div className="relative h-full rounded-2xl border border-border bg-card/50 backdrop-blur-md shadow-2xl p-8 lg:p-12 overflow-hidden flex flex-col justify-center">
                  {/* Cyber UI accents */}
                  <div className="absolute top-0 left-8 px-4 py-1 rounded-b-lg bg-border text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Term_01 // SECURE</div>
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 mt-6 relative z-10">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Identity</label>
                        <div className="glow-input rounded-lg overflow-hidden border border-border bg-background/50">
                          <Input
                            placeholder="Full Name"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            className={`border-none bg-transparent h-12 focus-visible:ring-0 ${errors.name ? "text-destructive placeholder:text-destructive/50" : ""}`}
                          />
                        </div>
                        {errors.name && <p className="text-[10px] text-destructive ml-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Address</label>
                        <div className="glow-input rounded-lg overflow-hidden border border-border bg-background/50">
                          <Input
                            type="email"
                            placeholder="Email Coordinates"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className={`border-none bg-transparent h-12 focus-visible:ring-0 ${errors.email ? "text-destructive placeholder:text-destructive/50" : ""}`}
                          />
                        </div>
                        {errors.email && <p className="text-[10px] text-destructive ml-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Organization</label>
                      <div className="glow-input rounded-lg overflow-hidden border border-border bg-background/50">
                        <Input
                          placeholder="Company Name (Optional)"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="border-none bg-transparent h-12 focus-visible:ring-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Transmission</label>
                      <div className="glow-input rounded-lg overflow-hidden border border-border bg-background/50">
                        <Textarea
                          placeholder="Specify integration parameters..."
                          rows={6}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className={`border-none bg-transparent resize-none p-4 focus-visible:ring-0 ${errors.message ? "text-destructive placeholder:text-destructive/50" : ""}`}
                        />
                      </div>
                      {errors.message && <p className="text-[10px] text-destructive ml-1">{errors.message}</p>}
                    </div>

                    <div className="flex justify-center">
                      <Turnstile
                        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                        onSuccess={(token) => setTurnstileToken(token)}
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="accent"
                        size="lg"
                        type="submit"
                        className="w-full h-14 glow-accent rounded-lg font-bold tracking-wide uppercase text-sm"
                        disabled={sending}
                      >
                        {sending ? (
                          <span className="flex items-center gap-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full"
                            />
                            Transmitting...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Initialize Signal <ArrowRight size={18} />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
