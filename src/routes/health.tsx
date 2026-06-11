import { createFileRoute, Link } from "@tanstack/react-router";

type HealthData = {
  status: string;
  ssr: boolean;
  timestamp: string;
  renderedAt: string;
};

export const Route = createFileRoute("/health")({
  head: () => ({
    meta: [
      { title: "System Status — Pascucci Prestige" },
      { name: "description", content: "Live SSR and routing health check." },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: async (): Promise<HealthData> => {
    return {
      status: "ok",
      ssr: typeof window === "undefined",
      timestamp: new Date().toISOString(),
      renderedAt: typeof window === "undefined" ? "server" : "client",
    };
  },
  component: HealthPage,
});

function HealthPage() {
  const data = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <p className="eyebrow">System status</p>
      <h1 className="mt-4 text-4xl text-foreground">All systems operational</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This page is rendered through the TanStack Start SSR pipeline. If you can
        read it at a deep link without a 404, routing is working.
      </p>

      <dl className="mt-10 grid grid-cols-1 gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">Status</dt>
          <dd className="mt-1 text-lg text-foreground">{data.status}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">Initial render</dt>
          <dd className="mt-1 text-lg text-foreground">{data.renderedAt}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">SSR loader ran</dt>
          <dd className="mt-1 text-lg text-foreground">{String(data.ssr)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">Timestamp</dt>
          <dd className="mt-1 text-lg text-foreground">{data.timestamp}</dd>
        </div>
      </dl>

      <div className="mt-8 space-y-2 text-sm text-muted-foreground">
        <p>
          JSON probe:{" "}
          <a href="/api/health" className="underline">
            /api/health
          </a>
        </p>
        <p>
          <Link to="/" className="underline">
            Return home
          </Link>
        </p>
      </div>
    </div>
  );
}
