import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/campuses")({
  head: () => ({
    meta: [
      { title: "Our Campuses | Nandish-Tech" },
      { name: "description", content: "Visit our state-of-the-art Nandish-Tech campuses across India — Mumbai, Bangalore, Delhi, Pune and Hyderabad." },
      { property: "og:title", content: "Our Campuses | Nandish-Tech" },
      { property: "og:description", content: "Five world-class campuses across India, each with smart classrooms, labs and sporting facilities." },
    ],
  }),
  component: CampusesPage,
});

const campuses = [
  { city: "Mumbai", address: "Plot 21, Education City, Mumbai 400001", phone: "+91 98765 43210", email: "mumbai@nandish-tech.edu", students: "1,800+" },
  { city: "Bangalore", address: "Whitefield Knowledge Park, Bangalore 560066", phone: "+91 98765 43211", email: "bangalore@nandish-tech.edu", students: "2,100+" },
  { city: "Delhi NCR", address: "Sector 45, Gurugram, Delhi NCR 122003", phone: "+91 98765 43212", email: "delhi@nandish-tech.edu", students: "1,500+" },
  { city: "Pune", address: "Kharadi IT Park Road, Pune 411014", phone: "+91 98765 43213", email: "pune@nandish-tech.edu", students: "1,200+" },
  { city: "Hyderabad", address: "Gachibowli Education Hub, Hyderabad 500032", phone: "+91 98765 43214", email: "hyderabad@nandish-tech.edu", students: "1,400+" },
];

function CampusesPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Our Campuses"
          title={<>Five Campuses, <span className="text-secondary">One Promise</span></>}
          description="Wherever you join us, you'll find the same exceptional facilities, faculty and philosophy — purposefully designed for inquiry and joy."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {campuses.map((c, i) => (
                <Card key={c.city} className={`reveal reveal-delay-${Math.min(i, 3)} group overflow-hidden border-0 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]`}>
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary to-primary-glow p-6 text-primary-foreground">
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Campus</span>
                      <div>
                        <h3 className="text-3xl font-extrabold">{c.city}</h3>
                        <p className="mt-1 text-sm text-primary-foreground/75">{c.students} students enrolled</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="space-y-3 p-6">
                    <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {c.address}
                    </p>
                    <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {c.phone}
                    </p>
                    <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {c.email}
                    </p>
                    <Button variant="outline" className="mt-3 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Visit Campus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
