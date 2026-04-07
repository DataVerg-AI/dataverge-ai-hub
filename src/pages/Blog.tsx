import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import DataStreamBg from "@/components/DataStreamBg";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Clock, Zap } from "lucide-react";
import { useState } from "react";

const posts = [
  { title: "Why Data Silos Are Costing You More Than You Think", img: "/images/32.webp", slug: "why-data-silos-costing-more", category: "Industry", date: "Nov 12, 2025", excerpt: "The Hidden Cost of Fragmented Data. The vast majority of businesses run on data, with each set of data not connected to the others without significant engineering work.", featured: true, readTime: "8 min" },
  { title: "From Raw Data to Unified Intelligence in 4 Stages", img: "/images/33.webp", slug: "raw-data-to-unified-intelligence", category: "Technical", date: "Jan 24, 2026", excerpt: "The Convergence Pipeline Explained. Connecting your data sources is a relatively easy thing to do. What's much more difficult is fixing the problems between the data you merged.", featured: false, readTime: "7 min" },
  { title: "Why Batch Processing Is a Liability for Data Teams", img: "/images/35.webp", slug: "batch-processing-liability-data-teams", category: "Insights", date: "Feb 15, 2026", excerpt: "The Case for Sub-Second Data Sync. In the past, batch processing made sense because the costs of storage were high and compute was limited. Today this trade off doesn’t exist.", featured: false, readTime: "6 min" },
  { title: "Building Predictive Models with Unified Data", img: "/images/51.webp", slug: "building-predictive-models", category: "Technical", date: "Mar 5, 2026", excerpt: "Leveraging DataVerGAI's ML pipeline for actionable predictions.", featured: false, readTime: "7 min" },
  { title: "SOC 2 Compliance: Our Journey", img: "/images/52.webp", slug: "soc-2-compliance-journey", category: "Security", date: "Feb 28, 2026", excerpt: "How DataVerge achieved enterprise-grade security certification.", featured: false, readTime: "5 min" },
];

const categories = ["All", "Industry", "Product", "Insights", "Technical", "Security", "Case Study"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
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
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all border ${selectedCategory === cat
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
          {filteredPosts[0] && (
            <Link to={`/blog/${filteredPosts[0].slug}`} className="block">
              <GlowCard className="group overflow-hidden bg-card border-border transition-all hover:shadow-[0_0_40px_hsl(var(--brand-yellow)/15%)]" hoverScale={1.01}>
                <div className="relative grid lg:grid-cols-2">
                  <div className="flex flex-col justify-center p-10 lg:p-16 relative z-10 backdrop-blur-sm bg-card/50">
                    <motion.span
                      className="mb-4 inline-flex items-center gap-1.5 w-fit rounded-lg bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider"
                    >
                      <Zap size={14} className="text-accent fill-accent" /> {filteredPosts[0].category}
                    </motion.span>
                    <h2 className="text-3xl font-extrabold md:text-5xl leading-tight text-foreground group-hover:text-accent transition-colors duration-300">{filteredPosts[0].title}</h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{filteredPosts[0].excerpt}</p>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
                        <span>{filteredPosts[0].date}</span>
                        <span className="flex items-center gap-1.5 opacity-70">
                          <Clock size={14} /> {filteredPosts[0].readTime} read
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Massive image for hero post */}
                  <div className="relative hidden lg:block overflow-hidden min-h-[400px] border-l border-border/50">
                    <img src={filteredPosts[0].img} alt={filteredPosts[0].title} className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
                  </div>
                </div>
              </GlowCard>
            </Link>
          )}
        </AnimatedSection>

        {/* Asymmetrical Bento Blog Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">

          {/* Post 1: Tall Card */}
          <AnimatedSection delay={0.2} className="lg:col-span-1 lg:row-span-2">
            {filteredPosts[1] && (
              <Link to={`/blog/${filteredPosts[1].slug}`} className="block h-full">
                <GlowCard className="h-full bg-card group flex flex-col justify-between p-8 border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                  <div>
                    <span className="inline-block px-3 py-1 mb-6 rounded-md bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider">
                      {filteredPosts[1].category}
                    </span>
                    <h3 className="text-2xl font-bold leading-snug group-hover:text-accent transition-colors">{filteredPosts[1].title}</h3>
                    <p className="mt-4 text-muted-foreground">{filteredPosts[1].excerpt}</p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full min-h-[200px] mt-6 rounded-xl overflow-hidden relative border border-border/50">
                    <img src={filteredPosts[1].img} alt={filteredPosts[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs font-semibold text-muted-foreground">
                    <span>{filteredPosts[1].date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {filteredPosts[1].readTime} read
                    </span>
                  </div>
                </GlowCard>
              </Link>
            )}
          </AnimatedSection>

          {/* Post 2: Wide Card */}
          <AnimatedSection delay={0.3} className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            {filteredPosts[2] && (
              <Link to={`/blog/${filteredPosts[2].slug}`} className="block h-full">
                <GlowCard className="h-full bg-card group overflow-hidden border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 mb-4 rounded-md bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-wider w-fit">
                        {filteredPosts[2].category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-accent transition-colors">{filteredPosts[2].title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground max-w-sm">{filteredPosts[2].excerpt}</p>
                      <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                        <span>{filteredPosts[2].date}</span>
                      </div>
                    </div>
                    {/* Image for wide card */}
                    <div className="hidden md:block relative border-l border-border overflow-hidden">
                      <img src={filteredPosts[2].img} alt={filteredPosts[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </GlowCard>
              </Link>
            )}
          </AnimatedSection>

          {/* Post 3: Standard Square */}
          <AnimatedSection delay={0.4} className="col-span-1">
            {filteredPosts[3] && (
              <Link to={`/blog/${filteredPosts[3].slug}`} className="block h-full">
                <GlowCard className="h-full bg-card group flex flex-col p-6 border-border transition-all hover:shadow-[0_0_30px_hsl(var(--brand-yellow)/10%)]" hoverScale={1.02}>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 mb-4 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                        {filteredPosts[3].category}
                      </span>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">{filteredPosts[3].title}</h3>
                    </div>
                    {/* add small description from blog content */}
                    <p className="mt-3 text-sm text-muted-foreground max-w-sm">{filteredPosts[3].excerpt}</p>
                    <div className="mt-6 text-xs font-semibold text-muted-foreground border-t border-border pt-4">
                      {filteredPosts[3].date}
                    </div>
                  </div>
                </GlowCard>
              </Link>
            )}
          </AnimatedSection>

          {/* Post 4: Themed Dark Square */}
          <AnimatedSection delay={0.5} className="col-span-1">
            {filteredPosts[4] && (
              <Link to={`/blog/${filteredPosts[4].slug}`} className="block h-full">
                <GlowCard className="h-full bg-foreground text-background group flex flex-col p-6 border-none transition-all hover:shadow-[0_0_30px_hsl(var(--foreground)/30%)]" hoverScale={1.02}>
                  <div className="h-44 w-full rounded-lg overflow-hidden mb-6 relative shrink-0">
                    <img src={filteredPosts[4].img} alt={filteredPosts[4].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 mb-4 rounded-md bg-background/20 text-background text-xs font-bold uppercase tracking-wider">
                        {filteredPosts[4].category}
                      </span>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">{filteredPosts[4].title}</h3>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-semibold text-background/50 border-t border-background/20 pt-4">
                      <span>{filteredPosts[4].date}</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </GlowCard>
              </Link>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Blog;
