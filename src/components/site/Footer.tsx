import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">Nandish-Tech</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              A premier institution committed to the holistic development of every student —
              academically, creatively, and socially.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              <li><Link to="/about-us" className="transition-colors hover:text-secondary">About Us</Link></li>
              <li><Link to="/curriculum" className="transition-colors hover:text-secondary">Curriculum</Link></li>
              <li><Link to="/admissions" className="transition-colors hover:text-secondary">Admissions</Link></li>
              <li><Link to="/beyond-academics" className="transition-colors hover:text-secondary">Beyond Academics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Our Campuses
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              {["Mumbai", "Bangalore", "Delhi NCR", "Pune", "Hyderabad"].map((c) => (
                <li key={c}>
                  <Link to="/campuses" className="transition-colors hover:text-secondary">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>admissions@nandish-tech.edu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Plot 21, Education City, Mumbai 400001</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 transition-all hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65 sm:flex-row">
          <p>© 2026 Nandish-Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-secondary">Privacy Policy</a>
            <span>Designed By Nandish-Tech</span>
            <a href="#" className="transition-colors hover:text-secondary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
