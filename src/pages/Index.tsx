import { Helmet } from "react-helmet-async";
import {
  Users,
  Target,
  Clock,
  Award,
  BrainCircuit,
  BadgeCheck,
  FlaskConical,
  Palette,
  School,
  ArrowRight,
  Star,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

export default function Index() {
  const whyChooseUs = [
    { icon: Users, title: "Expert Faculty", description: "Experienced teachers dedicated to your success" },
    { icon: Target, title: "Regular Tests", description: "Comprehensive test series and doubt-solving" },
    { icon: Clock, title: "Flexible Timings", description: "Morning & evening batches available" },
    { icon: Award, title: "Proven Success", description: "Outstanding track record in competitive exams" },
    { icon: BrainCircuit, title: "Smart Approach", description: "Structured, result-oriented coaching" },
    { icon: BadgeCheck, title: "Personal Attention", description: "Limited batch size for better focus" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Students' Classes – Coaching institute in Mumbai Since 1981</title>
        <meta name="description" content="Expert coaching for IX-X State-CBSE board, XI-XII Science-Commerce-Arts, NEET, JEE & MHT-CET in Chembur, Mumbai. Celebrating 45 years of excellence in education." />
        <link rel="canonical" href="https://studentsclasses.in/" />
        <meta property="og:title" content="Students' Classes – Coaching institute in Mumbai Since 1981" />
        <meta property="og:description" content="Expert coaching for School and College section in Chembur, Mumbai. Celebrating 45 years of excellence in education." />
        <meta property="og:url" content="https://studentsclasses.in/" />
      </Helmet>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 px-4 py-3 backdrop-blur">
        <Logo />
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-hero px-4 py-20 text-primary-foreground md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
          <div className="absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-gold/50" />
          <div className="absolute -right-10 top-1/2 h-[16rem] w-[16rem] -translate-y-1/2 rounded-full border border-gold/40" />
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-steel/40 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto animate-fade-in">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              <Star className="h-3.5 w-3.5 fill-current" /> Since 1981
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] md:text-6xl">
              Expert&nbsp;Teaching.
              <span className="block bg-gradient-gold bg-clip-text text-transparent">Proven Results.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/75">
              Celebrating 45 years of Excellence!
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#courses"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.02]"
              >
                Explore Our Batches <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918097740318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4" /> Talk to a Counsellor
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6">
              {[
                { k: "45+", v: "Years of teaching" },
                { k: "95", v: "80+ students in SSC" },
                { k: "30", v: "80+ students in HSC" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl font-bold text-gold-soft md:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-primary-foreground/65">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Our Courses - Category Selection */}
      <section id="courses" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">Our Courses</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Choose your stream</h2>
            <p className="mt-3 text-muted-foreground">
              Programmes built around board results first, with entrance preparation layered on top.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                to: "/ix-x",
                icon: School,
                title: "IX – X",
                sub: "State Board",
                cta: "Coming soon",
                soon: true,
              },
              {
                to: "/science",
                icon: FlaskConical,
                title: "Science",
                sub: "XI – XII with Entrance",
                cta: "Explore courses",
                soon: false,
              },
              {
                to: "/commerce-arts",
                icon: Palette,
                title: "Commerce & Arts",
                sub: "XI – XII Commerce & Arts Stream",
                cta: "Coming soon",
                soon: true,
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className={`group relative flex flex-col overflow-hidden rounded-xl border p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  c.soon ? "border-border bg-gradient-panel" : "border-navy/25 bg-card"
                }`}
              >
                {!c.soon && <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" />}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    c.soon ? "bg-secondary text-steel" : "bg-navy text-primary-foreground"
                  }`}
                >
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-steel">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { to: "/career-options", icon: GraduationCap, label: "Career Options after XII" },
              { to: "/xi-admissions", icon: School, label: "XI Admissions Guide" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-6 py-5 shadow-card transition-colors hover:border-navy/30"
              >
                <span className="flex items-center gap-3">
                  <l.icon className="h-5 w-5 text-steel" />
                  <span className="text-base font-semibold text-primary">{l.label}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-steel transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-secondary/40 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">Why Students' Classes</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">What sets us apart</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group bg-card p-7 transition-colors hover:bg-gradient-panel">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-navy group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
