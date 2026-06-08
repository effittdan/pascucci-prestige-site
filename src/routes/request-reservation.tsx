import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { fleet } from "@/data/fleet";

export const Route = createFileRoute("/request-reservation")({
  head: () => ({
    meta: [
      { title: "Request a Reservation | Pascucci Prestige" },
      { name: "description", content: "Request a luxury or exotic vehicle reservation with the Pascucci Prestige concierge. Hotel, airport and residential delivery in San Antonio." },
      { property: "og:title", content: "Request a Reservation — Pascucci Prestige" },
      { property: "og:description", content: "Request your vehicle and delivery details. A concierge will respond personally." },
      { property: "og:url", content: "/request-reservation" },
    ],
    links: [{ rel: "canonical", href: "/request-reservation" }],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="pt-44 pb-32 bg-obsidian min-h-[70vh]">
        <div className="mx-auto max-w-2xl px-5 lg:px-10 text-center">
          <CheckCircle2 size={48} className="text-gold mx-auto" />
          <p className="eyebrow mt-6">Received</p>
          <h1 className="mt-4 font-serif text-4xl lg:text-6xl">
            Thank you.
          </h1>
          <p className="mt-6 text-ivory/85 leading-relaxed">
            Your request has been received. A Pascucci Prestige concierge will
            contact you shortly to confirm availability, pricing, and delivery
            details.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Link to="/" className="btn-ghost">Return Home</Link>
            <Link to="/fleet" className="btn-primary">Continue Browsing</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-36 lg:pt-44 pb-24 lg:pb-32 bg-obsidian">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <p className="eyebrow">Reserve</p>
        <h1 className="mt-5 font-serif text-5xl lg:text-7xl">
          Request a <em className="text-gold not-italic">reservation.</em>
        </h1>
        <p className="mt-6 max-w-xl text-titanium">
          Share a few details and a concierge will respond personally to confirm
          availability, pricing, and delivery.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mt-14 grid gap-8"
        >
          <FieldGroup title="About you">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Select label="Preferred contact" name="contact" options={["Phone", "Text", "Email"]} />
          </FieldGroup>

          <FieldGroup title="The reservation">
            <Select label="Vehicle of interest" name="vehicle" options={["Recommend for me", ...fleet.map(f => f.name)]} />
            <Field label="Occasion" name="occasion" placeholder="Wedding, weekend, executive…" />
            <Field label="Pickup date" name="pickup" type="date" required />
            <Field label="Return date" name="return" type="date" required />
            <Field label="Pickup / delivery location" name="location" placeholder="Hotel, address, terminal…" full />
            <Select label="Delivery requested?" name="delivery" options={["Yes", "No", "Discuss with concierge"]} />
          </FieldGroup>

          <FieldGroup title="Driver details">
            <Field label="Number of drivers" name="drivers" type="number" />
            <Field label="Primary driver age" name="age" type="number" />
            <Textarea label="Anything else?" name="message" />
          </FieldGroup>

          <label className="flex items-start gap-3 text-sm text-titanium">
            <input type="checkbox" required className="mt-1 accent-gold" />
            <span>
              I understand a concierge will follow up to confirm availability,
              pricing, deposit and insurance requirements before any reservation
              is finalized.
            </span>
          </label>

          <div className="flex flex-wrap gap-3 pt-2">
            <button type="submit" className="btn-primary">Request a Reservation</button>
            <Link to="/contact" className="btn-ghost">Contact Concierge</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border border-border p-6 lg:p-8 bg-charcoal/40">
      <legend className="eyebrow px-3">{title}</legend>
      <div className="grid gap-5 md:grid-cols-2 mt-2">{children}</div>
    </fieldset>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-ivory placeholder:text-titanium/60 transition-colors";

function Field({ label, name, type = "text", required, placeholder, full }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label htmlFor={name} className="spec text-titanium">{label}{required && <span className="text-red ml-1">*</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={inputClass} />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="spec text-titanium">{label}</label>
      <select id={name} name={name} className={inputClass + " appearance-none"} defaultValue="">
        <option value="" disabled className="bg-charcoal">Select…</option>
        {options.map(o => <option key={o} value={o} className="bg-charcoal">{o}</option>)}
      </select>
    </div>
  );
}

function Textarea({ label, name }: { label: string; name: string }) {
  return (
    <div className="md:col-span-2">
      <label htmlFor={name} className="spec text-titanium">{label}</label>
      <textarea id={name} name={name} rows={4} className={inputClass + " resize-none"} />
    </div>
  );
}
