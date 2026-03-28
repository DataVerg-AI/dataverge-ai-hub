import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import DataStreamBg from "@/components/DataStreamBg";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Clock, Zap } from "lucide-react";

const posts = [
  { title: "The Rise of Data Convergence in 2026", slug: "rise-of-data-convergence", category: "Industry", date: "Mar 20, 2026", excerpt: "How enterprises are moving beyond traditional ETL to AI-powered data unification.", featured: true, readTime: "6 min" },
  { title: "DataVerGAI: Under the Hood", slug: "datavergai-under-the-hood", category: "Product", date: "Mar 15, 2026", excerpt: "A deep dive into the architecture powering real-time data synthesis.", featured: false, readTime: "8 min" },
  { title: "5 Signs Your Data Stack Is Fragmented", slug: "5-signs-data-stack-fragmented", category: "Insights", date: "Mar 10, 2026", excerpt: "Identify the warning signs and learn how convergence can help.", featured: false, readTime: "4 min" },
  { title: "Building Predictive Models with Unified Data", slug: "building-predictive-models", category: "Technical", date: "Mar 5, 2026", excerpt: "Leveraging DataVerGAI's ML pipeline for actionable predictions.", featured: false, readTime: "7 min" },
  { title: "SOC 2 Compliance: Our Journey", slug: "soc-2-compliance-journey", category: "Security", date: "Feb 28, 2026", excerpt: "How DataVerge achieved enterprise-grade security certification.", featured: false, readTime: "5 min" },
  { title: "Customer Spotlight: Acme Corp", slug: "customer-spotlight-acme", category: "Case Study", date: "Feb 20, 2026", excerpt: "How Acme Corp reduced data processing time by 80% with DataVerge.", featured: false, readTime: "3 min" },
];

const categories = ["All", "Industry", "Product", "Insights", "Technical", "Security", "Case Study"];

const Blog = () => (
  <Layout>
    <section className="relative bg-background pt-32 pb-24 overflow-hidden">
      <DataStreamBg density="low" />
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-accent/5 to-transparent blur-3xl" />
      
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              <BookOpen size={14} className="text-accent" /> Intelligence Hub
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              Insights & <span className="text-shine">Updates</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Technical insights, product updates, and industry perspectives from the engineering team.</p>
          </div>
        </AnimatedSection>

        {/* Category filter pills */}
        <AnimatedSection delay={0.1}>
          <div className="mx-auto mb-16 flex max-w-4xl flex-wrap items-center justify-center gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all border ${
                  i === 0
                    ? "bg-foreground text-background border-foreground shadow-[0_0_15px_hsl(var(--foreground)/10%)]"
                    : "bg-card text-muted-foreground border-border hover:bg-accent/10 hover:text-accent-foreground hover:border-accent/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured hero post */}
        <AnimatedSection delay={0.15}>
          <Link to={`/blog/${posts[0].slug}`} className="block">
            <GlowCard className="group overflow-hidden bg-card border-border transition-all hover:shadow-[0_0_40px_hsl(var(--brand-yellow)/15%)]" hoverScale={1.01}>
              <div className="relative grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-10 lg:p-16 relative z-10 backdrop-blur-sm bg-card/50">
                  <motion.span
                    className="mb-4 inline-flex items-center gap-1.5 w-fit rounded-lg bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider"
                  >
                    <Zap size={14} className="text-accent fill-accent" /> {posts[0].category}
                  </motion.span>
                  <h2 className="text-3xl font-extrabold md:text-5xl leading-tight text-foreground group-hover:text-accent transition-colors duration-300">{posts[0].title}</h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{posts[0].excerpt}</p>
                  <div className="mt-8 flex items-center justify-between">
                     <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
                       <span>{posts[0].date}</span>
                       <span className="flex items-center gap-1.5 opacity-70">
                         <Clock size={14} /> {posts[0].readTime} read
                       </span>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={20} />
                     </div>
                  </div>
                </div>
                
                {/* Massive animated graphic for hero post */}
                <div className="relative hidden lg:flex items-center justify-center overflow-hidden min-h-[400px] border-l border-border/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-card to-card">
                   {/* Decorative code/schema rings */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-plus-lighter">
                      {[1, 2, 3].map((ring) => (
                         <motion.div
                           key={ring}
                           className="absolute rounded-full border border-accent"
                           style={{ width: `${ring * 200}px`, height: `${ring * 200}px` }}
                           animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                           transition={{ duration: 20 * ring, repeat: Infinity, ease: "linear" }}
                         >
                            {/* orbiting nodes */}
                            <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow))]" />
                         </motion.div>
                      ))}
                   </div>
                   <div className="z-10 bg-background/80 backdrop-blur-md border border-accent/30 px-6 py-4 rounded-xl shadow-2xl font-mono text-xs text-accent-foreground tracking-widest uppercase">
                      Status: Converging
                   </div>
                </div>
              </div>
            </GlowCard>
          </Link>
        </AnimatedSection>

        {/* Asymmetrical Bento Blog Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Post 1: Tall Card */}
          <AnimatedSection delay={0.2} className="lg:col-span-1 lg:row-span-2">
            <Link to={`/blog/${posts[1].slug}`} className="block h-full">
              <GlowCard className="h-full bg-card group flex flex-col justify-between p-8 border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                <div>
                   <span className="inline-block px-3 py-1 mb-6 rounded-md bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider">
                     {posts[1].category}
                   </span>
                   <h3 className="text-2xl font-bold leading-snug group-hover:text-accent transition-colors">{posts[1].title}</h3>
                   <p className="mt-4 text-muted-foreground">{posts[1].excerpt}</p>
                </div>
                
                {/* Image Placeholder */}
                <div className="flex-1 w-full min-h-[200px] mt-6 bg-muted/50 border border-border rounded-xl flex items-center justify-center text-muted-foreground font-mono text-sm">
                   Image Here
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs font-semibold text-muted-foreground">
                   <span>{posts[1].date}</span>
                   <span className="flex items-center gap-1.5">
                     <Clock size={14} /> {posts[1].readTime} read
                   </span>
                </div>
              </GlowCard>
            </Link>
          </AnimatedSection>

          {/* Post 2: Wide Card */}
          <AnimatedSection delay={0.3} className="md:col-span-2 lg:col-span-2 lg:row-span-1">
             <Link to={`/blog/${posts[2].slug}`} className="block h-full">
               <GlowCard className="h-full bg-card group overflow-hidden border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                 <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 mb-4 rounded-md bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-wider w-fit">
                        {posts[2].category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-accent transition-colors">{posts[2].title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground max-w-sm">{posts[2].excerpt}</p>
                      <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                        <span>{posts[2].date}</span>
                      </div>
                    </div>
                    {/* Decorative background for wide card */}
                    <div className="hidden md:flex relative border-l border-border bg-gradient-to-br from-background to-secondary overflow-hidden items-center justify-center transition-transform duration-500 group-hover:scale-105">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
                       <div className="w-24 h-24 rounded-2xl bg-card border-2 border-border rotate-12 shadow-xl flex items-center justify-center">
                          <div className="w-12 h-12 bg-purple-500/20 rounded-full" />
                       </div>
                    </div>
                 </div>
               </GlowCard>
             </Link>
          </AnimatedSection>

          {/* Post 3: Standard Square */}
          <AnimatedSection delay={0.4} className="col-span-1">
             <Link to={`/blog/${posts[3].slug}`} className="block h-full">
               <GlowCard className="h-full bg-card group flex flex-col justify-between p-8 border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                <div>
                   <span className="inline-block px-3 py-1 mb-4 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                     {posts[3].category}
                   </span>
                   <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">{posts[3].title}</h3>
                   <p className="mt-3 text-sm text-muted-foreground">{posts[3].excerpt}</p>
                </div>
                <div className="mt-6 text-xs font-semibold text-muted-foreground border-t border-border pt-4">
                   {posts[3].date}
                </div>
              </GlowCard>
             </Link>
          </AnimatedSection>

          {/* Post 4: Themed Dark Square */}
          <AnimatedSection delay={0.5} className="col-span-1">
             <Link to={`/blog/${posts[4].slug}`} className="block h-full">
               <GlowCard className="h-full bg-foreground text-background group flex flex-col justify-between p-8 border-none transition-all hover:shadow-[0_0_30px_hsl(var(--foreground)/30%)]" hoverScale={1.02}>
                <div>
                   <span className="inline-block px-3 py-1 mb-4 rounded-md bg-background/20 text-background text-xs font-bold uppercase tracking-wider">
                     {posts[4].category}
                   </span>
                   <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">{posts[4].title}</h3>
                   <p className="mt-3 text-sm text-background/70">{posts[4].excerpt}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-background/50 border-t border-background/20 pt-4">
                   <span>{posts[4].date}</span>
                   <ArrowUpRight size={16} />
                </div>
              </GlowCard>
             </Link>
          </AnimatedSection>

          {/* Post 5: Square spanning last space */}
          <AnimatedSection delay={0.6} className="md:col-span-2 lg:col-span-1">
             <Link to={`/blog/${posts[5].slug}`} className="block h-full">
               <GlowCard className="h-full bg-card group flex flex-col justify-between p-8 border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                <div>
                   <span className="inline-block px-3 py-1 mb-4 rounded-md bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
                     {posts[5].category}
                   </span>
                   <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">{posts[5].title}</h3>
                   <p className="mt-3 text-sm text-muted-foreground">{posts[5].excerpt}</p>
                </div>
                <div className="mt-6 text-xs font-semibold text-muted-foreground border-t border-border pt-4">
                   {posts[5].date}
                </div>
              </GlowCard>
             </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
