import Layout from "@/components/Layout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import DataStreamBg from "@/components/DataStreamBg";
import { FileText, Shield, UserCheck, AlertTriangle, Scale, Lock, Mail } from "lucide-react";
import { useEffect } from "react";

const terms = [
  {
    icon: <UserCheck size={24} />,
    title: "1. Acceptance of Terms",
    content: "By accessing or using DataVerge's services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.",
  },
  {
    icon: <FileText size={24} />,
    title: "2. Description of Service",
    content: "DataVerge provides a data convergence platform that unifies data from multiple sources using AI-powered tools, including DataVerGAI.",
  },
  {
    icon: <Shield size={24} />,
    title: "3. User Responsibilities",
    content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
  },
  {
    icon: <Lock size={24} />,
    title: "4. Data Privacy",
    content: "Your use of our services is also governed by our Privacy Policy. We take data security seriously and employ industry-standard encryption.",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "5. Limitation of Liability",
    content: "DataVerge shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.",
  },
  {
    icon: <Scale size={24} />,
    title: "6. Modifications",
    content: "We reserve the right to modify these terms at any time. We will always post the most current version on our website.",
  }
];

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="relative min-h-screen bg-background pt-32 pb-24 overflow-hidden">
        {/* Background Visuals */}
        <DataStreamBg density="low" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container relative z-10 max-w-4xl">
          <AnimatedSection>
            <div className="text-center md:text-left mb-16">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent border border-accent/20">
                <Scale size={16} /> Legal
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Last updated: March 26, 2026
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6">
            {terms.map((term, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <GlowCard className="p-8 bg-card/80 backdrop-blur-md border-border transition-all hover:bg-card hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/5%)]" hoverScale={1.01}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0 text-accent child-svg:stroke-2 shadow-inner">
                       {term.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-3">{term.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {term.content}
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
                 <h3 className="text-lg font-bold text-foreground mb-2">Have questions?</h3>
                 <p className="text-sm text-muted-foreground">Our legal team is available to help clarify any of these terms.</p>
               </div>
               <a href="mailto:legal@dataverge.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-colors group">
                 <Mail size={18} className="group-hover:scale-110 transition-transform" /> Contact Legal
               </a>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </Layout>
  );
};

export default Terms;
