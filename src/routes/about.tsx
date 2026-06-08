import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Private Automotive Concierge | Pascucci Prestige" },
      { name: "description", content: "Pascucci Prestige is a San Antonio-based private automotive concierge built around a curated fleet and high-touch service." },
      { property: "og:title", content: "About — Pascucci Prestige" },
      { property: "og:description", content: "A private automotive concierge in San Antonio." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12 bg-obsidian">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 font-serif text-5xl lg:text-7xl">
            A private automotive concierge, <em className="text-gold not-italic">rooted in San Antonio.</em>
          </h1>
        </div>
      </section>
      <section className="bg-obsidian pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-10 space-y-8 text-ivory/85 text-lg leading-relaxed">
          <p>
            Pascucci Prestige was built on a simple idea: extraordinary
            vehicles deserve an extraordinary experience. No counters. No queues.
            Every reservation handled personally.
          </p>
          <p>
            Our fleet is intentionally small and obsessively maintained. Each
            vehicle is detailed and inspected before delivery, briefed at handoff,
            and collected when you're done.
          </p>
          <p>
            We're proud of where we operate. San Antonio is home — its hotels,
            its neighborhoods, its airport and its calendar of weddings,
            premieres and milestones shape how we serve.
          </p>
          <p>
            If you expect transparency, discretion and a vehicle that lives up
            to the occasion, we're glad you found us.
          </p>
          <div className="rule-gold !mt-14" />
          <div className="pt-6">
            <Link to="/request-reservation" className="btn-primary">
              Reserve Your Vehicle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
