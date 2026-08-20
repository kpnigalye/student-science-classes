import { Helmet } from "react-helmet-async";
import { Shield, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const sections = [
  {
    heading: "Privacy Policy",
    body: [
      "We respect your privacy and are committed to protecting it.",
      "This website is operated by Students Classes and is intended to provide information about our institute, programs, courses, facilities, and activities.",
    ],
  },
  {
    heading: "Information We Collect",
    callout:
      "This is a static informational website. We do not collect, store, or process personal information from visitors through this website.",
    body: [
      "We do not have user registration, account creation, online forms, or other features that require visitors to provide personal information.",
    ],
  },
  {
    heading: "Cookies",
    body: ["This website does not use cookies for collecting or storing personal information."],
  },
  {
    heading: "Third-Party Services",
    body: [
      "We do not knowingly use third-party services on this website to collect personal information from visitors.",
      "If this website contains links to external websites, those websites have their own privacy policies and practices. We are not responsible for the privacy practices or content of external websites.",
    ],
  },
  {
    heading: "Website Security",
    body: [
      "Although we do not collect personal information through this website, we take reasonable measures to maintain the security and proper functioning of the website.",
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy if the website's features or practices change. Any updates will be published on this page with a revised \"Last updated\" date.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - Students' Classes</title>
        <meta name="description" content="Privacy policy for Students' Classes website. Information about data collection, cookies, third-party services, and contact details." />
        <link rel="canonical" href="https://studentsclasses.in/privacy" />
        <meta property="og:title" content="Privacy Policy - Students' Classes" />
        <meta property="og:description" content="Privacy policy for Students' Classes website." />
        <meta property="og:url" content="https://studentsclasses.in/privacy" />
      </Helmet>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 px-4 py-3 backdrop-blur">
        <Logo />
      </header>

      <section className="bg-gradient-hero px-4 py-16 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
            <Shield className="h-7 w-7 text-gold" />
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-primary-foreground/70">Last updated: August 20, 2026</p>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-4 py-14">
        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.heading} className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="text-xl font-bold text-primary md:text-2xl">{s.heading}</h2>
              {s.callout && (
                <div className="mt-4 rounded-lg border-l-4 border-steel bg-secondary/60 p-4">
                  <p className="text-sm leading-relaxed text-foreground/85">{s.callout}</p>
                </div>
              )}
              {s.body.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-xl border border-border bg-gradient-panel p-6 shadow-card md:p-8">
            <h2 className="text-xl font-bold text-primary md:text-2xl">Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy, you may contact us at:
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/85">
              <li className="font-semibold text-primary">Students Classes</li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                <a href="mailto:admin@studentsclasses.in" className="transition-colors hover:text-primary">
                  admin@studentsclasses.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                <span>2, 1st floor, Rajshri bldg, N.G. Acharya Marg, Chembur East, Mumbai</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
