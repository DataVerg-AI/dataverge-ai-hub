import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, Clock, MapPin, ArrowRight, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@dataverge.ai",
    href: "mailto:hello@dataverge.ai",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) 328-2837",
    href: "tel:+18883282837",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri, 9 AM – 6 PM EST",
    href: null,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "340 Pine St, San Francisco, CA 94104",
    href: "https://maps.google.com/?q=340+Pine+St,+San+Francisco,+CA+94104",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent! 🎉", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", company: "", message: "" });
    }, 800);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-28 pb-16">
        {/* Background decoration */}
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="container relative">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent-foreground"
              >
                <MessageSquare size={13} className="text-accent" />
                Get in Touch
              </motion.div>
              <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                Let's start a{" "}
                <span className="text-shine">conversation</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Whether you need a demo, have questions about pricing, or want to explore a custom plan — we're here to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background pb-6">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-5`}
                >
                  <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-background/50 backdrop-blur-sm`}>
                    <item.icon size={18} className={item.iconColor} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-semibold text-foreground">{item.value}</div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/5">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">We respond within 24 hours on business days.</p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <Input
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                  <div>
                    <Textarea
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <Button
                    variant="accent"
                    size="lg"
                    type="submit"
                    className="w-full glow-accent"
                    disabled={sending}
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground"
                        />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <ArrowRight size={16} />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Right side: Map + Extra Info */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-6 h-full">
                {/* Map */}
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5 flex-1 min-h-[280px]">
                  <iframe
                    title="DataVerge Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863432607064!2d-122.40244852359423!3d37.79177887197654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8dfc8e0f%3A0x6fcd20b3cc29ca0!2s340%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1711456000000!5m2!1sen!2sus"
                    className="h-full w-full"
                    style={{ minHeight: "280px", filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.05)" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Response promise card */}
                <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-background p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <Clock size={20} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold">We respond fast</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Typical response time is under 4 hours during business hours. For urgent matters, call us directly.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      { label: "Response Time", val: "< 4 hrs" },
                      { label: "Availability", val: "Mon–Fri" },
                      { label: "Support", val: "24/7*" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl bg-background/60 p-3">
                        <div className="text-lg font-extrabold text-accent-foreground">{item.val}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] text-muted-foreground/60">* 24/7 support available for Enterprise plans.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
