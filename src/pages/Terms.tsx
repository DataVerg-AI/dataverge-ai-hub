import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl prose prose-neutral">
          <h1 className="text-4xl font-extrabold">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: March 26, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-2">By accessing or using DataVerge's services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">2. Description of Service</h2>
              <p className="mt-2">DataVerge provides a data convergence platform that unifies data from multiple sources using AI-powered tools, including DataVerGAI.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">3. User Responsibilities</h2>
              <p className="mt-2">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">4. Data Privacy</h2>
              <p className="mt-2">Your use of our services is also governed by our Privacy Policy. We take data security seriously and employ industry-standard encryption.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">5. Limitation of Liability</h2>
              <p className="mt-2">DataVerge shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">6. Contact</h2>
              <p className="mt-2">For questions about these terms, contact us at legal@dataverge.com.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
