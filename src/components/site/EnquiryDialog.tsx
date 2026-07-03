import { type ReactNode, useState } from "react";
import { GraduationCap, CheckCircle2, Sparkles, ShieldCheck, PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function EnquiryDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = (o: boolean) => {
    setOpen(o);
    if (!o) setTimeout(() => setSubmitted(false), 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] gap-0 overflow-y-auto p-0 sm:max-w-[880px]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left branded panel */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-primary to-[color:var(--color-primary-glow,theme(colors.primary.DEFAULT))] p-8 text-primary-foreground md:block">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026-27
              </div>
              <h3 className="mt-5 text-3xl font-extrabold leading-tight">
                Begin Your Child&apos;s Journey at{" "}
                <span className="text-secondary">Nandish-Tech</span>
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Share a few details and our admissions counsellor will personally
                guide you through the next steps.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "World-class curriculum & faculty",
                  "Modern smart campuses",
                  "Scholarships for meritorious students",
                  "Personalised campus tour",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-primary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
                    <ShieldCheck className="h-4 w-4" /> Secure
                  </div>
                  <p className="mt-1 text-[11px] text-primary-foreground/70">
                    Your details stay private.
                  </p>
                </div>
                <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
                    <PhoneCall className="h-4 w-4" /> 24 hrs
                  </div>
                  <p className="mt-1 text-[11px] text-primary-foreground/70">
                    We reply within a day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="bg-background p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h4 className="mt-5 text-2xl font-extrabold text-primary">
                  Thank you!
                </h4>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your enquiry has been received. Our admissions team will
                  connect with you within 24 hours.
                </p>
                <Button
                  className="mt-6 bg-primary hover:bg-primary/90"
                  onClick={() => handleClose(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] md:hidden">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-primary">
                      Admission Enquiry
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Fields marked * are required.
                    </p>
                  </div>
                </div>

                <form
                  className="mt-6 grid grid-cols-2 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Academic Year *
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026-27">2026-27</SelectItem>
                        <SelectItem value="2027-28">2027-28</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Preferred Campus *
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Choose campus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="delhi">Delhi NCR</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      First Name *
                    </Label>
                    <Input required placeholder="John" className="h-11" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Last Name *
                    </Label>
                    <Input required placeholder="Doe" className="h-11" />
                  </div>

                  <div className="col-span-2">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Email Address *
                    </Label>
                    <Input
                      required
                      type="email"
                      placeholder="parent@example.com"
                      className="h-11"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Phone *
                    </Label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-11"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Grade Applying For *
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Nursery",
                          "KG",
                          "Grade 1-5",
                          "Grade 6-8",
                          "Grade 9-10",
                          "Grade 11-12",
                        ].map((g) => (
                          <SelectItem key={g} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="col-span-2 mt-2 h-12 bg-primary text-base font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Submit Enquiry
                  </Button>

                  <p className="col-span-2 text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to our privacy policy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
