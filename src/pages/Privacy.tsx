import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl prose prose-neutral">
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: March 26, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-bold text-foreground">1. Information We Collect</h2>
              <p className="mt-2">We collect information you provide directly, such as name, email, and company details, as well as usage data through analytics.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">2. How We Use Your Information</h2>
              <p className="mt-2">We use your information to provide and improve our services, communicate with you, and ensure platform security.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">3. Data Security</h2>
              <p className="mt-2">We implement industry-standard security measures including end-to-end encryption, SOC 2 compliance, and regular security audits.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">4. Data Sharing</h2>
              <p className="mt-2">We do not sell your personal data. We may share data with service providers who assist in operating our platform, under strict agreements.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">5. Your Rights</h2>
              <p className="mt-2">You have the right to access, correct, or delete your personal data. Contact privacy@dataverge.com for any requests.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">6. Cookies</h2>
              <p className="mt-2">We use cookies to enhance your experience. You can manage cookie preferences through your browser settings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
