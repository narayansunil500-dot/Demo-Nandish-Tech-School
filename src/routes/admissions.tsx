import { createFileRoute } from "@tanstack/react-router";
import { FileText, CalendarCheck, ClipboardList, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Nandish-Tech" },
      { name: "description", content: "Apply to Nandish-Tech for the 2026-27 academic year. Learn about the process, requirements and key dates." },
      { property: "og:title", content: "Admissions | Nandish-Tech" },
      { property: "og:description", content: "Begin your Nandish-Tech journey — admissions open for 2026-27." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { icon: FileText, title: "Submit Enquiry", desc: "Share your details so our admissions team can reach out within 24 hours." },
  { icon: ClipboardList, title: "Application Form", desc: "Complete the online application and submit required documents." },
  { icon: CalendarCheck, title: "Assessment & Interaction", desc: "An age-appropriate assessment and parent-student interaction." },
  { icon: Sparkles, title: "Welcome to Nandish-Tech", desc: "Receive your offer letter and complete enrolment formalities." },
];

const faqs = [
  { q: "When does the academic year begin?", a: "Our academic year begins in early June and concludes in March, aligned with national board calendars." },
  { q: "What grades are admissions open for?", a: "Admissions for 2026-27 are open from Nursery through Grade 11 across all campuses, subject to seat availability." },
  { q: "Are scholarships available?", a: "Yes. Merit, sports and need-based scholarships are reviewed on a case-by-case basis at Grade 5 and above." },
  { q: "Can international students apply?", a: "Absolutely. We welcome international students and support transitions across CBSE, IB and Cambridge curricula." },
];

function AdmissionsPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Admissions 2026-27"
          title={<>Begin Your <span className="text-secondary">Nandish-Tech</span> Journey</>}
          description="A simple, transparent four-step admissions process designed to help us understand your child and welcome you to our community."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">How To Apply</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Four Steps to Enrolment</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <Card key={title} className={`reveal reveal-delay-${Math.min(i, 3)} group relative border-0 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]`}>
                  <CardContent className="p-6">
                    <div className="text-5xl font-black text-muted">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-2 grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="reveal mt-12 flex justify-center">
              <EnquiryDialog
                trigger={
                  <Button size="lg" className="bg-secondary text-secondary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary/90">
                    Start Your Application
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        <section className="bg-muted/60 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">FAQs</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Frequently Asked</h2>
            </div>
            <div className="mt-12 space-y-4">
              {faqs.map(({ q, a }, i) => (
                <div key={q} className={`reveal reveal-delay-${Math.min(i, 3)} rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-secondary hover:shadow-[var(--shadow-card)]`}>
                  <h3 className="text-base font-bold text-primary">{q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a}</p>
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
