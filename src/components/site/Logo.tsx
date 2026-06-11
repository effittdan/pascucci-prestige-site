import logoImg from "@/assets/pascucci-prestige-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Pascucci Prestige — Luxury Auto Concierge"
      className={`h-[4.5rem] w-auto md:h-[5.25rem] ${className}`}
    />
  );
}
