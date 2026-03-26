import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

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
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Simple, transparent pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground">Start free. Scale as you grow. No hidden fees.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-accent bg-background shadow-xl shadow-accent/10"
                  : "border-border bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                  Most Popular
                </div>
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
                    <Check size={16} className={plan.popular ? "text-accent-foreground" : "text-muted-foreground"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "accent" : "outline"}
                size="lg"
                className="mt-8 w-full"
                asChild
              >
                <Link to="/contact">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
