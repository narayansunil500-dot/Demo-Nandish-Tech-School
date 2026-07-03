import { type ReactNode, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ScheduleVisitDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = (o: boolean) => {
    setOpen(o);
    if (!o) setTimeout(() => setSubmitted(false), 200);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] gap-0 overflow-y-auto p-0 sm:max-w-[880px]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left branded panel */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow p-8 text-primary-foreground md:block">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                <Sparkles className="h-3.5 w-3.5" /> Personalised Campus Tour
              </div>
              <h3 className="mt-5 text-3xl font-extrabold leading-tight">
                Walk Through a Day at{" "}
                <span className="text-secondary">Nandish-Tech</span>
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Meet our faculty, tour the labs and libraries, and experience
                our learning environment first-hand.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                {[
                  { icon: MapPin, text: "Guided walkthrough of your chosen campus" },
                  { icon: Users, text: "Interaction with faculty & counsellors" },
                  { icon: Clock, text: "Flexible 60-90 minute time slots" },
                  { icon: CalendarDays, text: "Weekday & Saturday visits available" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-primary-foreground/90">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 pt-8">
                <p className="text-xs italic text-primary-foreground/75">
                  &ldquo;The campus visit made our decision. Every detail —
                  from the classrooms to the sports facilities — was
                  extraordinary.&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-semibold text-secondary">
                  — Parent, Grade 6
                </p>
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
                  Visit Requested!
                </h4>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  We&apos;ve received your visit request. Our team will confirm
                  your slot on WhatsApp / email within 24 hours.
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
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] md:hidden">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-2xl font-extrabold tracking-tight text-primary">
                      Schedule a Visit
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Pick a date & campus — we&apos;ll handle the rest.
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
                      Parent Name *
                    </Label>
                    <Input required placeholder="Jane Doe" className="h-11" />
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

                  <div className="col-span-2">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Email *
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
                      Grade of Interest *
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

                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Visit Date *
                    </Label>
                    <Input required type="date" min={today} className="h-11" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Preferred Time *
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Pick a slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:30">10:30 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:30">03:30 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2">
                    <Label className="mb-1.5 block text-xs font-semibold text-foreground/80">
                      Anything specific you&apos;d like to see?
                    </Label>
                    <Textarea
                      placeholder="e.g. science labs, sports facilities, boarding wing…"
                      className="min-h-[84px] resize-none"
                      maxLength={500}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="col-span-2 mt-2 h-12 bg-secondary text-base font-semibold text-secondary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:bg-secondary/90"
                  >
                    Confirm My Visit
                  </Button>

                  <p className="col-span-2 text-center text-[11px] text-muted-foreground">
                    A counsellor will confirm your slot within 24 hours.
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
