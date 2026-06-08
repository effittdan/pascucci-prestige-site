export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pp-gold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#D8BC85" />
            <stop offset="100%" stopColor="#8B7240" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill="none" stroke="url(#pp-gold)" strokeWidth="1" opacity="0.6" />
        <path
          d="M13 28 V12 H22 a6 6 0 0 1 0 12 H17"
          fill="none"
          stroke="url(#pp-gold)"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
      </svg>
      <div className="leading-none">
        <div className="font-serif text-lg tracking-[0.18em] text-ivory">
          PASCUCCI
        </div>
        <div className="spec text-[0.6rem] mt-0.5 text-titanium">
          PRESTIGE · LUXURY AUTO CONCIERGE
        </div>
      </div>
    </div>
  );
}
