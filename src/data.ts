export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  color: string;
  colors: string[];
  image: string;
  hoverImage: string;
  badges: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "luna-strap",
    name: "Luna Strap Sandals",
    price: 289000,
    color: "Sand Beige",
    colors: ["#D2C4B3", "#111111", "#8A5A3C"],
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    badges: ["New", "Best Seller"],
    description:
      "Designed for daily movement with a soft footbed, clean strap silhouette, and lightweight outsole.",
  },
  {
    id: "aira-cloud",
    name: "Aira Cloud Slides",
    price: 249000,
    color: "Ivory",
    colors: ["#F5F5F0", "#E8D8C3"],
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    badges: ["Limited Drop"],
    description:
      "Effortless slip-ons crafted from ultra-soft material for extreme comfort without sacrificing style.",
  },
  {
    id: "nara-flats",
    name: "Nara Everyday Flats",
    price: 319000,
    originalPrice: 359000,
    color: "Black",
    colors: ["#111111", "#5B5B5B"],
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    badges: ["10% OFF"],
    description:
      "Minimalist flats that go with almost anything. Ideal for transitioning from office hours to evening walks.",
  },
  {
    id: "sora-resort",
    name: "Sora Resort Sandals",
    price: 279000,
    color: "Tan Brown",
    colors: ["#8A5A3C", "#E8D8C3"],
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    badges: [],
    description:
      "Warm breeze, easy steps. Sora is designed for your holiday edit.",
  },
  {
    id: "vela-heels",
    name: "Vela Soft Heels",
    price: 349000,
    color: "Cream Gold",
    colors: ["#EBE6DD", "#D4AF37"],
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    badges: ["Best Seller"],
    description:
      "Low-height heels with an exceptionally soft insole. Elegant styling made for long days.",
  },
  {
    id: "mira-cross",
    name: "Mira Cross Sandals",
    price: 299000,
    color: "Mocha",
    colors: ["#6B5145", "#111111"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
    badges: [],
    description:
      "Signature crossover straps. Provides excellent lockdown combined with a minimalist look.",
  },
  {
    id: "ayla-daily",
    name: "Ayla Daily Sandals",
    price: 269000,
    color: "Olive",
    colors: ["#5A5A40", "#111111", "#E8D8C3"],
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    badges: [],
    description:
      "Everyday utility meets feminine aesthetics. Olive tones for a natural edge.",
  },
  {
    id: "rumi-minimal",
    name: "Rumi Minimal Flats",
    price: 289000,
    color: "White",
    colors: ["#FFFFFF", "#111111"],
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800&q=80",
    badges: ["New"],
    description:
      "Pure aesthetic. The Rumi flats utilize a seamless construction to prevent rubbing or blisters.",
  },
];

export const reviews = [
  {
    id: 1,
    text: "Nyaman dipakai seharian, modelnya clean dan gampang masuk ke outfit kerja.",
    author: "Dinda",
    location: "Jakarta",
    product: "Luna Strap Sandals",
  },
  {
    id: 2,
    text: "Akhirnya nemu sendal yang beneran empuk. Solnya enak banget buat jalan jauh.",
    author: "Siska",
    location: "Bandung",
    product: "Aira Cloud Slides",
  },
  {
    id: 3,
    text: "Desainnya premium banget, kaya brand luar. Puas banget sama kualitas bahan dan jahitannya.",
    author: "Maya",
    location: "Surabaya",
    product: "Vela Soft Heels",
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("Rp", "Rp ");
};
