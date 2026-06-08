import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Plane, Home, Heart, Briefcase, Sparkles } from "lucide-react";
import conciergeImg from "@/assets/concierge-handoff.jpg";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Concierge Delivery — Hotel, Airport & Residential | Pascucci Prestige" },
      { name: "description", content: "White-glove vehicle delivery throughout San Antonio. Hotel, airport, residential, wedding, corporate and special-event handoffs." },
      { property: "og:title", content: "Concierge Delivery — Pascucci Prestige" },
      { property: "og:description", content: "Hotel, airport and residential delivery throughout San Antonio." },
      { property: "og:url", content: "/concierge" },
    ],
    links: [{ rel: "canonical", href: "/concierge" }],
  }),
  component: ConciergePage,
});

const services = [
  { icon: Building2, title: "Hotel delivery", body: "Discreet handoff at the porte-cochère of every major San Antonio hotel." },
  { icon: Plane, title: "Airport delivery", body: "Meet at SAT or the FBO with the vehicle ready when you land." },
  { icon: Home, title: "Residential delivery", body: "Door-to-door coordination at private residences and gated communities." },
  { icon: Heart, title: "Wedding delivery", body: "Couture arrivals, getaway cars, and full-day chauffeur coordination." },
  { icon: Briefcase, title: "Executive delivery", body: "Quiet, on-schedule transport for executives and visiting partners." },
  { icon: Sparkles, title: "Special events", body: "Birthdays, anniversaries, premieres and milestones to remember." },
];

function ConciergePage() {
  return (
    <>
      <section className="relative pt-36 lg:pt-44 pb-24 bg-obsidian overflow-hidden">
        <img src={conciergeImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/40" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow">Concierge Services</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl max-w-3xl">
            Your vehicle. Your schedule. <em className="text-gold not-italic">Your arrival.</em>
          </h1>
          <p className="mt-6 max-w-xl text-ivory/85">
            We don't operate a counter. Every vehicle is delivered, briefed and
            collected — wherever the day begins and ends.
          </p>
        </div>
      </section>

      <section className="bg-obsidian pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-obsidian p-8 lg:p-10 min-h-[240px]">
                <Icon size={22} className="text-gold" />
                <h2 className="mt-6 font-serif text-2xl text-ivory">{title}</h2>
                <p className="mt-3 text-sm text-titanium leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/request-reservation" className="btn-primary">
              Schedule Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
