import { createFileRoute, Link } from "@tanstack/react-router";

const steps = [
  { n: "01", title: "Choose your vehicle", body: "Browse the fleet and select what fits the occasion. Unsure? A concierge will recommend." },
  { n: "02", title: "Submit a reservation request", body: "Tell us your dates, delivery location, occasion and a few driver details." },
  { n: "03", title: "Confirm details and requirements", body: "We confirm availability, pricing, deposit, insurance and delivery timing." },
  { n: "04", title: "Receive your vehicle", body: "We deliver, brief you on the vehicle and hand off the keys at your location." },
];

const notes = [
  ["Driver verification", "A valid driver license, proof of insurance and a brief verification are required for every reservation."],
  ["Security deposit", "A refundable security deposit is held for the duration of the rental and released after vehicle return."],
  ["Insurance", "Full coverage is required. We can coordinate qualifying coverage where needed."],
  ["Delivery coordination", "We confirm delivery time, location and contact details the day before pickup."],
  ["Return process", "We coordinate return at the agreed time and location — no fuel stop drama."],
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Reservation Process | Pascucci Prestige" },
      { name: "description", content: "How to reserve a luxury or exotic vehicle with Pascucci Prestige in San Antonio. Four simple steps." },
      { property: "og:title", content: "How It Works — Pascucci Prestige" },
      { property: "og:description", content: "The Pascucci Prestige reservation process in four simple steps." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow">How It Works</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl max-w-3xl">
            Reserved in minutes. <em className="text-gold not-italic">Delivered with care.</em>
          </h1>
        </div>
      </section>

      <section className="bg-obsidian pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-mono text-gold text-sm tracking-[0.3em]">{s.n}</p>
                <div className="hairline my-5" />
                <h2 className="font-serif text-2xl text-ivory">{s.title}</h2>
                <p className="mt-3 text-titanium text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <p className="eyebrow">Reassurance</p>
          <h2 className="mt-4 font-serif text-3xl lg:text-5xl">What to expect</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {notes.map(([title, body]) => (
              <div key={title} className="py-6 grid md:grid-cols-3 gap-4">
                <p className="spec text-gold">{title}</p>
                <p className="md:col-span-2 text-ivory/85 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/request-reservation" className="btn-primary">Request a Reservation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
