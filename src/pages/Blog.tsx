import Layout from "@/components/Layout";

const posts = [
  { title: "The Rise of Data Convergence in 2026", category: "Industry", date: "Mar 20, 2026", excerpt: "How enterprises are moving beyond traditional ETL to AI-powered data unification." },
  { title: "DataVerGAI: Under the Hood", category: "Product", date: "Mar 15, 2026", excerpt: "A deep dive into the architecture powering real-time data synthesis." },
  { title: "5 Signs Your Data Stack Is Fragmented", category: "Insights", date: "Mar 10, 2026", excerpt: "Identify the warning signs and learn how convergence can help." },
  { title: "Building Predictive Models with Unified Data", category: "Technical", date: "Mar 5, 2026", excerpt: "Leveraging DataVerGAI's ML pipeline for actionable predictions." },
  { title: "SOC 2 Compliance: Our Journey", category: "Security", date: "Feb 28, 2026", excerpt: "How DataVerge achieved enterprise-grade security certification." },
  { title: "Customer Spotlight: Acme Corp", category: "Case Study", date: "Feb 20, 2026", excerpt: "How Acme Corp reduced data processing time by 80% with DataVerge." },
];

const Blog = () => (
  <Layout>
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Technical insights, product updates, and industry perspectives.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="card-elevated flex flex-col p-6">
              <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
                {post.category}
              </span>
              <h3 className="text-lg font-bold leading-snug">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">{post.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
