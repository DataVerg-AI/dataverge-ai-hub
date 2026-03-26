import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <Layout>
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <h1 className="text-center text-4xl font-extrabold md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-center text-muted-foreground">Have a question or want a demo? We'd love to hear from you.</p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <Input placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Input type="email" placeholder="Email address" value={form.email} onChange={(e) => update("email", e.target.value)} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <Input placeholder="Company (optional)" value={form.company} onChange={(e) => update("company", e.target.value)} />
              <div>
                <Textarea placeholder="Your message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button variant="accent" size="lg" type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
