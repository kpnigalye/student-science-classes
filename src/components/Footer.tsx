import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { to: "/ix-x", label: "IX – X" },
  { to: "/science", label: "Science" },
  { to: "/commerce-arts", label: "Commerce & Arts" },
  { to: "/career-options", label: "Career Options" },
  { to: "/xi-admissions", label: "XI Admissions" },
];

const examLinks = [
  { to: "/neet", label: "NEET" },
  { to: "/jee", label: "JEE" },
  { to: "/cet", label: "MHT-CET" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Since 1981</p>
          <h3 className="mt-2 text-xl font-bold">Students' Classes</h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
            Celebrating 45 years of Excellence!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Programmes</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Entrance Exams</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {examLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> staff@studentsclasses.in
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +91 8097740318 / +91 9136596326
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              First floor, Rajshri building, N. G. Acharya Marg, Near Royal Orchid hotel, Chembur (E), Mumbai - 400071
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              First Floor, Raikar Chambers, Opp Neelkanth Gardens, Govandi (E), Mumbai - 400088
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Students' Classes. All rights reserved.</p>
          <Link to="/privacy" className="transition-colors hover:text-primary-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
