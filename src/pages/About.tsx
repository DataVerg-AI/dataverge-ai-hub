import Layout from "@/components/Layout";
import { Target, Users, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to solve the universal problem of fragmented data." },
  { icon: Users, title: "Customer-First", desc: "Every feature is built from real enterprise feedback." },
  { icon: Lightbulb, title: "Innovation", desc: "We push the boundaries of what AI can do with data." },
];

const About = () => (
  <Layout>
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">About DataVerge</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in 2024, DataVerge was born from a simple observation: enterprises waste millions of dollars and thousands of hours wrestling with fragmented data. We set out to build the definitive platform for data convergence — one intelligent system that brings everything together.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold">Our Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <v.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl bg-secondary p-10 text-center">
          <h2 className="text-2xl font-extrabold">Our Story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            After years of watching enterprises struggle with disconnected data silos, our founding team — veterans of data engineering, machine learning, and enterprise software — decided to take a fundamentally different approach. Instead of building yet another integration tool, we built DataVerGAI: an AI-native convergence engine that doesn't just move data — it understands it.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Today, DataVerge serves over 500 enterprise clients, processing millions of data points daily across dozens of industries.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
