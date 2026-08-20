import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/students-classes-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/ix-x", label: "IX – X" },
  { to: "/science", label: "Science" },
  { to: "/commerce-arts", label: "Commerce & Arts" },
  { to: "/career-options", label: "Career Options" },
  { to: "/xi-admissions", label: "XI Admissions" },
];

const Logo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto flex items-center justify-between gap-6 px-0">
      <Link to="/" className="shrink-0" aria-label="Students' Classes home">
        <img src={logoAsset.url} alt="Students' Classes" className="h-11 md:h-14 w-auto" />
      </Link>

      <nav className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-primary"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-primary"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background p-4 shadow-card lg:hidden">
          <div className="container mx-auto flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? "bg-secondary text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
