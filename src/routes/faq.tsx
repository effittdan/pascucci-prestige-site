import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  ["Minimum age", "Renters must be at least 25 years old. Some exotic vehicles require 30+."],
  ["Insurance requirements", "Full coverage is required. We can coordinate qualifying coverage where needed."],
  ["Security deposit", "A refundable deposit is held against the vehicle and released upon return."],
  ["Mileage limits", "Daily mileage is included; additional miles are available upon request."],
  ["Delivery areas", "We deliver throughout greater San Antonio. Long-distance delivery available on request."],
  ["Airport delivery", "We meet at SAT or coordinate FBO delivery for private aviation."],
  ["Hotel delivery", "We coordinate handoff at every major downtown and resort hotel."],
  ["Additional drivers", "Additional drivers can be added during booking, subject to verification."],
  ["Fuel policy", "Return with the same fuel level as delivered, or we'll handle it for a flat fee."],
  ["Cancellation policy", "Reservations can be modified or cancelled per the policy shared at confirmation."],
  ["Wedding & event rentals", "Yes — we coordinate timing, dress codes for vehicles, and waiting windows."],
  ["Corporate rentals", "Yes — recurring corporate accounts and direct billing are available."],
  ["Damage responsibility", "The renter is responsible for any damage during the rental period, covered by insurance and deposit."],
  ["Payment methods", "Major credit cards. Corporate ACH available."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Luxury Car Rental Questions | Pascucci Prestige" },
      { name: "description", content: "Answers to common questions about Pascucci Prestige rentals, delivery, insurance, deposits and policies in San Antonio." },
      { property: "og:title", content: "FAQ — Pascucci Prestige" },
      { property: "og:description", content: "Common questions about Pascucci Prestige rentals and delivery." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12 bg-obsidian">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl">
            Questions, <em className="text-gold not-italic">answered.</em>
          </h1>
        </div>
      </section>
      <section className="bg-obsidian pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <div className="border-t border-border">
            {faqs.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg lg:text-xl text-ivory">{q}</span>
                    {isOpen ? <Minus size={18} className="text-gold shrink-0" /> : <Plus size={18} className="text-gold shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-8 text-titanium leading-relaxed">{a}</p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-ghost">Still curious? Contact Concierge</Link>
          </div>
        </div>
      </section>
    </>
  );
}
