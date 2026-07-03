import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Lightbulb, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import aboutStudents from "@/assets/about-students.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Nandish-Tech" },
      { name: "description", content: "Discover the Nandish-Tech story — our mission, vision and the values that shape every learner." },
      { property: "og:title", content: "About Us | Nandish-Tech" },
      { property: "og:description", content: "Our mission, vision and values for shaping the leaders of tomorrow." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Excellence", desc: "Relentless pursuit of academic and personal mastery." },
  { icon: Heart, title: "Integrity", desc: "Honesty, empathy and respect in everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "Future-ready thinking and creative problem solving." },
  { icon: Users, title: "Community", desc: "A diverse, inclusive global learning family." },
  { icon: Award, title: "Achievement", desc: "Celebrating progress, effort and excellence." },
  { icon: BookOpen, title: "Lifelong Learning", desc: "Curiosity that lasts well beyond graduation." },
];

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="About Nandish-Tech"
          title={<>A Quarter Century of <span className="text-secondary">Educational Excellence</span></>}
          description="Founded on a singular belief — that every child carries infinite potential — Nandish-Tech has grown into a globally respected K-12 institution shaping confident, compassionate leaders."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Journey</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">From Vision to Movement</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>What began in 2001 as a single classroom of 24 students has grown into a multi-campus institution serving thousands of families across India. Through every chapter, our purpose has stayed constant: to deliver a rigorous, joyful and deeply human education.</p>
                <p>Our faculty pair internationally benchmarked academics with deep investment in arts, athletics, technology and character. Students leave us prepared not only for the world's top universities, but for life itself.</p>
                <p>Today, Nandish-Tech is recognised for innovation in pedagogy, world-class infrastructure and an alumni community making impact across 40+ countries.</p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <img src={aboutStudents} alt="Students at Nandish-Tech" width={1200} height={1200} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
            </div>
          </div>
        </section>

        <section className="bg-muted/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Core Values</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">What We Stand For</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <Card key={title} className={`reveal reveal-delay-${Math.min(i, 3)} group border-0 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]`}>
                  <CardContent className="p-7">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[["25+", "Years of Excellence"], ["15k+", "Proud Alumni"], ["5", "Campuses"], ["40+", "Countries Reached"]].map(([num, label], i) => (
              <div key={label} className={`reveal reveal-delay-${Math.min(i, 3)}`}>
                <div className="text-5xl font-extrabold text-secondary">{num}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">{label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
