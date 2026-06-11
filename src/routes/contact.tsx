import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Concierge | Pascucci Prestige" },
      { name: "description", content: "Reach the Pascucci Prestige concierge team in San Antonio by phone, text, or email." },
      { property: "og:title", content: "Contact Concierge — Pascucci Prestige" },
      { property: "og:description", content: "Reach the Pascucci Prestige concierge team in San Antonio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-5 font-serif text-5xl lg:text-7xl">
              Speak with <em className="text-gold not-italic">a concierge.</em>
            </h1>
            <p className="mt-6 max-w-md text-titanium">
              We respond personally — typically within an hour during business
              hours. For active reservations, please call directly.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={18} />
                <div>
                  <p className="spec text-gold">Service area</p>
                  <p className="text-ivory mt-1">San Antonio, Texas & greater Bexar County</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={18} />
                <div>
                  <p className="spec text-gold">Email</p>
                  <a href="mailto:concierge@pascucciprestige.com" className="text-ivory mt-1 block hover:text-gold">
                    concierge@pascucciprestige.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div>
                  <p className="spec text-gold">Direct response</p>
                  <p className="text-ivory mt-1">Use the reservation request form for the fastest concierge reply.</p>
                  <Link to="/request-reservation" className="mt-3 inline-flex text-gold hover:text-ivory transition-colors">
                    Open reservation request
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-charcoal p-8 lg:p-12 border border-border">
            <p className="eyebrow">Ready to reserve?</p>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-ivory">
              Skip the form. Request a vehicle.
            </h2>
            <p className="mt-4 text-titanium">
              The reservation request form captures everything the concierge needs
              to confirm availability, pricing, and delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/request-reservation" className="btn-primary">Request a Reservation</Link>
              <Link to="/fleet" className="btn-ghost">View the Fleet</Link>
            </div>
            <div className="rule-gold mt-12" />
            <p className="mt-6 text-sm text-titanium">
              Business hours: Mon–Sat, 9am – 9pm CT. After-hours by appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
