import Layout from "@/components/Layout";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import DataStreamBg from "@/components/DataStreamBg";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";

// Mock database fetching based on slug
const getPostData = (slug: string) => ({
  title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  category: "Engineering",
  date: "March 26, 2026",
  readTime: "8 min",
  author: {
    name: "Dr. Sarah Chen",
    role: "Lead Convergence Engineer",
    avatar: "SC"
  },
  content: `
## The Convergence Paradigm

For decades, enterprises have relied on rigid ETL pipelines that inevitably break when schemas evolve. DataVerge was built on a simple premise: data mapping shouldn't require manual regex hacking. It should be semantic, fluid, and AI-native.

In this deep dive, we explore the core architecture that allows the DataVerGAI engine to understand data contextually, virtually eliminating the need for rigid schema maintenance.

### The Problem with Traditional Pipelines

If you've spent any time working as a data engineer, you know the pain of maintaining brittle extraction pipelines. A single upstream column name change—say, changing \`customer_id\` to \`cust_uuid\`—can bring a multi-million row pipeline to a grinding halt.

> "A pipeline is only as resilient as its most brittle regex parser."

### How Semantic Mapping Changes Everything

Instead of relying on rigid string matching, our engine transforms all incoming structured and semi-structured data into a high-dimensional vector space. By clustering field meanings, the engine can instantly infer that \`cust_uuid\` and \`customer_id\` resolve to the same semantic entity.

1. **Ingestion**: Raw data hits the convergence layer.
2. **Tokenization**: Fields are tokenized and semantically embedded using our proprietary LLM.
3. **Resolution**: The engine maps these embeddings against your unified target schema with 99.9% confidence.
4. **Action**: Data flows seamlessly into your warehouse without human intervention.

### Scaling the Convergence Engine

We didn't just want this to work on a few megabytes. It had to work at line-rate speeds. Utilizing a custom Rust-based core, we optimized the vector search to return semantic matches in under 15ms. 

This isn't just an iteration on ETL. It's the end of manual data mapping as we know it.
  `
});

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

            {/* Main Content Body */}
            <AnimatedSection delay={0.2}>
              <GlowCard className="bg-card/80 backdrop-blur-sm border-border">
                <div className="p-8 md:p-14 prose prose-neutral prose-invert md:prose-lg max-w-none">
                  {/* Since we don't have a real markdown parser, we will simulate the styled output of the markdown content */}
                  <h2 className="text-3xl font-bold text-foreground mt-0 mb-6 border-b border-border/50 pb-4">The Convergence Paradigm</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    For decades, enterprises have relied on rigid ETL pipelines that inevitably break when schemas evolve. DataVerge was built on a simple premise: data mapping shouldn't require manual regex hacking. It should be semantic, fluid, and AI-native.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    In this deep dive, we explore the core architecture that allows the DataVerGAI engine to understand data contextually, virtually eliminating the need for rigid schema maintenance.
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Problem with Traditional Pipelines</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you've spent any time working as a data engineer, you know the pain of maintaining brittle extraction pipelines. A single upstream column name change—say, changing <code className="bg-secondary px-1.5 py-0.5 rounded text-accent-foreground text-sm font-mono border border-border">customer_id</code> to <code className="bg-secondary px-1.5 py-0.5 rounded text-accent-foreground text-sm font-mono border border-border">cust_uuid</code>—can bring a multi-million row pipeline to a grinding halt.
                  </p>
                  
                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-accent/5 rounded-r-lg">
                    "A pipeline is only as resilient as its most brittle regex parser."
                  </blockquote>

                  <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">How Semantic Mapping Changes Everything</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Instead of relying on rigid string matching, our engine transforms all incoming structured and semi-structured data into a high-dimensional vector space. By clustering field meanings, the engine can instantly infer that <code className="bg-secondary px-1.5 py-0.5 rounded text-accent-foreground text-sm border border-border">cust_uuid</code> and <code className="bg-secondary px-1.5 py-0.5 rounded text-accent-foreground text-sm border border-border">customer_id</code> resolve to the same semantic entity.
                  </p>

                  <ul className="space-y-4 mb-8 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">1</div>
                      <span className="leading-relaxed"><strong className="text-foreground">Ingestion</strong>: Raw data hits the convergence layer.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">2</div>
                      <span className="leading-relaxed"><strong className="text-foreground">Tokenization</strong>: Fields are tokenized and semantically embedded using our proprietary LLM.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-accent/30">3</div>
                      <span className="leading-relaxed"><strong className="text-foreground">Resolution</strong>: The engine maps these embeddings against your unified target schema with 99.9% confidence.</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Scaling the Convergence Engine</h3>
                  <p className="text-muted-foreground leading-relaxed border-l-2 border-border pl-4">
                    We didn't just want this to work on a few megabytes. It had to work at line-rate speeds. Utilizing a custom Rust-based core, we optimized the vector search to return semantic matches in under 15ms. 
                  </p>
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
