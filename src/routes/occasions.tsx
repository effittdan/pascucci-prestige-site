import { createFileRoute, Link } from "@tanstack/react-router";

const items = [
  { title: "Weddings", body: "Couture arrivals, getaway moments, and full-day coordination tailored to the ceremony.", vehicles: "Rolls-Royce, Bentley, Mercedes-Maybach" },
  { title: "Corporate travel", body: "Quiet movement for executives, visiting partners, and client-facing pickups.", vehicles: "Executive sedans, luxury SUVs" },
  { title: "Executive transportation", body: "Recurring service for residents and travelers who require an elevated standard.", vehicles: "Range Rover, Ghost, S-Class" },
  { title: "Weekend escapes", body: "Hill Country, the coast or just a Saturday — your weekend, upgraded.", vehicles: "Urus, 911, exotic GTs" },
  { title: "Birthdays & anniversaries", body: "Mark the milestone with a vehicle worth remembering.", vehicles: "Ferrari, Lamborghini, Aston Martin" },
  { title: "Special events", body: "Premieres, galas, sporting events and private celebrations.", vehicles: "By recommendation" },
  { title: "Photo & video productions", body: "Curated vehicles delivered to set, with flexible hold windows.", vehicles: "Full fleet available" },
  { title: "Hotel stays & airport arrivals", body: "Meet your vehicle at the lobby, FBO or terminal.", vehicles: "Full fleet available" },
];

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Occasions — Weddings, Corporate, Weekends | Pascucci Prestige" },
      { name: "description", content: "Curated luxury and exotic vehicles for weddings, corporate travel, weekends and special events in San Antonio." },
      { property: "og:title", content: "Occasions — Pascucci Prestige" },
      { property: "og:description", content: "Curated vehicles for weddings, corporate travel, weekends and special events." },
      { property: "og:url", content: "/occasions" },
    ],
    links: [{ rel: "canonical", href: "/occasions" }],
  }),
  component: OccasionsPage,
});

function OccasionsPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow">Occasions</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl max-w-3xl">
            Built for the <em className="text-gold not-italic">moments that matter.</em>
          </h1>
        </div>
      </section>
      <section className="bg-obsidian pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 mt-6">
            {items.map((o) => (
              <div key={o.title} className="bg-obsidian p-8 lg:p-10">
                <h2 className="font-serif text-2xl text-ivory">{o.title}</h2>
                <p className="mt-3 text-sm text-titanium leading-relaxed">{o.body}</p>
                <div className="hairline my-5" />
                <p className="spec text-gold">{o.vehicles}</p>
                <div className="mt-6">
                  <Link to="/request-reservation" className="spec text-ivory/80 hover:text-gold">
                    Request a Reservation →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
