import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Building2,
  ShieldCheck,
  Star,
  Users,
  BookOpen,
  GraduationCap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { ScheduleVisitDialog } from "@/components/site/ScheduleVisitDialog";
import { useReveal } from "@/hooks/use-reveal";
import heroCampus from "@/assets/hero-campus.jpg";
import aboutStudents from "@/assets/about-students.jpg";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";
import award4 from "@/assets/award-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nandish-Tech | Premier International School" },
      {
        name: "description",
        content:
          "Nandish-Tech delivers world-class K-12 education with holistic development, innovative curriculum, and a global learning network.",
      },
      { property: "og:title", content: "Nandish-Tech | Premier International School" },
      {
        property: "og:description",
        content:
          "World-class K-12 education combining academic excellence with holistic student development.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroCampus}
        alt="Nandish-Tech school campus"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-2xl text-primary-foreground">
          <span className="animate-slide-in-left inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            <Star className="h-3.5 w-3.5" /> Admissions Open 2026-27
          </span>
          <h1 className="animate-slide-in-left slide-delay-1 mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Shaping Tomorrow's Leaders Through{" "}
            <span className="text-secondary">Academic Excellence</span>
          </h1>
          <p className="animate-slide-in-left slide-delay-2 mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            At Nandish-Tech, every child discovers their genius. Join a global community
            committed to inquiry, integrity, and innovation across world-class campuses.
          </p>
          <div className="animate-slide-in-left slide-delay-3 mt-8 flex flex-wrap gap-3">
            <EnquiryDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/90"
                >
                  Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              }
            />
            <ScheduleVisitDialog
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Schedule a Visit
                </Button>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            About Nandish-Tech
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Infinite Possibilities <br className="hidden sm:block" /> Brought to Life
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              For over two decades, Nandish-Tech has been a trusted name in K-12 education,
              nurturing inquisitive minds and bold thinkers across India and beyond. Our
              journey is built on a simple belief: every learner deserves an environment
              that lets them flourish.
            </p>
            <p>
              We pair internationally benchmarked academics with deep investment in arts,
              athletics, technology, and character. The result is a holistic education
              that prepares students not only for university — but for life.
            </p>
            <p>
              From our state-of-the-art campuses to our globally certified faculty, every
              detail is engineered to deliver an experience that is rigorous, joyful, and
              undeniably world-class.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="mt-7 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="reveal reveal-delay-1 relative">
          <img
            src={aboutStudents}
            alt="Students learning at Nandish-Tech"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-secondary p-5 shadow-[var(--shadow-card)] sm:block">
            <div className="text-4xl font-extrabold text-secondary-foreground">25+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/80">
              Years of Excellence
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-primary p-5 shadow-[var(--shadow-card)] sm:block">
            <div className="text-4xl font-extrabold text-primary-foreground">15k+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
              Proud Alumni
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const boards = [
  {
    icon: BookOpen,
    title: "National Board (CBSE)",
    desc: "A holistic Indian curriculum focused on conceptual clarity and competitive readiness for top universities.",
  },
  {
    icon: GraduationCap,
    title: "State Curriculum",
    desc: "Rooted in regional context with strong fundamentals across languages, sciences, and humanities.",
  },
  {
    icon: Globe,
    title: "International (Cambridge / IB)",
    desc: "A globally benchmarked program designed for inquiry-led learning and worldwide university access.",
  },
];

function Curriculum() {
  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Boards
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            A Curriculum For Every Ambition
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose from three internationally respected pathways, each delivered by
            certified faculty using research-backed pedagogy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {boards.map(({ icon: Icon, title, desc }, i) => (
            <Card
              key={title}
              className={`reveal reveal-delay-${i + 1} group border-0 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]`}
            >
              <CardContent className="p-7">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5 hover:text-secondary"
                >
                  Explore Program <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const edges = [
  { icon: Globe, title: "Growing Network", desc: "Campuses across leading cities" },
  { icon: Building2, title: "State-of-the-Art Infrastructure", desc: "Smart classrooms & labs" },
  { icon: ShieldCheck, title: "Unmatched Safety", desc: "24/7 monitored campuses" },
  { icon: Star, title: "Holistic Development", desc: "Arts, sports, leadership" },
  { icon: Users, title: "Ideal Teacher-Student Ratio", desc: "Personal attention always" },
];

function Edge() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            The Nandish-Tech Edge
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Our Ways. Our Methods. Our Difference.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {edges.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${Math.min(i, 3)} group rounded-2xl border border-border/70 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-[var(--shadow-card)]`}
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base font-bold text-primary">{title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const awards = [
  { img: award1, title: "K12 Education Group of the Year", desc: "Recognized nationally for innovation in learning outcomes and student success." },
  { img: award2, title: "Excellence in Sports", desc: "Multiple national medals across athletics, swimming, and team sports." },
  { img: award3, title: "Best in Performing Arts", desc: "State-level laurels in music, dance, and theatre programmes." },
  { img: award4, title: "STEM Innovation Award", desc: "Honored for our research-driven, future-ready science curriculum." },
  { img: award1, title: "Global Educator Award 2025", desc: "Faculty honoured internationally for pedagogical excellence." },
  { img: award2, title: "National Robotics Champions", desc: "First place at the National Robotics League for three years running." },
  { img: award3, title: "Green Campus of the Year", desc: "Awarded for sustainability initiatives across all campuses." },
  { img: award4, title: "Best Debating School", desc: "Consistent winners at national MUN and debate championships." },
];

function Awards() {
  const loop = [...awards, ...awards];
  return (
    <section className="overflow-hidden bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Awards & Accolades
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              A Legacy of Achievement
            </h2>
          </div>
          <Award className="hidden h-12 w-12 text-secondary sm:block" />
        </div>
      </div>
      <div className="group relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted/60 to-transparent" />
        <div className="animate-marquee marquee-pause flex w-max gap-6 px-4 group-hover:[animation-play-state:paused]">
          {loop.map(({ img, title, desc }, i) => (
            <Card
              key={`${title}-${i}`}
              className="group/card w-[300px] shrink-0 overflow-hidden border-0 bg-card p-0 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] sm:w-[340px]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-base font-bold leading-snug text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const rankers = [
  { name: "Aarav Sharma", grade: "Grade 12 — Science", pct: "99.6%", hue: 258 },
  { name: "Diya Patel", grade: "Grade 12 — Commerce", pct: "99.2%", hue: 20 },
  { name: "Rohan Mehta", grade: "Grade 10 — CBSE", pct: "98.8%", hue: 145 },
  { name: "Ishita Rao", grade: "Grade 12 — Humanities", pct: "98.6%", hue: 320 },
  { name: "Kabir Nair", grade: "Grade 10 — ICSE", pct: "98.4%", hue: 200 },
  { name: "Ananya Iyer", grade: "Grade 12 — IB", pct: "98.1%", hue: 85 },
  { name: "Vihaan Gupta", grade: "Grade 10 — CBSE", pct: "97.9%", hue: 12 },
  { name: "Meera Krishnan", grade: "Grade 12 — Science", pct: "97.6%", hue: 280 },
];

function TopRankers() {
  const loop = [...rankers, ...rankers];
  return (
    <section className="overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Class of 2026
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Our Top Rankers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Celebrating the brilliance and hard work of Nandish-Tech's brightest scholars.
          </p>
        </div>
      </div>
      <div className="group relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee-fast flex w-max gap-6 px-4 group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => {
            const initials = r.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
            return (
              <div
                key={`${r.name}-${i}`}
                className="w-[220px] shrink-0 rounded-2xl border border-border/70 bg-card p-5 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative mx-auto h-28 w-28">
                  <div
                    className="grid h-full w-full place-items-center rounded-full text-3xl font-extrabold text-white shadow-[var(--shadow-card)] ring-4 ring-secondary/40"
                    style={{
                      backgroundImage: `linear-gradient(135deg, hsl(${r.hue} 70% 45%), hsl(${(r.hue + 40) % 360} 75% 35%))`,
                    }}
                  >
                    {initials}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow">
                    {r.pct}
                  </div>
                </div>
                <h3 className="mt-5 text-base font-bold text-primary">{r.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{r.grade}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Edge />
        <Awards />
        <TopRankers />
      </main>
      <Footer />
    </div>
  );
}

