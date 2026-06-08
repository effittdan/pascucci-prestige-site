import urus from "@/assets/fleet-urus.jpg";
import exotic from "@/assets/fleet-exotic.jpg";
import executive from "@/assets/fleet-executive.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  rate: string;
  rateUnit?: string;
  passengers: number;
  drive: string;
  transmission: string;
  horsepower: string;
  tagline: string;
  image: string;
  featured?: boolean;
};

export const fleet: Vehicle[] = [
  {
    slug: "lamborghini-urus",
    name: "Lamborghini Urus",
    category: "Luxury SUV",
    rate: "From $1,495",
    rateUnit: "/ day",
    passengers: 5,
    drive: "AWD",
    transmission: "Automatic",
    horsepower: "641 hp",
    tagline: "Supercar soul. SUV freedom.",
    image: urus,
    featured: true,
  },
  {
    slug: "ferrari-488",
    name: "Ferrari 488",
    category: "Exotic",
    rate: "Request Pricing",
    passengers: 2,
    drive: "RWD",
    transmission: "Automatic",
    horsepower: "661 hp",
    tagline: "Italian theatre, on demand.",
    image: exotic,
    featured: true,
  },
  {
    slug: "rolls-royce-ghost",
    name: "Rolls-Royce Ghost",
    category: "Executive",
    rate: "From $1,895",
    rateUnit: "/ day",
    passengers: 4,
    drive: "AWD",
    transmission: "Automatic",
    horsepower: "563 hp",
    tagline: "Arrive without a sound.",
    image: executive,
    featured: true,
  },
];
