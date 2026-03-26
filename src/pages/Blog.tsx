import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  { title: "The Rise of Data Convergence in 2026", category: "Industry", date: "Mar 20, 2026", excerpt: "How enterprises are moving beyond traditional ETL to AI-powered data unification.", featured: true },
  { title: "DataVerGAI: Under the Hood", category: "Product", date: "Mar 15, 2026", excerpt: "A deep dive into the architecture powering real-time data synthesis.", featured: false },
  { title: "5 Signs Your Data Stack Is Fragmented", category: "Insights", date: "Mar 10, 2026", excerpt: "Identify the warning signs and learn how convergence can help.", featured: false },
  { title: "Building Predictive Models with Unified Data", category: "Technical", date: "Mar 5, 2026", excerpt: "Leveraging DataVerGAI's ML pipeline for actionable predictions.", featured: false },
  { title: "SOC 2 Compliance: Our Journey", category: "Security", date: "Feb 28, 2026", excerpt: "How DataVerge achieved enterprise-grade security certification.", featured: true },
  { title: "Customer Spotlight: Acme Corp", category: "Case Study", date: "Feb 20, 2026", excerpt: "How Acme Corp reduced data processing time by 80% with DataVerge.", featured: false },
];

const Blog = () => (
  <Layout>
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              Blog
            </span>
            <h1 className="text-4xl font-extrabold md:text-5xl">Insights & Updates</h1>
            <p className="mt-4 text-lg text-muted-foreground">Technical insights, product updates, and industry perspectives.</p>
          </div>
        </AnimatedSection>

        {/* Featured hero post */}
        <AnimatedSection delay={0.1}>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto mt-16 max-w-5xl card-elevated border-glow overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1 flex-col justify-center p-10">
                <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {posts[0].category} · Featured
                </span>
                <h2 className="text-2xl font-extrabold md:text-3xl">{posts[0].title}</h2>
                <p className="mt-3 text-muted-foreground">{posts[0].excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">{posts[0].date}</div>
              </div>
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 md:h-auto md:w-80">
                <div className="text-6xl font-extrabold text-accent/20">DV</div>
              </div>
            </div>
          </motion.article>
        </AnimatedSection>

        {/* Masonry / staggered cards */}
        <div className="mx-auto mt-12 max-w-5xl columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {posts.slice(1).map((post, i) => (
            <AnimatedSection key={post.title} delay={0.15 + i * 0.08}>
              <motion.article
                whileHover={{ y: -4, rotate: i % 2 === 0 ? 0.3 : -0.3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`card-elevated break-inside-avoid ${
                  post.featured ? "border-glow p-8" : "p-6"
                }`}
              >
                <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {post.category}
                </span>
                <h3 className={`font-bold leading-snug ${post.featured ? "text-xl" : "text-lg"}`}>{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">{post.date}</div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
