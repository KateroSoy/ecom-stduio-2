/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  MessageCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import { products, reviews, formatPrice, Product } from "./data";

// --- Shared Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: any) => {
  const baseStyle =
    "inline-flex items-center justify-center font-sans tracking-widest text-[10px] font-bold uppercase transition-colors duration-300";
  const variants = {
    primary:
      "bg-[var(--color-brand-ink-light)] text-white hover:bg-[var(--color-brand-accent)] py-3 px-8",
    secondary:
      "border border-black/20 text-[var(--color-brand-ink)] hover:bg-black/5 py-3 px-8",
    outline:
      "text-[var(--color-brand-ink)] border-b border-[var(--color-brand-ink)] hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] pb-1",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Home Components ---

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) return { hours: 5, minutes: 23, seconds: 59 }; // Loop for demo
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-[var(--color-brand-ink-light)] text-white text-[10px] tracking-[0.15em] uppercase font-bold py-2.5 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full z-50 relative">
      <span>Limited Time Offer: Free Shipping + Extra 10% OFF</span>
      <div className="flex items-center gap-1.5 font-sans font-medium tracking-normal text-xs">
        <span className="bg-white/20 px-1.5 py-0.5 rounded-sm min-w-[24px] text-center">{format(timeLeft.hours)}</span>
        <span className="text-white/50">:</span>
        <span className="bg-white/20 px-1.5 py-0.5 rounded-sm min-w-[24px] text-center">{format(timeLeft.minutes)}</span>
        <span className="text-white/50">:</span>
        <span className="bg-white/20 px-1.5 py-0.5 rounded-sm min-w-[24px] text-center">{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

const AnnouncementBar = () => (
  <div className="h-8 bg-[var(--color-brand-beige)] flex items-center justify-center text-[10px] tracking-[0.15em] uppercase font-medium border-b border-black/5 text-[var(--color-brand-ink)]">
    Gratis Ongkir untuk Wilayah Tertentu • Pembayaran via QRIS, E-Wallet & Transfer
  </div>
);

const Navbar = ({
  onOpenCart,
  cartCount,
  setView,
}: {
  onOpenCart: () => void;
  cartCount: number;
  setView: (v: string) => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/5 ${scrolled ? "bg-[var(--color-brand-bg-alt)]/90 backdrop-blur-md shadow-sm h-16" : "bg-[var(--color-brand-bg-alt)]/50 backdrop-blur-sm h-16"}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex justify-between items-center h-full">
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[var(--color-brand-ink)]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div
          className="text-xl font-bold tracking-tighter uppercase italic cursor-pointer"
          onClick={() => setView("home")}
        >
          Sorella Steps
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-ink)]">
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-accent)] transition-colors"
          >
            New Arrival
          </a>
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] transition-colors"
          >
            Best Seller
          </a>
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] transition-colors"
          >
            Sandals
          </a>
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] transition-colors"
          >
            Heels
          </a>
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] transition-colors text-[var(--color-brand-promo)]"
          >
            Sale
          </a>
          <a
            href="#"
            className="hover:text-[var(--color-brand-accent)] transition-colors"
          >
            Lookbook
          </a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-5 text-[var(--color-brand-ink)] items-center">
          <button className="hidden sm:block hover:text-[var(--color-brand-accent)] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-[var(--color-brand-accent)] transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button
            className="relative hover:text-[var(--color-brand-accent)] transition-colors"
            onClick={onOpenCart}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[var(--color-brand-accent)] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[var(--color-brand-bg)] flex flex-col p-6 h-screen overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-serif text-2xl font-bold tracking-tight">
                SORELLA<span className="italic font-normal">steps</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl font-serif text-[var(--color-brand-ink)]">
              {["New Arrival", "Best Seller", "Sandals", "Heels", "Flats"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="border-b border-[var(--color-brand-gray)]/20 pb-4 flex justify-between items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}{" "}
                    <ChevronRight
                      size={20}
                      className="text-[var(--color-brand-gray)]"
                    />
                  </a>
                ),
              )}
              <a
                href="#"
                className="border-b border-[var(--color-brand-gray)]/20 pb-4 flex justify-between items-center text-[var(--color-brand-promo)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sale <ChevronRight size={20} />
              </a>
            </nav>
            <div className="mt-auto pt-10">
              <Button variant="outline" className="w-full justify-center mb-4">
                Login / Register
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="h-[auto] md:h-[500px] flex flex-col md:flex-row border-b border-black/5">
    <div className="w-full md:w-1/2 relative bg-[#E2DED5] flex items-center justify-center overflow-hidden aspect-square md:aspect-auto">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200')",
        }}
      ></div>
      <div className="z-10 text-white text-center flex flex-col items-center justify-center p-8 absolute inset-0 bg-black/20 md:bg-transparent">
        <span className="block text-[10px] tracking-[0.3em] uppercase mb-2">
          Volume 01: Soft Neutral
        </span>
        <h2 className="text-3xl md:text-4xl font-light italic font-serif opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-forwards">
          Daily Elegance
        </h2>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-[var(--color-brand-bg)] flex flex-col justify-center px-8 py-12 md:px-16 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-4 text-[var(--color-brand-ink-light)] opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
        Langkah Lembut,<br />
        Tampilan Lebih Percaya Diri
      </h1>
      <p className="text-sm text-[var(--color-brand-gray)] mb-8 md:max-w-sm leading-relaxed mx-auto md:mx-0 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-forwards">
        Sendal wanita premium yang dirancang untuk kenyamanan maksimal dalam
        setiap langkah harianmu.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-forwards">
        <Button>Belanja Sekarang</Button>
        <Button variant="secondary">Lihat Koleksi</Button>
      </div>
    </div>
  </section>
);

const CampaignTiles = ({
  onQuickView,
}: {
  onQuickView: (p: Product) => void;
}) => {
  const tiles = [
    {
      title: "Dari Kantor ke Akhir Pekan",
      desc: "Siluet bersih untuk segala kesempatan.",
      product: products[0],
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
      layout: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Ringan & Effortless",
      desc: "Material halus dan sol empuk.",
      product: products[1],
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
      layout: "aspect-[3/4] md:aspect-square",
    },
  ];

  return (
    <section className="py-12 max-w-[1440px] mx-auto px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map((tile, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group cursor-pointer bg-white relative overflow-hidden flex flex-col ${tile.layout}`}
            onClick={() => onQuickView(tile.product)}
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${tile.img}')`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white flex flex-col items-start z-10 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
              <h3 className="font-serif text-2xl md:text-3xl font-light italic mb-2">
                {tile.title}
              </h3>
              <p className="text-[11px] uppercase tracking-widest font-medium mb-6 opacity-90">
                {tile.desc} <br />
                Menampilkan: {tile.product.name}
              </p>
              <button
                className="text-[10px] font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:text-[var(--color-brand-beige)] group-hover:border-[var(--color-brand-beige)] transition-colors"
                onClick={(e) => { e.stopPropagation(); onQuickView(tile.product); }}
              >
                Lihat Koleksi
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  onClick,
}: {
  key?: string | number;
  product: Product;
  onClick: () => void;
}) => (
  <div className="group cursor-pointer flex flex-col" onClick={onClick}>
    <div className="relative w-full aspect-[4/5] bg-white overflow-hidden mb-3">
      {/* Badges */}
      {product.badges.length > 0 && (
          <div
            className={`absolute top-2 left-2 ${product.badges.includes("OFF") || product.badges.includes("New") ? "bg-[var(--color-brand-accent)]" : "bg-[var(--color-brand-ink-light)]"} text-white text-[8px] font-bold px-2 py-1 uppercase tracking-tighter z-20`}
          >
            {product.badges[0]}
          </div>
      )}
      {/* Images */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform group-hover:scale-105 z-0" style={{backgroundImage: `url('${product.image}')`}}></div>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity z-10" style={{backgroundImage: `url('${product.hoverImage}')`}}></div>

      {/* Quick Add Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform text-center text-[9px] font-bold uppercase z-20 flex items-center justify-center hover:bg-[var(--color-brand-ink-light)] hover:text-white">
        Quick Add
      </div>
    </div>

    <div className="flex flex-col flex-grow text-left mt-1">
      <h4 className="text-[11px] font-medium text-[var(--color-brand-ink-light)] mb-1">{product.name}</h4>
      {/* Colors */}
      <div className="flex gap-1 my-1">
        {product.colors.map((c, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full border border-black/10"
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>
      <div className="flex gap-2 items-center mt-1">
        <span className="text-[12px] font-bold">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-[10px] text-[var(--color-brand-gray)] line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProductSection = ({
  onSelectProduct,
}: {
  onSelectProduct: (p: Product) => void;
}) => {
  return (
    <section className="py-12 max-w-[1440px] mx-auto px-4 md:px-10">
      <div className="flex items-end justify-between mt-8 mb-6">
        <div>
          <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-[var(--color-brand-accent)]">
            Koleksi Terbaru
          </h3>
          <p className="text-[11px] text-[var(--color-brand-gray)] mt-1">
            Desain minimalis untuk gaya modern.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#111111] opacity-60">
            <button className="hover:opacity-100 flex items-center gap-1 transition-opacity">Filter <ChevronDown size={12}/></button>
            <button className="hover:opacity-100 flex items-center gap-1 transition-opacity">Urutkan <ChevronDown size={12}/></button>
          </div>
          <a href="#" className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest border-b border-black pb-0.5 hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] transition-colors">
            Lihat Semua
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onSelectProduct(product)}
          />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Button variant="outline">Lihat Semua</Button>
      </div>
    </section>
  );
};

const TrustSection = () => (
  <div className="bg-white py-6 px-4 md:px-10 mt-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-[#6F6A61] tracking-wider uppercase font-medium max-w-[1440px] mx-auto border-t border-black/5 pt-6">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4" />
        <span>Secure Manual Payment</span>
      </div>
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4" />
        <span>Konfirmasi WhatsApp Admin</span>
      </div>
      <div className="flex items-center gap-2 text-green-700">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        <span>Terverifikasi oleh Sorella</span>
      </div>
    </div>
  </div>
);

const Lookbook = () => (
  <section className="py-16 md:py-24 bg-white border-y border-black/5">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-brand-accent)] mb-3">
          Cara Memakai
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light italic">
          Elegansi Harian
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#FAF7F1]">
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? "1603487742131-4160ec999306" : i === 2 ? "1543163521-1bf539c55dd2" : "1549298916-b41d501d3772"}?auto=format&fit=crop&q=80&w=600`}
                alt="Lookbook"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <h3 className="font-serif text-xl italic mb-1">{i===1 ? 'City Stroll' : i===2 ? 'Weekend Coffee' : 'Resort Escape'}</h3>
            <p className="text-[var(--color-brand-gray)] text-[11px] mb-3">
              Paduan desain minimal dengan warna natural.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-[var(--color-brand-ink-light)] pb-0.5 group-hover:text-[var(--color-brand-accent)] group-hover:border-[var(--color-brand-accent)] transition-colors">
              Shop The Look
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 text-center mb-12 flex flex-col items-center">
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-brand-accent)] mb-3">
        Testimoni
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-light italic mb-6">
        Cerita Mereka
      </h2>
    </div>

    <div className="flex overflow-x-auto hide-scrollbar gap-6 px-4 md:px-10 snap-x relative max-w-[1440px] mx-auto pb-8">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="min-w-[280px] md:min-w-[350px] bg-[var(--color-brand-bg)] p-8 snap-center shrink-0 border border-black/5"
        >
          <div className="flex text-[var(--color-brand-ink-light)] mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <p className="font-serif text-lg leading-relaxed mb-8 italic text-[#1C1C1C]">
            "{review.text}"
          </p>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-[var(--color-brand-ink)]">
              {review.author}, {review.location}
            </span>
            <span className="font-sans text-[10px] text-[var(--color-brand-gray)] mt-1 uppercase tracking-widest">
              {review.product}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-12 pb-12">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="text-xl font-bold tracking-tighter uppercase italic mb-6">
          Sorella Steps
        </div>
        <p className="font-sans text-[11px] text-[var(--color-brand-gray)] leading-relaxed mb-6 max-w-[250px]">
          Premium footwear designed in Indonesia. Menemani langkah wanita modern
          dengan elegan dan percaya diri.
        </p>
      </div>
      <div>
        <h4 className="font-sans uppercase text-[10px] tracking-widest font-bold mb-6 text-[var(--color-brand-ink)]">
          Berbelanja
        </h4>
        <ul className="space-y-4 font-sans text-[11px] font-medium text-[var(--color-brand-gray)]">
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Semua Koleksi
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Panduan Ukuran
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Konfirmasi Pembayaran
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Lacak Pesanan
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-sans uppercase text-[10px] tracking-widest font-bold mb-6 text-[var(--color-brand-ink)]">
          Bantuan
        </h4>
        <ul className="space-y-4 font-sans text-[11px] font-medium text-[var(--color-brand-gray)]">
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Hubungi Kami (WhatsApp)
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Kebijakan Pengembalian
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--color-brand-ink)]">
              Syarat & Ketentuan
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-sans uppercase text-[10px] tracking-widest font-bold mb-6 text-[var(--color-brand-ink)]">
          Newsletter
        </h4>
        <p className="font-sans text-[11px] font-medium text-[var(--color-brand-gray)] mb-4">
          Dapatkan info koleksi rilis terbaru.
        </p>
        <div className="flex border-b border-black/20 pb-2">
          <input
            type="email"
            placeholder="Email Anda"
            className="bg-transparent font-sans text-[11px] outline-none flex-grow"
          />
          <button className="text-[var(--color-brand-ink)] font-sans uppercase text-[10px] font-bold tracking-widest">
            Daftar
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-[var(--color-brand-gray)]">
      <p>&copy; 2026 Sorella Steps.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-[var(--color-brand-ink)]">
          Instagram
        </a>
        <a href="#" className="hover:text-[var(--color-brand-ink)]">
          TikTok
        </a>
      </div>
    </div>
  </footer>
);

// --- Product Detail Page ---

const PDP = ({
  product,
  onBack,
  onAddToCart,
}: {
  product: Product;
  onBack: () => void;
  onAddToCart: (p: Product, s: string) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState("38");
  const sizes = ["36", "37", "38", "39", "40"];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-12 animate-in fade-in duration-500">
      <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-black/40 mb-8">
        <button
          onClick={onBack}
          className="hover:text-[var(--color-brand-ink)] flex items-center transition-colors"
        >
          Kembali
        </button>
        <span className="mx-2">/</span>
        <span>Koleksi</span>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-brand-ink)]">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Gallery */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-[#F1EFEB] aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt={product.name}
            />
          </div>
          <div className="bg-[#F1EFEB] aspect-square overflow-hidden">
            <img
              src={product.hoverImage}
              className="w-full h-full object-cover"
              alt={`${product.name} detail`}
            />
          </div>
          <div className="bg-[#F1EFEB] aspect-square overflow-hidden bg-[var(--color-brand-bg-alt)] flex items-center justify-center p-8">
            <p className="font-serif text-center italic text-xl">
              "Didesain dari material kulit sintetis premium yang mudah
              dibersihkan."
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-[400px] flex flex-col sticky top-24 h-max">
          <div className="mb-8">
            {product.badges.map((b) => (
              <span
                key={b}
                className={`inline-block text-white text-[10px] uppercase font-sans tracking-widest px-2 py-1 mb-4 mr-2 ${b.includes("OFF") || b === "Limited Drop" ? "bg-[var(--color-brand-promo)]" : "bg-[var(--color-brand-ink-light)]"}`}
              >
                {b}
              </span>
            ))}
            <h1 className="font-serif text-3xl md:text-5xl font-light italic mb-4">
              {product.name}
            </h1>
            <div className="flex gap-3 items-center font-sans">
              <span className="text-xl">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[var(--color-brand-gray)] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex text-yellow-500 mt-4 items-center gap-2">
              <div className="flex text-[var(--color-brand-ink-light)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-gray)] border-b border-[var(--color-brand-gray)] pb-0.5 cursor-pointer hover:text-black">
                18 Ulasan
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-[var(--color-brand-gray)] leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest">Ukuran (EU)</span>
              <button className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-gray)] border-b border-[var(--color-brand-gray)] pb-0.5 hover:text-black hover:border-black transition-colors">
                Panduan Ukuran
              </button>
            </div>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center font-sans text-sm transition-colors border
                    ${
                      selectedSize === size
                        ? "border-[var(--color-brand-ink-light)] border-2 font-medium"
                        : "border-black/10 text-[var(--color-brand-gray)] hover:border-black/30"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest block mb-4">
              Warna: {product.color}
            </span>
            <div className="flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 ${i === 0 ? "border-[var(--color-brand-ink-light)]" : "border-transparent"} ring-1 ring-black/10`}
                  style={{ backgroundColor: c }}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              onClick={() => onAddToCart(product, selectedSize)}
              className="w-full"
            >
              Tambah ke Keranjang
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-[#25D366]/10 text-[#25D366] border-none hover:bg-[#25D366]/20 hover:text-[#25D366] flex items-center gap-2"
            >
              <MessageCircle size={16} /> Beli Instan via WhatsApp
            </Button>
          </div>

          <div className="mt-12 border-t border-black/5 pt-8 space-y-6">
            <details className="group cursor-pointer">
              <summary className="font-sans text-[10px] uppercase font-bold tracking-widest flex justify-between items-center list-none outline-none">
                Detail Material{" "}
                <ChevronDown
                  size={16}
                  className="group-open:rotate-180 transition-transform"
                />
              </summary>
              <div className="mt-4 font-sans text-[11px] text-[var(--color-brand-gray)] leading-relaxed text-justify">
                Upper: Premium Faux Leather (halus & lentur)
                <br />
                Insole: Double sponge padded (sangat empuk)
                <br />
                Outsole: Non-slip rubber
              </div>
            </details>
            <details className="group cursor-pointer">
              <summary className="font-sans text-[10px] uppercase font-bold tracking-widest flex justify-between items-center list-none outline-none">
                Pengiriman & Pengembalian{" "}
                <ChevronDown
                  size={16}
                  className="group-open:rotate-180 transition-transform"
                />
              </summary>
              <div className="mt-4 font-sans text-[11px] text-[var(--color-brand-gray)] leading-relaxed text-justify">
                Pengiriman dilakukan selambatnya H+1 pembayaran. Kami menerima
                garansi tukar size maksimal 3 hari setelah barang diterima,
                dengan syarat kondisi belum pernah dipakai keluar.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Checkout / Cart Drawer ---

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onRemove,
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any[];
  onRemove: (id: string) => void;
}) => {
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    setStep("checkout");
  };

  const handleManualPaymentSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 1500);
  };

  // Reset step when closed
  useEffect(() => {
    if (!isOpen) setTimeout(() => setStep("cart"), 300);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[var(--color-brand-bg)] shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-[var(--color-brand-gray)]/10 flex justify-between items-center bg-white">
              <h2 className="font-serif text-2xl font-medium">
                {step === "cart"
                  ? "Keranjang Anda"
                  : step === "checkout"
                    ? "Pembayaran Manual"
                    : "Pesanan Sukses"}
              </h2>
              {step !== "success" && (
                <button onClick={onClose}>
                  <X size={24} className="text-[var(--color-brand-ink)]" />
                </button>
              )}
            </div>

            <div className="flex-grow overflow-y-auto p-6 flex flex-col">
              {step === "cart" && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-[var(--color-brand-gray)]">
                      <ShoppingBag
                        size={48}
                        strokeWidth={1}
                        className="mb-4 opacity-50"
                      />
                      <p className="font-sans text-sm">
                        Keranjang belanja Anda kosong.
                      </p>
                      <Button onClick={onClose} className="mt-8">
                        Mulai Belanja
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {cartItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 border-b border-[var(--color-brand-gray)]/10 pb-6"
                        >
                          <img
                            src={item.product.image}
                            className="w-20 h-24 object-cover font-sans"
                            alt={item.product.name}
                          />
                          <div className="flex flex-col justify-between flex-grow">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="font-sans font-medium text-sm">
                                  {item.product.name}
                                </h4>
                                <button
                                  onClick={() => onRemove(item.id)}
                                  className="text-[var(--color-brand-gray)] hover:text-red-500"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                              <p className="font-sans text-xs text-[var(--color-brand-gray)] mt-1">
                                Warna: {item.product.color} | Ukuran:{" "}
                                {item.size}
                              </p>
                            </div>
                            <div className="flex justify-between items-end">
                              <span className="font-sans text-sm text-[var(--color-brand-gray)]">
                                Qty: 1
                              </span>
                              <span className="font-sans font-medium text-sm">
                                {formatPrice(item.product.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {step === "checkout" && (
                <div className="flex flex-col gap-8 flex-grow animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-[#FAF7F1] p-4 rounded-sm border border-[var(--color-brand-accent)]/20">
                    <p className="font-sans text-xs text-[var(--color-brand-accent)] font-medium mb-1">
                      Total Pembayaran
                    </p>
                    <p className="font-sans text-2xl font-bold">
                      {formatPrice(subtotal)}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg mb-4">
                      Pilih Rekening Tujuan
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border border-[var(--color-brand-ink)] cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          defaultChecked
                          className="accent-[var(--color-brand-ink)]"
                        />
                        <div className="flex flex-col">
                          <span className="font-sans font-medium text-sm text-black">
                            BCA - 1234567890
                          </span>
                          <span className="font-sans text-xs text-gray-500">
                            A.n. PT Sorella Indonesia
                          </span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-[var(--color-brand-gray)]/20 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          className="accent-[var(--color-brand-ink)]"
                        />
                        <div className="flex flex-col">
                          <span className="font-sans font-medium text-sm">
                            Mandiri - 0987654321
                          </span>
                          <span className="font-sans text-xs text-gray-500">
                            A.n. PT Sorella Indonesia
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg mb-4">
                      Informasi Pengiriman
                    </h4>
                    <div className="space-y-3 font-sans">
                      <input
                        className="w-full border-b border-[var(--color-brand-gray)]/30 p-2 text-sm bg-transparent outline-none focus:border-[var(--color-brand-ink)]"
                        placeholder="Nama Lengkap"
                      />
                      <input
                        className="w-full border-b border-[var(--color-brand-gray)]/30 p-2 text-sm bg-transparent outline-none focus:border-[var(--color-brand-ink)]"
                        placeholder="Nomor WhatsApp"
                      />
                      <textarea
                        className="w-full border-b border-[var(--color-brand-gray)]/30 p-2 text-sm bg-transparent outline-none focus:border-[var(--color-brand-ink)]"
                        placeholder="Alamat Pengiriman"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === "success" && (
                <div className="flex-grow flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="text-green-600 w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    Pesanan Diterima!
                  </h3>
                  <p className="font-sans text-sm text-[var(--color-brand-gray)] mb-8 max-w-[250px]">
                    Silakan lakukan pembayaran sebesar{" "}
                    <strong>{formatPrice(subtotal)}</strong> dan kirim bukti
                    transfer melalui WhatsApp kami.
                  </p>
                  <Button className="w-full mb-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] border-none text-white font-bold">
                    <MessageCircle size={18} /> Konfirmasi di WhatsApp
                  </Button>
                  <button
                    onClick={onClose}
                    className="font-sans text-xs uppercase tracking-widest underline text-[var(--color-brand-gray)]"
                  >
                    Tutup
                  </button>
                </div>
              )}
            </div>

            {step === "cart" && cartItems.length > 0 && (
              <div className="p-6 border-t border-[var(--color-brand-gray)]/10 bg-white">
                <div className="flex justify-between items-center mb-6 font-sans">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-lg font-medium">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Lanjut ke Checkout
                </Button>
              </div>
            )}

            {step === "checkout" && (
              <div className="p-6 border-t border-[var(--color-brand-gray)]/10 bg-white">
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleManualPaymentSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Memproses..." : "Buat Pesanan"}
                </Button>
                <button
                  onClick={() => setStep("cart")}
                  className="w-full text-center mt-4 font-sans text-[11px] uppercase tracking-widest text-[var(--color-brand-gray)] hover:text-[var(--color-brand-ink)]"
                >
                  Kembali ke Keranjang
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<"home" | "product">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setView("product");
  };

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => [
      ...prev,
      { id: Date.now().toString(), product, size, quantity: 1 },
    ]);
    setCartOpen(true);
  };

  const currentCount = cartItems.length;

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-ink)] font-sans antialiased selection:bg-[var(--color-brand-accent)] selection:text-white">
      <PromoBanner />
      <AnnouncementBar />
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        cartCount={currentCount}
        setView={(v) => {
          if (v === "home") setView("home");
        }}
      />

      {view === "home" && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <CampaignTiles onQuickView={handleProductSelect} />
          <ProductSection onSelectProduct={handleProductSelect} />
          <Lookbook />

          <section className="py-24 bg-[#111111] text-white text-center px-4">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-70">Limited Drop Vol. 04</h3>
               <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-6">Soft Neutral Series</h2>
               <p className="font-sans text-[11px] uppercase tracking-widest leading-relaxed max-w-md mx-auto mb-10 opacity-70">Warna netral klasik yang dirilis dalam jumlah terbatas. Jangan sampai terlewat.</p>
               <button className="inline-flex items-center justify-center font-sans tracking-widest text-[10px] font-bold uppercase transition-colors duration-300 bg-white text-black hover:bg-[var(--color-brand-accent)] hover:text-white border-none py-3 px-8">Jelajahi Seri Ini</button>
             </motion.div>
          </section>

          <Reviews />
          <TrustSection />
        </motion.main>
      )}

      {view === "product" && selectedProduct && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PDP
            product={selectedProduct}
            onBack={() => setView("home")}
            onAddToCart={handleAddToCart}
          />
        </motion.div>
      )}

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}
