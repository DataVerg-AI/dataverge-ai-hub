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
            <div className="text-center md:text-left mb-12">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent border border-accent/20">
                <Scale size={16} /> Legal
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-foreground mb-6">
                Terms and Conditions
              </h1>
              <p className="text-lg text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Last updated: April 04, 2026
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card-premium p-8 md:p-12 border-border/40 shadow-2xl relative overflow-hidden group">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-8 text-muted-foreground leading-relaxed">
                <div className="space-y-4">
                  <p>Please read these terms and conditions carefully before using Our Service.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-8">Interpretation and Definitions</h2>
                  <h3 className="text-xl font-bold text-foreground mt-6">Interpretation</h3>
                  <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Definitions</h3>
                  <p>For the purposes of these Terms and Conditions:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                    <li><strong className="text-foreground">Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to DataVerg Tech LLC, 290 S Olive Street, Suite 520, Skyline Workspace, Los Angeles, CA 90015, USA.</li>
                    <li><strong className="text-foreground">Country</strong> refers to: California, United States.</li>
                    <li><strong className="text-foreground">Device</strong> means any device that can access the Service.</li>
                    <li><strong className="text-foreground">Service</strong> refers to the Website.</li>
                    <li><strong className="text-foreground">Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions that form the entire agreement between You and the Company.</li>
                    <li><strong className="text-foreground">Third-party Social Media Service</strong> means any services or content provided by a third-party that may be displayed or linked through the Service.</li>
                    <li><strong className="text-foreground">Website</strong> refers to DataVerg, accessible from <a href="https://dataverg.com/" target="_blank" rel="external nofollow noopener" className="text-accent hover:underline">https://dataverg.com/</a></li>
                    <li><strong className="text-foreground">You</strong> means the individual or legal entity accessing or using the Service.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Acknowledgment</h2>
                  <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms.</p>
                  <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                  <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Links to Other Websites</h2>
                  <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
                  <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites or services.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Termination</h2>
                  <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                  <p>Upon termination, Your right to use the Service will cease immediately.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Limitation of Liability</h2>
                  <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything.</p>
                  <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                  <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.</p>
                  <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied as to the operation or availability of the Service.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Governing Law</h2>
                  <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Contact Us</h2>
                  <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>By email: <a href="mailto:help@dataverg.com" className="text-accent hover:underline">help@dataverg.com</a></li>
                    <li>By visiting this page on our website: <a href="https://dataverg.com/contact" className="text-accent hover:underline">https://dataverg.com/contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 p-8 rounded-2xl bg-secondary/50 border border-border text-center flex flex-col items-center justify-center gap-6">
               <div>
                 <h3 className="text-lg font-bold text-foreground mb-2">Have legal questions?</h3>
                 <p className="text-sm text-muted-foreground">Our legal team is available to help clarify any of these terms.</p>
               </div>
               <a href="mailto:help@dataverg.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-colors group">
                 <Mail size={18} className="group-hover:scale-110 transition-transform" /> Contact Legal Department
               </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};


export default Terms;
