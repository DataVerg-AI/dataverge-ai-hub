import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does DataVerge differ from traditional ETL tools?",
    a: "DataVerge uses AI-native convergence, not just extraction and loading. Our DataVerGAI engine understands your data schemas, automatically maps fields across sources, and provides predictive insights — all in real time without batch processing.",
  },
  {
    q: "What data sources can DataVerge connect to?",
    a: "We support 200+ connectors out of the box: REST/GraphQL APIs, cloud platforms (AWS, GCP, Azure), databases (PostgreSQL, MySQL, MongoDB, Snowflake), SaaS tools (Salesforce, HubSpot, Stripe), and custom sources via our SDK.",
  },
  {
    q: "Is my data secure with DataVerge?",
    a: "Absolutely. We're SOC 2 Type II certified, with end-to-end AES-256 encryption, zero-trust architecture, and full audit logging. Your data never leaves your designated region, and we offer on-premise deployment for Enterprise clients.",
  },
  {
    q: "How long does it take to set up?",
    a: "Most teams are up and running in under an hour. Connect your first data source, and DataVerGAI automatically discovers schemas and suggests mappings. No complex configuration or coding required.",
  },
  {
    q: "Can I try DataVerge before committing?",
    a: "Yes! We offer a 14-day free trial on all plans with full feature access. No credit card required. We also offer guided onboarding calls for Enterprise prospects.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter plans include email support. Professional plans get priority support with 4-hour SLA. Enterprise clients receive 24/7 phone support, a dedicated success manager, and custom SLAs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-secondary py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Frequently asked questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about DataVerge.</p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className="overflow-hidden rounded-2xl border border-border bg-background"
                layout
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-sm font-semibold md:text-base">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={20} className="text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
