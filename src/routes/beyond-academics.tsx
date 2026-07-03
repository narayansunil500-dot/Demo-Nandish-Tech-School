import { createFileRoute } from "@tanstack/react-router";
import { Music, Trophy, Palette, Drama, Mic, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/beyond-academics")({
  head: () => ({
    meta: [
      { title: "Beyond Academics | Nandish-Tech" },
      { name: "description", content: "Sports, arts, leadership and service — the programmes that shape a well-rounded Nandish-Tech graduate." },
      { property: "og:title", content: "Beyond Academics | Nandish-Tech" },
      { property: "og:description", content: "Discover our co-curricular ecosystem of sports, arts, performance and service." },
    ],
  }),
  component: BeyondPage,
});

const pillars = [
  { icon: Trophy, title: "Sports & Athletics", desc: "Cricket, football, basketball, swimming, athletics, badminton and martial arts with certified coaches." },
  { icon: Palette, title: "Visual Arts", desc: "Painting, sculpture, photography and digital design studios led by practising artists." },
  { icon: Music, title: "Music", desc: "Indian and Western vocals, percussion and instrumental ensembles performing year-round." },
  { icon: Drama, title: "Theatre & Drama", desc: "Annual productions, improv labs and public speaking that build poise and confidence." },
  { icon: Mic, title: "Debate & MUN", desc: "Award-winning debate, Model UN and quiz teams competing nationally and internationally." },
  { icon: HeartHandshake, title: "Community Service", desc: "Year-long service initiatives that turn empathy into measurable impact." },
];

function BeyondPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Beyond Academics"
          title={<>Where Talent Meets <span className="text-secondary">Opportunity</span></>}
          description="A vibrant co-curricular ecosystem that helps every student discover passions, build character, and lead with confidence."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
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

        <section className="bg-muted/60 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
            {[["50+", "Co-curricular Clubs"], ["100+", "National Medals (2025)"], ["20+", "Annual Performances"]].map(([n, l], i) => (
              <div key={l} className={`reveal reveal-delay-${Math.min(i, 3)}`}>
                <div className="text-5xl font-extrabold text-primary">{n}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
