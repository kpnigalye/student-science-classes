import { Helmet } from "react-helmet-async";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";

interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
  canonical: string;
}

export const ComingSoonPage = ({
  eyebrow,
  title,
  subtitle,
  highlights,
  metaTitle,
  metaDescription,
  canonical,
}: ComingSoonPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 px-4 py-3 backdrop-blur">
        <Logo />
      </header>

      <section className="bg-gradient-hero px-4 py-20 text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-primary-foreground/75">{subtitle}</p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-steel">Coming Soon</p>
            <h2 className="mt-2 text-2xl font-bold text-primary">What this programme will cover</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-lg bg-secondary/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-steel" />
                  <span className="text-sm text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/918097740318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;
