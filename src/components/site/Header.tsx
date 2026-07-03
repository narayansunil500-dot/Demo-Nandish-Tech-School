import { Link } from "@tanstack/react-router";
import { Menu, GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { EnquiryDialog } from "./EnquiryDialog";

type NavChild = { label: string; to: string; desc?: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about-us",
    children: [
      { label: "Our Story", to: "/about-us", desc: "25+ years of educational legacy" },
      { label: "Vision & Mission", to: "/about-us", desc: "What drives us every day" },
      { label: "Leadership Team", to: "/about-us", desc: "Meet our academic leaders" },
      { label: "Awards & Recognition", to: "/about-us", desc: "Honors and accolades" },
    ],
  },
  {
    label: "Curriculum",
    to: "/curriculum",
    children: [
      { label: "CBSE National Board", to: "/curriculum", desc: "Holistic Indian curriculum" },
      { label: "Cambridge International", to: "/curriculum", desc: "IGCSE & A-Levels" },
      { label: "IB Programme", to: "/curriculum", desc: "PYP, MYP & Diploma" },
      { label: "State Curriculum", to: "/curriculum", desc: "Regional excellence" },
    ],
  },
  {
    label: "Campuses",
    to: "/campuses",
    children: [
      { label: "Mumbai", to: "/campuses", desc: "Flagship urban campus" },
      { label: "Bangalore", to: "/campuses", desc: "Tech-hub learning centre" },
      { label: "Delhi NCR", to: "/campuses", desc: "Capital region excellence" },
      { label: "Pune", to: "/campuses", desc: "Green heritage campus" },
      { label: "Hyderabad", to: "/campuses", desc: "Modern smart campus" },
    ],
  },
  {
    label: "Beyond Academics",
    to: "/beyond-academics",
    children: [
      { label: "Sports & Athletics", to: "/beyond-academics", desc: "20+ disciplines" },
      { label: "Performing Arts", to: "/beyond-academics", desc: "Music, dance & theatre" },
      { label: "STEM & Robotics", to: "/beyond-academics", desc: "Innovation labs" },
      { label: "Community Service", to: "/beyond-academics", desc: "Real-world impact" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    children: [
      { label: "Admission Process", to: "/admissions", desc: "Step-by-step guide" },
      { label: "Fee Structure", to: "/admissions", desc: "Transparent pricing" },
      { label: "Scholarships", to: "/admissions", desc: "Merit & need-based aid" },
      { label: "Download Brochure", to: "/admissions", desc: "Full prospectus PDF" },
    ],
  },
];

function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
        <GraduationCap className="h-5 w-5" />
      </div>
      <div className="flex min-w-0 flex-col leading-none">
        <span className="truncate text-lg font-extrabold tracking-tight text-primary">
          Nandish-Tech
        </span>
        <span className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          School of Excellence
        </span>
      </div>
    </Link>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        to={item.to}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-primary bg-muted" }}
        inactiveProps={{ className: "text-foreground/80" }}
        className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        to={item.to}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-primary bg-muted" }}
        inactiveProps={{ className: "text-foreground/80" }}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl border border-border/60 bg-popover shadow-[var(--shadow-elegant)]">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
          <ul className="p-2">
            {item.children!.map((c) => (
              <li key={c.label}>
                <Link
                  to={c.to}
                  className="group/link block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <div className="text-sm font-semibold text-primary group-hover/link:text-secondary">
                    {c.label}
                  </div>
                  {c.desc && (
                    <div className="mt-0.5 text-xs text-muted-foreground">{c.desc}</div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-primary bg-muted" }}
        className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary">
        <span>{item.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-3 mt-1 border-l-2 border-secondary/40 pl-3">
        {item.children!.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            onClick={onNavigate}
            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            {c.label}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <DesktopNavItem key={l.label} item={l} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <EnquiryDialog
            trigger={
              <Button className="bg-secondary text-secondary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:bg-secondary/90">
                Enquire Now
              </Button>
            }
          />
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[360px]">
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <MobileNavItem
                  key={l.label}
                  item={l}
                  onNavigate={() => setSheetOpen(false)}
                />
              ))}
              <div className="mt-4 border-t border-border pt-4">
                <EnquiryDialog
                  trigger={
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Enquire Now
                    </Button>
                  }
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
