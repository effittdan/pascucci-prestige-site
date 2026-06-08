import logoAsset from "@/assets/pascucci-prestige-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Pascucci Prestige — Luxury Auto Concierge"
      className={`h-[4.5rem] w-auto md:h-[5.25rem] ${className}`}
    />
  );
}
