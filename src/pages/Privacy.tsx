import Layout from "@/components/Layout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import DataStreamBg from "@/components/DataStreamBg";
import { Database, ShieldCheck, LockKeyhole, Share2, UserCog, Settings, Mail } from "lucide-react";
import { useEffect } from "react";

const policies = [
  {
    icon: <Database size={24} />,
    title: "1. Information We Collect",
    content: "We collect information you provide directly, such as name, email, and company details, as well as usage data through analytics to improve our core platform.",
  },
  {
    icon: <Settings size={24} />,
    title: "2. How We Use Your Information",
    content: "We use your information to provide and improve our services, communicate with you, and ensure platform security across all DataVerge nodes.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "3. Data Security",
    content: "We implement industry-standard security measures including end-to-end encryption, SOC 2 compliance, and regular security audits of our entire infrastructure.",
  },
  {
    icon: <Share2 size={24} />,
    title: "4. Data Sharing",
    content: "We do not sell your personal data. We may share data with service providers who assist in operating our platform, strictly under confidentiality agreements.",
  },
  {
    icon: <UserCog size={24} />,
    title: "5. Your Rights",
    content: "You have the right to access, correct, or delete your personal data. We provide tools within your dashboard to manage your data footprint.",
  },
  {
    icon: <LockKeyhole size={24} />,
    title: "6. Cookies & Tracking",
    content: "We use essential cookies to maintain secure sessions. You can manage optional analytics cookie preferences through your account settings.",
  }
];

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="relative min-h-screen bg-background pt-32 pb-24 overflow-hidden">
        {/* Background Visuals */}
        <DataStreamBg density="low" />
        <div className="absolute top-40 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="container relative z-10 max-w-4xl">
          <AnimatedSection>
            <div className="text-center md:text-left mb-16">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent border border-accent/20">
                <ShieldCheck size={16} /> Privacy
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Last updated: March 26, 2026
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6">
            {policies.map((policy, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <GlowCard className="p-8 bg-card/80 backdrop-blur-md border-border transition-all hover:bg-card hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/5%)]" hoverScale={1.01}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0 text-accent child-svg:stroke-2 shadow-inner">
                       {policy.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-3">{policy.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.8}>
            <div className="mt-12 p-8 rounded-2xl bg-secondary/50 border border-border text-center flex flex-col items-center justify-center gap-6">
               <div>
                 <h3 className="text-lg font-bold text-foreground mb-2">Need to manage your data?</h3>
                 <p className="text-sm text-muted-foreground">Contact our privacy team for data deletion or export requests.</p>
               </div>
               <a href="mailto:privacy@dataverge.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-colors group">
                 <Mail size={18} className="group-hover:scale-110 transition-transform" /> Contact Privacy Team
               </a>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
