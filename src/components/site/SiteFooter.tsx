import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-titanium text-sm leading-relaxed">
              A private automotive concierge in San Antonio. Curated luxury and
              exotic vehicles, delivered to your hotel, residence, or arrival
              terminal.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link to="/request-reservation" className="btn-primary">
                Request Reservation
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/fleet", "Fleet"],
                ["/concierge", "Concierge"],
                ["/occasions", "Occasions"],
                ["/how-it-works", "How it works"],
                ["/about", "About"],
                ["/faq", "FAQ"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-ivory/80 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Concierge</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-gold" />
                San Antonio, Texas
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-gold" />
                <a href="mailto:concierge@pascucciprestige.com" className="hover:text-gold">
                  concierge@pascucciprestige.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Link to="/contact" className="hover:text-gold">Contact the concierge team</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-14" />

        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-titanium">
          <p>© {new Date().getFullYear()} Pascucci Prestige. All rights reserved.</p>
          <p className="spec">Luxury Auto Concierge · San Antonio, TX</p>
        </div>
      </div>
    </footer>
  );
}
