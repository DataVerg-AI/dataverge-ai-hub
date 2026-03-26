import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "For small teams getting started with data convergence.",
    popular: false,
    features: ["Up to 5 data sources", "10K records/month", "Basic analytics", "Email support", "1 user seat"],
  },
  {
    name: "Professional",
    price: "$149",
    desc: "For growing businesses with complex data needs.",
    popular: true,
    features: ["Unlimited data sources", "1M records/month", "Advanced analytics & AI", "Priority support", "10 user seats", "Custom dashboards"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations requiring full control.",
    popular: false,
    features: ["Unlimited everything", "Dedicated infrastructure", "SSO & SAML", "24/7 phone support", "Unlimited seats", "Custom SLAs", "On-premise option"],
  },
];

const Pricing = () => (
  <Layout>
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              Pricing
            </span>
            <h1 className="text-4xl font-extrabold md:text-6xl">Simple, transparent pricing</h1>
            <p className="mt-4 text-lg text-muted-foreground">Start free. Scale as you grow. No hidden fees.</p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-accent bg-background shadow-2xl shadow-accent/15 border-glow"
                    : "border-border bg-background"
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/20"
                  >
                    Most Popular
                  </motion.div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular ? "bg-accent/20" : "bg-secondary"}`}>
                        <Check size={12} className={plan.popular ? "text-accent-foreground" : "text-muted-foreground"} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  size="lg"
                  className={`mt-8 w-full ${plan.popular ? "glow-accent" : ""}`}
                  asChild
                >
                  <Link to="/contact">
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <FAQ />
  </Layout>
);

export default Pricing;
