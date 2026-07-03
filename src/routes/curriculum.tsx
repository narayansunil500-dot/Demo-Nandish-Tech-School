import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Globe, Beaker, Palette, Calculator, Languages, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum | Nandish-Tech" },
      { name: "description", content: "Explore CBSE, State and Cambridge/IB curricula plus our enrichment subjects at Nandish-Tech." },
      { property: "og:title", content: "Curriculum | Nandish-Tech" },
      { property: "og:description", content: "Three world-class curricular pathways and a rich enrichment programme." },
    ],
  }),
  component: CurriculumPage,
});

const boards = [
  { icon: BookOpen, title: "National Board (CBSE)", desc: "A holistic Indian curriculum focused on conceptual clarity and competitive readiness for top universities." },
  { icon: GraduationCap, title: "State Curriculum", desc: "Rooted in regional context with strong fundamentals across languages, sciences, and humanities." },
  { icon: Globe, title: "International (Cambridge / IB)", desc: "A globally benchmarked program designed for inquiry-led learning and worldwide university access." },
];

const subjects = [
  { icon: Calculator, title: "Mathematics" },
  { icon: Beaker, title: "Sciences" },
  { icon: Languages, title: "Languages" },
  { icon: Palette, title: "Visual Arts" },
  { icon: Code, title: "Computer Science" },
  { icon: Globe, title: "Global Studies" },
];

const stages = [
  { stage: "Early Years", grades: "Nursery – KG", desc: "Play-based learning that builds curiosity, language and motor skills." },
  { stage: "Primary", grades: "Grade 1 – 5", desc: "Strong foundations in literacy, numeracy and inquiry across disciplines." },
  { stage: "Middle School", grades: "Grade 6 – 8", desc: "Deeper conceptual learning with project-based and collaborative work." },
  { stage: "Senior School", grades: "Grade 9 – 12", desc: "Board-aligned specialisation, university counselling and leadership tracks." },
];

function CurriculumPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Curriculum"
          title={<>A Curriculum For <span className="text-secondary">Every Ambition</span></>}
          description="Three globally respected curricular pathways, delivered by certified faculty using research-backed pedagogy and a future-ready enrichment programme."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Boards</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Choose Your Pathway</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {boards.map(({ icon: Icon, title, desc }, i) => (
                <Card key={title} className={`reveal reveal-delay-${i + 1} group border-0 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]`}>
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

        <section className="bg-muted/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Academic Stages</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Learning, Tailored to Every Age</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map(({ stage, grades, desc }, i) => (
                <div key={stage} className={`reveal reveal-delay-${Math.min(i, 3)} group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-[var(--shadow-card)]`}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{grades}</div>
                  <h3 className="mt-2 text-xl font-bold text-primary">{stage}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Subjects & Streams</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">A Rich Academic Palette</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map(({ icon: Icon, title }, i) => (
                <div key={title} className={`reveal reveal-delay-${Math.min(i, 3)} group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[var(--shadow-card)]`}>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold text-primary">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
