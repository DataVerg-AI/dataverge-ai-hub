import Layout from "@/components/Layout";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import DataStreamBg from "@/components/DataStreamBg";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";

const POSTS_DATA: Record<string, any> = {
  "why-data-silos-costing-more": {
    title: "Why Data Silos Are Costing You More Than You Think",
    img: "/images/32.webp",
    subtitle: "The Hidden Cost of Fragmented Data",
    category: "Industry",
    date: "Nov 12, 2025",
    readTime: "8 min",
    author: { name: "Alex Rivera", role: "Strategic Data Analyst", avatar: "AR" },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">The Hidden Cost of Fragmented Data</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The vast majority of businesses run on data; CRM records go in Salesforce, financials exist in a warehouse, and behavioral data exists in a variety of analytics tools, with each set of data not connected to the others without significant engineering work.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The overall cost is not just technical. Incomplete data leads to strategies that become eroded by decisions made based on incomplete information; time is spent wrangling data (to gain insight) instead of analyzing it (providing insight); and trust in numbers by the team diminishes over time. Therefore, the cumulative burden of disconnected data creates a hidden tax on all businesses.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The overall cost of the disconnected data fragmentation problem typically does not show up as a single line-item but, rather, is visible in all areas; an example includes having five pipelines for a single report, having to export all of your CSVs each time because the connection has been broken with the source of the data, and using dated (old) data for leadership decision making from 48 hours before. Each separate issue associated with disconnected data is small in its impact but collectively creates a drag on how every decision can be made out of this pool of available data.
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
          "Fragmented data doesn't slow teams. It corrupts decisions quietly."
        </blockquote>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Time will reveal the effect of fragmentation. Silos grow as the size of the team increases. Each new tool creates another isolated data source and bridging the gaps between all these systems becomes more challenging as the number of integrations increases over time until eventually you have dozens of broken systems with no single point of accountability, and teams lose faith in the reports they receive. When that happens they create shadow reports.
        </p>

        <ul className="space-y-4 mb-8 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">1</div>
            <span className="leading-relaxed"><strong className="text-foreground">Year 1</strong>: Multiple systems with a few integrations (2 systems = 1 integration), manageable.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">2</div>
            <span className="leading-relaxed"><strong className="text-foreground">Year 3</strong>: Multiple systems with multiple integrations (7 systems = 11 integrations), every week you have a broken integration that is not assigned to anyone to fix.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">3</div>
            <span className="leading-relaxed"><strong className="text-foreground">Year 5</strong>: Multiple systems with many integrations (14 systems = 30+ integrations) and whole teams are created just to keep the integrations operational.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Convergence Means</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Convergence is NOT integration. Integration is simply moving data from one silo to another. Convergence dissolves them: one layer, every source, one coherent picture updating in real-time with <Link to="/" className="text-accent hover:underline">DataVerg</Link>.
        </p>
      </>
    )
  },
  "raw-data-to-unified-intelligence": {
    title: "From Raw Data to Unified Intelligence in 4 Stages",
    img: "/images/33.webp",
    subtitle: "The Convergence Pipeline Explained",
    category: "Technical",
    date: "Jan 24, 2026",
    readTime: "7 min",
    author: { name: "Dr. Sarah Chen", role: "Lead Convergence Engineer", avatar: "SC" },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">The Convergence Pipeline Explained</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Connecting your data sources is a relatively easy thing to do. What's much more difficult is fixing the problems between the data you merged, such as conflicting schemas, dirty records, and producing output your users can trust.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The converging pipeline solves those hard problems, providing you with not only connectivity, but full convergence. Below are the four phases of convergence, from the initial connection to analysis ready data.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Stage 1: Connecting Your Data Universe</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Nowadays, modern convergence platforms will have connection support across REST and GraphQL APIs including support for the cloud, relational databases, and NoSQL databases, as well as SaaS solutions. A quality layer can monitor the health of the connections made, check for schema drift, and keep track of the configuration of each connection so it can reconnect without any issues.
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
          "Most pipelines break at the merge step, not the connect step."
        </blockquote>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Stage 2: Merging Without Losing Meaning</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic mb-4">
          Merging from multiple sources creates a translation challenge. A customer who uses a CRM and one who uses a product DB may have the same identity but be referred to in different ways. A semantic engine can resolve this; it can map between field names and values based on their meaning rather than the textual representation of those values. No record will lose fidelity or be duplicated, because all source records will maintain their integrity through each merge that is performed.
        </p>

        <ul className="space-y-4 mb-8 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">1</div>
            <span className="leading-relaxed"><strong className="text-foreground">Connect</strong>: Sources authenticate and stream in.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">2</div>
            <span className="leading-relaxed"><strong className="text-foreground">Merge</strong>: The engine maps fields across all sources, resolving schema conflicts automatically.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">3</div>
            <span className="leading-relaxed"><strong className="text-foreground">Clean</strong>: Duplicates, nulls, and format inconsistencies are resolved before reaching your unified schema.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Stage Three: Unified and Ready</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Data is organized into consistent and structured formats that can be queried in real-time after being cleaned and merged into a single schema. Real-time dashboards automatically update. One single version of the truth unifies all of the teams’ efforts. There will be no exports or delays when working from the single version of truth.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Stage Four: Activate and Analyze</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Unified data feeds dashboards, models, and alerts all from one consistent, real-time source.
        </p>

        <p className="text-muted-foreground leading-relaxed italic border-t border-border pt-6 mt-8">
          The four stages are interdependent, meaning there is no functionality of any one of them without the parallel function of all previous stages. Once the entire pipeline from connection to activation runs smoothly, the issue of fragmented data becomes not a problem, but rather the basis on which good decision-making is made.
        </p>
      </>
    )
  },
  "batch-processing-liability-data-teams": {
    title: "Why Batch Processing Is a Liability for Data Teams",
    img: "/images/34.webp",
    subtitle: "The Case for Sub-Second Data Sync",
    category: "Insights",
    date: "Feb 15, 2026",
    readTime: "6 min",
    author: { name: "Marcus Thorne", role: "Infrastructure Lead", avatar: "MT" },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">The Case for Sub-Second Data Sync</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          In the past, batch processing made sense because the costs of storage were high and compute was limited. You submitted your work overnight so analysts had access to the results first thing the next morning. Today this trade off doesn’t exist. The cost of having data that is stale exceeds the costs of having real-time infrastructure.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          However, the majority of enterprise systems are still on batch cycles either every hour, every day, or every week. This goes beyond just being an IT lag, it is a risk to decision-making as the cost continues to accumulate each cycle.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Batch Problem</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Batch jobs create blind spots in the system, or windows where the system operates on stale data context. A customer that is leaving between the two time cycles has no record of that performance. An inventory can be oversold due to relying on a past cycle of data. Fraud can go undetected for more than six hours even though a fraud incident is happening every second of the day. Each of these issues is a direct cost of an infrastructure designed for another time period.
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
          "A six-hour-old insight isn't an insight. It's a post-mortem.”
        </blockquote>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Sub-Second Sync Truly Needs</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Real time sync is not just fast, it is also continuously flowing event based ingestion of new records, and a convergence level to help with reconciling schema changes in the middle of the process without losing any records. Most platforms have added a real time capability on top of their existing batch capabilities calling it streaming.
        </p>

        <ul className="space-y-4 mb-8 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">1</div>
            <span className="leading-relaxed"><strong className="text-foreground">Ingest</strong>: Change events stream into the layer.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">2</div>
            <span className="leading-relaxed"><strong className="text-foreground">Reconcile</strong>: The engine detects schema drift and resolves it mid-flight, without halting flow.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">3</div>
            <span className="leading-relaxed"><strong className="text-foreground">Deliver</strong>: Unified, reconciled data reaches your dashboards and models in under one second, at scale.</span>
          </li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-6 bg-accent/10 p-6 rounded-xl border border-accent/20">
          This is how sub second sync works. Events of change are sent directly to the convergence level. If there are any schema conflicts, they are resolved while still being processed. Your unified data is always up to the minute, not just at the time of the last batch but at the time of processing.
        </p>
      </>
    )
  },
  "building-predictive-models": {
    title: "Building Predictive Models with Unified Data",
    img: "",
    subtitle: "Leveraging DataVerGAI's ML pipeline for actionable predictions.",
    category: "Technical",
    date: "Mar 5, 2026",
    readTime: "7 min",
    author: { name: "Dr. Sarah Chen", role: "Lead Convergence Engineer", avatar: "SC" },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">Activating Data for Intelligence</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Predictive models are only as good as the data feeding them. In this article, we'll look at how DataVerGAI's seamless unification allows data science teams to focus on algorithm performance instead of data wrangling.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          With DataVerge's unified API, training datasets can be pulled dynamically directly from the converged layer, knowing that schema resolution has already occurred.
        </p>
      </>
    )
  },
  "soc-2-compliance-journey": {
    title: "SOC 2 Compliance: Our Journey",
    img: "/images/36.webp",
    subtitle: "How DataVerge achieved enterprise-grade security certification.",
    category: "Security",
    date: "Feb 28, 2026",
    readTime: "5 min",
    author: { name: "David Kim", role: "Head of Security", avatar: "DK" },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">Reaching the Enterprise Standard</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Security is the foundation of any data convergence platform. Today, we are proud to announce that DataVerge has officially achieved SOC 2 Type II compliance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The journey involved rigorous audits of our internal architecture, ensuring end-to-end encryption for data in-flight and at-rest, and extensive third-party penetration testing. 
        </p>
        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
          "Trust is not given by default in the data industry. It must be proven."
        </blockquote>
      </>
    )
  }
};

const getPostData = (slug: string) => {
  if (POSTS_DATA[slug]) {
    return POSTS_DATA[slug];
  }

  // Fallback for demo
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Engineering",
    date: "March 26, 2026",
    readTime: "8 min",
    author: {
      name: "Dr. Sarah Chen",
      role: "Lead Convergence Engineer",
      avatar: "SC"
    },
    content: (
      <>
        <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">The Convergence Paradigm</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For decades, enterprises have relied on rigid ETL pipelines that inevitably break when schemas evolve. DataVerge was built on a simple premise: data mapping shouldn't require manual regex hacking. It should be semantic, fluid, and AI-native.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          In this deep dive, we explore the core architecture that allows the DataVerGAI engine to understand data contextually, virtually eliminating the need for rigid schema maintenance.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Problem with Traditional Pipelines</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you've spent any time working as a data engineer, you know the pain of maintaining brittle extraction pipelines. A single upstream column name change can bring a multi-million row pipeline to a grinding halt.
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
          "A pipeline is only as resilient as its most brittle regex parser."
        </blockquote>

        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">How Semantic Mapping Changes Everything</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Instead of relying on rigid string matching, our engine transforms all incoming structured and semi-structured data into a high-dimensional vector space. By clustering field meanings, the engine can instantly infer relationships.
        </p>

        <ul className="space-y-4 mb-8 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">1</div>
            <span className="leading-relaxed"><strong className="text-foreground">Ingestion</strong>: Raw data hits the convergence layer.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">2</div>
            <span className="leading-relaxed"><strong className="text-foreground">Tokenization</strong>: Fields are tokenized and semantically embedded.</span>
          </li>
        </ul>
      </>
    )
  };
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostData(slug || "default-post");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Layout>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="relative bg-background pt-32 pb-24 overflow-hidden min-h-screen">
        {/* Background Visuals */}
        <DataStreamBg density="low" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">
                <ArrowLeft size={16} /> Back to Hub
              </Link>
            </motion.div>

            {/* Post Header */}
            <AnimatedSection>
              <div className="text-center md:text-left mb-12">
                <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground border border-accent/20">
                  {post.category}
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-foreground mb-8 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-semibold text-muted-foreground border-y border-border/50 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground cursor-default hover:border-accent transition-colors">
                      {post.author.avatar}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-foreground">{post.author.name}</span>
                      <span className="text-xs font-normal">{post.author.role}</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-border/50" />
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {post.date}</span>
                  <div className="hidden md:block w-px h-8 bg-border/50" />
                  <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {post.readTime} read</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Post Hero Image */}
            {post.img && (
              <AnimatedSection delay={0.15}>
                <div className="w-full h-[350px] md:h-[450px] mb-12 rounded-3xl overflow-hidden border border-border shadow-2xl relative group">
                  <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>
            )}

            {/* Main Content Body */}
            <AnimatedSection delay={0.2}>
              <GlowCard className="bg-card/80 backdrop-blur-sm border-border">
                <div className="p-8 md:p-14 prose prose-neutral prose-invert md:prose-lg max-w-none">
                  {post.content}
                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Share and Tags Footer */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/50 pt-8">
                <div className="flex gap-2">
                  {["Architecture", "AI", "Rust"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary border border-border rounded-md text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer transition-colors">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <Share2 size={16} /> Share article
                  </span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
