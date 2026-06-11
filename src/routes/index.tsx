import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Clock, KeyRound, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import heroAsset from "@/assets/hero-mclaren-gt.png.asset.json";
const heroImg = heroAsset.url;
import conciergeImg from "@/assets/concierge-handoff.jpg";
import skylineImg from "@/assets/san-antonio.jpg";
import { fleet } from "@/data/fleet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pascucci Prestige — Luxury & Exotic Car Rental in San Antonio" },
      {
        name: "description",
        content:
          "San Antonio's private luxury and exotic vehicle concierge. Hotel, airport, residential and event delivery. Drive beyond ordinary.",
      },
      { property: "og:title", content: "Pascucci Prestige — Luxury Auto Concierge" },
      { property: "og:description", content: "Luxury and exotic vehicles, delivered with concierge-level service in San Antonio." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <FeaturedFleet />
      <ConciergeBand />
      <HowItWorks />
      <Occasions />
      <SanAntonio />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="White McLaren GT parked at a luxury hillside villa at dusk overlooking the sea"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(1.32) saturate(1.04)" }}
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/35 to-obsidian/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-obsidian/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 lg:px-10 pb-20 lg:pb-28 pt-32">
        <p className="eyebrow fade-up">
          Luxury Auto Concierge · San Antonio, Texas
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-ivory fade-up">
          Drive beyond <em className="text-gold not-italic font-light">ordinary.</em>
        </h1>
        <p className="mt-7 max-w-xl text-ivory/85 text-base lg:text-lg leading-relaxed fade-up">
          Luxury and exotic vehicle access in San Antonio, delivered with
          concierge-level service. Your vehicle. Your schedule. Your arrival.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 fade-up">
          <Link to="/fleet" className="btn-primary">
            View the Fleet <ArrowRight size={14} />
          </Link>
          <Link to="/request-reservation" className="btn-ghost">
            Request a Reservation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 spec text-ivory/70">
        <span className="h-1 w-1 rounded-full bg-gold animate-pulse" /> Scroll
      </div>
    </section>
  );
}

function FeaturedFleet() {
  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">The Fleet</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl">
              Curated. Maintained. <em className="text-gold not-italic">Ready.</em>
            </h2>
          </div>
          <Link to="/fleet" className="spec text-gold inline-flex items-center gap-2 group">
            View Full Fleet
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <article key={v.slug} className="group">
              <Link to="/fleet" className="block">
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
              </Link>
              <div className="pt-5">
                <p className="eyebrow">{v.category}</p>
                <Link to="/fleet" className="block">
                  <h3 className="mt-2 font-serif text-2xl lg:text-3xl text-ivory">{v.name}</h3>
                </Link>
                <p className="mt-2 spec text-ivory">
                  {v.rate} <span className="text-titanium">{v.rateUnit}</span>
                </p>
                <p className="mt-3 spec text-titanium">
                  {v.passengers} passengers · {v.drive} · Delivery available
                </p>
                <div className="hairline mt-5" />
                <div className="mt-5 flex items-center justify-between">
                  <Link to="/fleet" className="spec text-gold inline-flex items-center gap-2">
                    View Details <ArrowRight size={12} />
                  </Link>
                  <Link to="/request-reservation" className="spec text-ivory/70 hover:text-ivory">
                    Ask About Availability
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConciergeBand() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <img
            src={conciergeImg}
            alt="Concierge key handoff at a luxury San Antonio hotel"
            loading="lazy"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
        </div>
        <div className="bg-ivory text-charcoal px-6 lg:px-20 py-20 lg:py-28 flex flex-col justify-center">
          <p className="eyebrow" style={{ color: "var(--pp-gold)" }}>The Concierge Promise</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl text-obsidian leading-tight">
            Luxury <em className="text-gold not-italic">delivered.</em>
          </h2>
          <p className="mt-6 text-charcoal/80 text-base lg:text-lg leading-relaxed max-w-md">
            Hotel, airport, residential and special-event delivery throughout
            San Antonio. A discreet handoff. A briefed vehicle. A
            departure on your timeline — not ours.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 max-w-xl">
            {[
              { icon: KeyRound, label: "White-glove handoff" },
              { icon: Clock, label: "Flexible scheduling" },
              { icon: ShieldCheck, label: "Insurance coordination" },
              { icon: Sparkles, label: "Vehicle preparation" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon size={18} className="text-gold" />
                <span className="spec text-charcoal">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link to="/concierge" className="btn-gold">
              Explore Concierge Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Choose your vehicle", body: "Browse the curated fleet and select the right vehicle for the occasion." },
  { n: "02", title: "Submit a request", body: "Share your dates, delivery location and a few driver details." },
  { n: "03", title: "Confirm the details", body: "A concierge confirms availability, pricing, deposit and requirements." },
  { n: "04", title: "Receive your vehicle", body: "We deliver to your hotel, terminal, residence or event — on your time." },
];

function HowItWorks() {
  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl">
            Reserved in minutes. <em className="text-gold not-italic">Delivered with care.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-mono text-gold text-sm tracking-[0.3em]">{s.n}</p>
              <div className="hairline my-5" />
              <h3 className="font-serif text-2xl text-ivory">{s.title}</h3>
              <p className="mt-3 text-titanium text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link to="/how-it-works" className="spec text-gold inline-flex items-center gap-2 group">
            See the full process <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const occasions = [
  { title: "Weddings", body: "Couture arrivals and getaway vehicles for the day.", to: "/occasions" },
  { title: "Executive Travel", body: "Discreet movement for executives and visiting partners.", to: "/occasions" },
  { title: "Weekend Escapes", body: "Hill Country, the coast — your weekend, upgraded.", to: "/occasions" },
  { title: "Special Events", body: "Birthdays, anniversaries and milestones to remember.", to: "/occasions" },
];

function Occasions() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Occasions</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl">
              Built for the <em className="text-gold not-italic">moments that matter.</em>
            </h2>
          </div>
          <Link to="/occasions" className="spec text-gold inline-flex items-center gap-2 group">
            Browse occasions <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {occasions.map((o) => (
            <Link
              key={o.title}
              to={o.to}
              className="group bg-charcoal p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-obsidian"
            >
              <div>
                <h3 className="font-serif text-2xl text-ivory">{o.title}</h3>
                <p className="mt-4 text-sm text-titanium leading-relaxed">{o.body}</p>
              </div>
              <span className="mt-8 spec text-gold inline-flex items-center gap-2">
                Learn more
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SanAntonio() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <img
        src={skylineImg}
        alt="San Antonio skyline at night with the Tower of the Americas"
        loading="lazy"
        width={1920}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-10 text-center">
        <p className="eyebrow">
          <MapPin size={12} className="inline mr-1 -mt-0.5" />
          San Antonio, Texas
        </p>
        <h2 className="mt-6 font-serif text-4xl lg:text-7xl text-ivory leading-tight">
          San Antonio, meet your <em className="text-gold not-italic">next obsession.</em>
        </h2>
        <p className="mt-8 text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          From downtown hotels to the Hill Country, the Riverwalk to private
          estates — our delivery footprint covers the city and beyond.
        </p>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "The Urus arrived at the hotel exactly as promised. Discreet, immaculate, handed off in under a minute. We will use Pascucci again.",
    author: "M. Lawson",
    role: "Executive client",
  },
  {
    quote: "They delivered the Rolls to the chapel, waited quietly, then brought it back at midnight. Felt like a private service, not a rental.",
    author: "A. & J. Reyes",
    role: "Wedding client",
  },
  {
    quote: "Picked us up at the terminal in the Ferrari. The weekend started the moment we stepped outside.",
    author: "D. Patel",
    role: "Weekend escape",
  },
];

function Testimonials() {
  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <p className="eyebrow text-center">Client Reflections</p>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="bg-obsidian p-8 lg:p-10 flex flex-col">
              <MessageCircle size={18} className="text-gold" />
              <blockquote className="mt-6 font-serif text-xl lg:text-2xl text-ivory/95 leading-snug flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="spec text-gold">{t.author}</p>
                <p className="spec text-titanium mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ivory text-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10 text-center">
        <p className="eyebrow" style={{ color: "var(--pp-gold)" }}>Reserve</p>
        <h2 className="mt-6 font-serif text-4xl lg:text-7xl text-obsidian leading-tight">
          Your vehicle. Your schedule. <em className="text-gold not-italic">Your arrival.</em>
        </h2>
        <p className="mt-6 text-charcoal/75 max-w-2xl mx-auto">
          Tell us when, where and which vehicle. A concierge will respond
          personally to confirm availability and delivery.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/request-reservation" className="btn-primary">
            <Car size={14} /> Request a Reservation
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.18em] text-xs px-6 py-4 border border-obsidian/30 text-obsidian hover:border-gold hover:text-gold transition-colors">
            Contact Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
