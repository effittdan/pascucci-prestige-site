import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/fleet", label: "Fleet" },
  { to: "/concierge", label: "Concierge" },
  { to: "/occasions", label: "Occasions" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-obsidian/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Pascucci Prestige home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="spec text-ivory/80 hover:text-gold transition-colors"
              activeProps={{ className: "spec text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/request-reservation" className="btn-primary">
            Request Reservation
          </Link>
        </div>

        <button
          className="lg:hidden text-ivory p-2 min-h-11 min-w-11 inline-flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-obsidian/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-5 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="spec text-ivory/90 py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="hairline my-2" />
            <Link
              to="/request-reservation"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Request Reservation
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-ghost w-full">
              Contact Concierge
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
