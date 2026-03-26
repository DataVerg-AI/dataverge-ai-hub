import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import DataStreamBg from "@/components/DataStreamBg";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 39,
    desc: "For small teams getting started with data convergence.",
    popular: false,
    features: ["Up to 5 data sources", "10K records/month", "Basic analytics", "Email support", "1 user seat"],
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    yearlyPrice: 119,
    desc: "For growing businesses with complex data needs.",
    popular: true,
    features: ["Unlimited data sources", "1M records/month", "Advanced analytics & AI", "Priority support", "10 user seats", "Custom dashboards"],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    desc: "For large organizations requiring full control.",
    popular: false,
    features: ["Unlimited everything", "Dedicated infrastructure", "SSO & SAML", "24/7 phone support", "Unlimited seats", "Custom SLAs", "On-premise option"],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-background py-24">
        <DataStreamBg density="low" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container relative">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                Pricing
              </span>
              <h1 className="text-4xl font-extrabold md:text-6xl">Simple, transparent pricing</h1>
              <p className="mt-4 text-lg text-muted-foreground">Start free. Scale as you grow. No hidden fees.</p>

              {/* Billing Toggle */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className={`text-sm font-medium transition-colors ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                <button
                  onClick={() => setYearly((v) => !v)}
                  className={`relative h-7 w-14 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    yearly ? "bg-accent" : "bg-muted"
                  }`}
                  aria-label="Toggle billing period"
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md ${yearly ? "left-7" : "left-0.5"}`}
                  />
                </button>
                <span className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
                  Yearly
                  <AnimatePresence>
                    {yearly && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-600"
                      >
                        <Zap size={9} /> Save 20%
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <AnimatedSection key={plan.name} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-xl ${
                      plan.popular
                        ? "border-accent bg-background shadow-2xl shadow-accent/15"
                        : "border-border bg-background hover:shadow-accent/5"
                    }`}
                  >
                    {/* Gradient shimmer border effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--brand-yellow) / 0.08), transparent 40%, transparent 60%, hsl(var(--brand-yellow) / 0.05))",
                      }}
                    />

                    {/* Top shimmer line */}
                    <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
                      <motion.div
                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                        animate={{ x: ["-100%", "400%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                      />
                    </div>

                    {/* Animated corner decorations for popular plan */}
                    {plan.popular && (
                      <>
                        <motion.div
                          className="absolute top-0 right-0 h-16 w-16"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.15 }}
                        >
                          <svg viewBox="0 0 64 64" className="h-full w-full">
                            <motion.path
                              d="M64,0 Q64,32 32,64"
                              fill="none"
                              stroke="hsl(var(--brand-yellow))"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </svg>
                        </motion.div>
                        <motion.div
                          className="absolute bottom-0 left-0 h-16 w-16 rotate-180"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.15 }}
                        >
                          <svg viewBox="0 0 64 64" className="h-full w-full">
                            <motion.path
                              d="M64,0 Q64,32 32,64"
                              fill="none"
                              stroke="hsl(var(--brand-yellow))"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            />
                          </svg>
                        </motion.div>
                      </>
                    )}

                    {plan.popular && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/20"
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="mt-4 flex items-end gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={String(yearly)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="text-4xl font-extrabold"
                          >
                            {price == null ? "Custom" : `$${price}`}
                          </motion.span>
                        </AnimatePresence>
                        {price != null && (
                          <span className="mb-1 text-muted-foreground">/mo</span>
                        )}
                      </div>

                      {yearly && plan.monthlyPrice != null && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-1 text-xs text-emerald-600"
                        >
                          Billed ${(plan.yearlyPrice! * 12).toLocaleString()}/yr · You save ${((plan.monthlyPrice - plan.yearlyPrice!) * 12)}/yr
                        </motion.div>
                      )}

                      <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>

                      <ul className="mt-8 flex-1 space-y-3">
                        {plan.features.map((f, fi) => (
                          <motion.li
                            key={f}
                            className="flex items-center gap-2 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + fi * 0.05 }}
                          >
                            <motion.div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular ? "bg-accent/20" : "bg-secondary"}`}
                              whileHover={{ scale: 1.2 }}
                            >
                              <Check size={12} className={plan.popular ? "text-accent-foreground" : "text-muted-foreground"} />
                            </motion.div>
                            {f}
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        variant={plan.popular ? "accent" : "outline"}
                        size="lg"
                        className={`mt-8 w-full ${plan.popular ? "glow-accent" : ""}`}
                        asChild
                      >
                        <Link to="/contact">
                          {price == null ? "Contact Sales" : "Get Started"}
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              All plans include a <strong className="text-foreground">14-day free trial</strong>. No credit card required.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQ />
    </Layout>
  );
};

export default Pricing;
