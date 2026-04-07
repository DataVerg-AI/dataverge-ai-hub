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
            <div className="text-center md:text-left mb-12">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent border border-accent/20">
                <ShieldCheck size={16} /> Privacy
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-foreground mb-6">
                Privacy Policy
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
                  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                  <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-8">Interpretation and Definitions</h2>
                  <h3 className="text-xl font-bold text-foreground mt-6">Interpretation</h3>
                  <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6">Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong className="text-foreground">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li><strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li><strong className="text-foreground">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to DataVerg Tech LLC, 290 S Olive Street, Suite 520, Skyline Workspace, Los Angeles, CA 90015, USA.</li>
                    <li><strong className="text-foreground">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li><strong className="text-foreground">Country</strong> refers to: California, United States</li>
                    <li><strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                    <li><strong className="text-foreground">Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual. We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.</li>
                    <li><strong className="text-foreground">Service</strong> refers to the Website.</li>
                    <li><strong className="text-foreground">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                    <li><strong className="text-foreground">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                    <li><strong className="text-foreground">Website</strong> refers to DataVerg, accessible from <a href="https://dataverg.com/" target="_blank" rel="external nofollow noopener" className="text-accent hover:underline">https://dataverg.com/</a>.</li>
                    <li><strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Collecting and Using Your Personal Data</h2>
                  <h3 className="text-xl font-bold text-foreground mt-6">Types of Data Collected</h3>
                  
                  <h4 className="text-lg font-bold text-foreground mt-4">Personal Data</h4>
                  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                  </ul>

                  <h4 className="text-lg font-bold text-foreground mt-6">Usage Data</h4>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                  
                  <h4 className="text-lg font-bold text-foreground mt-6">Tracking Technologies and Cookies</h4>
                  <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong className="text-foreground">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.</li>
                    <li><strong className="text-foreground">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons that permit the Company to count users who have visited those pages or opened an email.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Use of Your Personal Data</h2>
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong className="text-foreground">To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                    <li><strong className="text-foreground">To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                    <li><strong className="text-foreground">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract.</li>
                    <li><strong className="text-foreground">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li><strong className="text-foreground">To provide You</strong> with news, special offers, and general information about other goods.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Retention of Your Personal Data</h2>
                  <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations.</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong className="text-foreground">Account Information:</strong> retained for the duration of your account relationship plus up to 24 months after account closure.</li>
                    <li><strong className="text-foreground">Customer Support Data:</strong> up to 24 months from the date of ticket closure.</li>
                    <li><strong className="text-foreground">Usage Data:</strong> up to 24 months from the date of collection.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Delete Your Personal Data</h2>
                  <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                  <p>You may update, amend, or delete Your information at any time by signing in to Your Account and visiting the account settings section.</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2 mt-12">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, You can contact us:</p>
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
                 <h3 className="text-lg font-bold text-foreground mb-2">Need a data export?</h3>
                 <p className="text-sm text-muted-foreground">Contact our privacy team for data deletion or structured export requests.</p>
               </div>
               <a href="mailto:help@dataverg.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-colors group">
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
