import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { fleet } from "@/data/fleet";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "The Fleet — Luxury & Exotic Vehicles | Pascucci Prestige" },
      { name: "description", content: "Browse the Pascucci Prestige fleet of luxury and exotic vehicles available for concierge delivery in San Antonio." },
      { property: "og:title", content: "The Fleet — Pascucci Prestige" },
      { property: "og:description", content: "Luxury and exotic vehicles for concierge delivery in San Antonio." },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow">The Fleet</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl max-w-3xl">
            Exceptional vehicles, <em className="text-gold not-italic">ready on request.</em>
          </h1>
          <p className="mt-6 max-w-xl text-titanium">
            Each vehicle is privately maintained, detailed before every delivery,
            and reserved by request to ensure availability.
          </p>
        </div>
      </section>

      <section className="bg-obsidian pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="hairline mb-12" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((v) => (
              <article key={v.slug} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                  <img
                    src={v.image}
                    alt={`${v.name} — ${v.category}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <p className="eyebrow">{v.category}</p>
                  <h2 className="mt-2 font-serif text-3xl text-ivory">{v.name}</h2>
                  <p className="mt-2 font-serif italic text-titanium">{v.tagline}</p>
                  <p className="mt-3 spec text-ivory">
                    {v.rate} <span className="text-titanium">{v.rateUnit ?? ""}</span>
                  </p>
                  <p className="mt-2 spec text-titanium">
                    {v.passengers} passengers · {v.drive} · {v.horsepower}
                  </p>
                  <div className="hairline mt-5" />
                  <div className="mt-5 flex items-center justify-between">
                    <Link to="/request-reservation" className="spec text-gold inline-flex items-center gap-2">
                      Ask About Availability <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
