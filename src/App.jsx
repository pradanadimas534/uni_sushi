import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown, Star } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const rupiah = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

// Nyalakan mode maintenance dengan set ke true.
const MAINTENANCE_MODE = false;

function Maintenance({ content, wa }) {
  return (
    <div className="min-h-screen bg-ink text-paper flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-seigaiha" style={{ backgroundSize: '56px 28px' }} />
      <div className="relative text-center max-w-lg 2xl:max-w-2xl w-full mx-auto">
        <img src={imgSrc(content.logo)} alt={content.brand || 'Uni Sushi'} className="w-20 h-20 2xl:w-28 2xl:h-28 rounded-full mx-auto mb-8 object-cover ring-1 ring-gold/40" />
        <div className="eyebrow justify-center flex mb-4 2xl:text-base">Sedang Dalam Perbaikan</div>
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold mb-5 leading-tight">
          {content.brand || 'Uni Sushi'} <span className="text-gold">sedang berbenah</span>
        </h1>
        <p className="text-paper/60 leading-relaxed mb-10 text-sm md:text-base 2xl:text-lg">
          Kami sedang menata ulang halaman ini agar lebih baik. Silakan
          kembali beberapa saat lagi, atau hubungi kami langsung lewat
          kontak di bawah.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={wa} className="btn-coral 2xl:px-8 2xl:py-4 2xl:text-base">Hubungi via WhatsApp</a>
          {content.email && (
            <a href={`mailto:${content.email}`} className="inline-flex items-center justify-center rounded-full px-6 py-3 2xl:px-8 2xl:py-4 text-sm 2xl:text-base font-semibold border border-paper/25 text-paper hover:border-gold/60 hover:text-gold transition-colors">
              {content.email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function imgSrc(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path) || path.startsWith('/')) return path;
  return '/uploads/' + path;
}

function emojiFor(name) {
  const s = (name || '').toLowerCase();
  if (/nigiri|sushi|uni /.test(s)) return '🍣';
  if (/sashimi|salmon|tuna|fish/.test(s)) return '🐟';
  if (/ramen|udon|noodle/.test(s)) return '🍜';
  if (/burger/.test(s)) return '🍔';
  if (/pizza/.test(s)) return '🍕';
  if (/pasta|spaghetti|carbonara|bulgogi/.test(s)) return '🍝';
  if (/coffee|espresso|latte|cappuccino|mocha|macchiato/.test(s)) return '☕';
  if (/cocktail|mojito|margarita|colada|beer|wine|cider/.test(s)) return '🍹';
  if (/salad|gado/.test(s)) return '🥗';
  if (/soup|soto|tom yum/.test(s)) return '🍲';
  if (/pancake|toast|egg|brekky|breakfast/.test(s)) return '🍳';
  if (/cake|dessert|sweet/.test(s)) return '🍰';
  if (/don|rice|curry|katsu|nasi/.test(s)) return '🍚';
  if (/gyoza|dumpling/.test(s)) return '🥟';
  if (/tea|matcha/.test(s)) return '🍵';
  if (/mochi|ice cream/.test(s)) return '🍡';
  if (/edamame|tofu/.test(s)) return '🫛';
  if (/sandwich|wrap|club/.test(s)) return '🥪';
  return '🍽️';
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function handleHashScroll(e, to) {
  if (to.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, `/${to}`);
    }
  }
}

function ElfsightReviews() {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-88a07733-6995-46aa-872b-7ad4c9c0659b w-full overflow-hidden"
      data-elfsight-app-lazy
    />
  );
}

function TopNav({ scrolled, content, wa, mobileOpen, setMobileOpen, showMenuLink = true }) {
  const primaryLinks = [
    { label: 'Home', to: '#top' },
    { label: 'Our Story', to: '#about' },
    { label: 'Menu', to: '/menu' },
    { label: 'Reviews', to: '#reviews' },
    { label: 'Visit', to: '#visit' },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur shadow-lg py-3 2xl:py-5' : 'bg-gradient-to-b from-black/60 to-transparent py-5 2xl:py-8'}`}>
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl 2xl:text-3xl font-semibold flex items-center gap-3 text-paper shrink-0">
            <img src={imgSrc(content.logo)} alt={content.brand} className="w-9 h-9 2xl:w-12 2xl:h-12 rounded-full object-cover shrink-0" />
            <span>{content.brand}</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 2xl:gap-12">
            {primaryLinks.filter((link) => showMenuLink || link.label !== 'Menu').map((link) => (
              link.to.startsWith('#') ? (
                <a key={link.to} href={link.to} onClick={(e) => handleHashScroll(e, link.to)} className="text-sm 2xl:text-lg font-medium text-paper/75 hover:text-gold transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="text-sm 2xl:text-lg font-medium text-paper/75 hover:text-gold transition-colors">{link.label}</Link>
              )
            ))}
            <a href={wa} className="inline-flex items-center justify-center rounded-full px-5 py-2.5 2xl:px-8 2xl:py-3.5 text-xs 2xl:text-base font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors shrink-0">Reserve</a>
          </div>
          <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="md:hidden p-2 text-paper focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-ink text-paper flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button aria-label="Close" onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-3xl font-light">×</button>
        {primaryLinks.filter((link) => showMenuLink || link.label !== 'Menu').map((link) => (
          link.to.startsWith('#') ? (
            <a key={link.to} href={link.to} onClick={(e) => { setMobileOpen(false); handleHashScroll(e, link.to); }} className="text-[clamp(1.25rem,4vw,2rem)] font-serif">
              {link.label}
            </a>
          ) : (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="text-[clamp(1.25rem,4vw,2rem)] font-serif">{link.label}</Link>
          )
        ))}
        <a href={wa} onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[clamp(0.85rem,1.1vw,1.125rem)] font-semibold bg-gold text-ink mt-4">Reserve →</a>
      </div>
    </>
  );
}

function PageFooter({ content, wa }) {
  return (
    <footer className="bg-black/40 border-t border-paper/10 pt-16 pb-8 2xl:pt-24 2xl:pb-12">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 2xl:gap-16 mb-12">
          <div>
            <div className="font-serif text-xl 2xl:text-2xl font-semibold flex items-center gap-3 mb-3">
              <img src={imgSrc(content.logo)} alt={content.brand} className="w-8 h-8 2xl:w-11 2xl:h-11 rounded-full object-cover shrink-0" />
              <span>{content.brand}</span>
            </div>
            <p className="text-paper/55 text-sm 2xl:text-base max-w-xs 2xl:max-w-md leading-relaxed">{content.heroLede}</p>
          </div>
          <div>
            <h4 className="text-xs 2xl:text-sm uppercase tracking-wide text-gold font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2 2xl:gap-3">
              <Link to="/" className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Home</Link>
              <Link to="/menu" className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Menu</Link>
              <a href="#katalog" onClick={(e) => handleHashScroll(e, '#katalog')} className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Catalog</a>
              <a href="#reviews" onClick={(e) => handleHashScroll(e, '#reviews')} className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Reviews</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs 2xl:text-sm uppercase tracking-wide text-gold font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2 2xl:gap-3">
              <a href={wa} className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">WhatsApp</a>
              <a href={`https://instagram.com/${content.instagram || ''}`} className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Instagram</a>
              <a href={`mailto:${content.email || ''}`} className="text-paper/65 text-sm 2xl:text-base hover:text-gold transition-colors">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/10 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs 2xl:text-sm text-paper/45">
          <span>© {new Date().getFullYear()} {content.brand} · Kuta, Bali</span>
          <a href="/admin/" className="hover:text-gold transition-colors">Admin Login →</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ content, items, katalog, data, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();

  const heroImg = content.heroImage;

  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <TopNav scrolled={scrolled} content={content} wa={wa} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <span id="top" />

      {/* HERO SECTION DENGAN BATAS TINGGI MAX PADA ULTRA-WIDE */}
      <header className="relative min-h-screen max-h-[1200px] 2xl:max-h-[1400px] flex items-center justify-center text-center overflow-hidden px-4">
        {heroImg ? (
          <img src={imgSrc(heroImg)} alt={content.brand} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c2f22] via-ink to-[#0e1712]" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-[0.08] bg-seigaiha" style={{ backgroundSize: '56px 28px' }} />

        <div className="relative max-w-3xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto pt-24 pb-32 2xl:pt-36 2xl:pb-40 flex flex-col items-center">
          <div className="eyebrow justify-center flex mb-4 2xl:text-base">{content.heroEyebrow}</div>

          <img
            src={imgSrc(content.logo)}
            alt={`${content.brand} Logo`}
            className="w-24 sm:w-28 md:w-32 2xl:w-44 3xl:w-52 aspect-square rounded-full object-cover border-4 border-white/20 shadow-2xl mb-4 shrink-0"
          />

          <div className="flex flex-col items-center my-2 select-none w-full">
            <span
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[9rem] 3xl:text-[11rem] text-[#FF5722] leading-none drop-shadow-md -mb-2 md:-mb-3 2xl:-mb-6 z-10"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
            >
              Uni
            </span>

            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[6.5rem] 3xl:text-[8rem] text-white uppercase tracking-wider leading-none drop-shadow-xl"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              SUSHI
            </span>

            <div className="flex items-center justify-center gap-3 mt-4 2xl:mt-8 text-paper/70 w-full">
              <span className="w-8 sm:w-12 2xl:w-24 h-[1px] bg-paper/30"></span>
              <span className="text-[10px] sm:text-xs md:text-sm 2xl:text-base 3xl:text-lg uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-paper/90 text-center">
                WE SERVE THE BEST
              </span>
              <span className="w-8 sm:w-12 2xl:w-24 h-[1px] bg-paper/30"></span>
            </div>
          </div>

          <p className="text-paper/75 text-sm md:text-base 2xl:text-xl 3xl:text-2xl leading-relaxed mt-6 mb-8 2xl:mt-10 2xl:mb-12 max-w-xl 2xl:max-w-3xl mx-auto px-2">
            {content.heroLede}
          </p>

          <div className="flex flex-wrap gap-4 2xl:gap-6 justify-center">
            <Link to="/menu" className="inline-flex items-center justify-center rounded-full px-7 py-3.5 2xl:px-10 2xl:py-5 2xl:text-lg font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors shadow-lg">
              Explore Menu
            </Link>
            <a href={wa} className="inline-flex items-center justify-center rounded-full px-7 py-3.5 2xl:px-10 2xl:py-5 2xl:text-lg font-semibold border border-paper/40 text-paper hover:bg-paper hover:text-ink transition-colors">
              Reserve via WhatsApp
            </a>
          </div>
        </div>
        <a href="#about" onClick={(e) => handleHashScroll(e, '#about')} aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/60 hover:text-gold transition-colors animate-bounce">
          <ChevronDown size={26} className="2xl:w-10 2xl:h-10" />
        </a>
      </header>

      <div className="wave-divider bg-black/25" />

      {/* ABOUT SECTION */}
      <section className="py-20 md:py-28 2xl:py-36" id="about">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 2xl:gap-24 items-center">
            <div className="reveal order-2 lg:order-1 flex justify-center">
              <div className="relative max-w-md lg:max-w-full w-full">
                <img
                  src={content?.aboutImage}
                  alt="About Us"
                  className="w-full h-auto aspect-[4/3] sm:aspect-video lg:aspect-square object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <div className="eyebrow mb-3 text-gold 2xl:text-base">
                {content?.aboutEyebrow}
              </div>
              <p className="text-paper/65 leading-relaxed whitespace-pre-line text-sm md:text-base 2xl:text-xl">
                {content?.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider bg-black/25" />

      {/* FEATURED MENU SLIDER */}
      <section className="py-20 md:py-28 2xl:py-36 bg-black/40 overflow-hidden" id="menu-highlight">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-xl 2xl:max-w-3xl mx-auto mb-4">
            <div className="eyebrow justify-center flex mb-3 text-gold 2xl:text-base">Our Selection</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-white">
              Featured <span className="text-gold">Menu</span>
            </h2>
          </div>
          <p className="reveal text-center text-paper/55 text-sm 2xl:text-lg max-w-lg 2xl:max-w-2xl mx-auto mb-12 2xl:mb-16">
            Explore our signature dishes crafted with fresh ingredients and authentic flavors.
          </p>

          {(() => {
            const rawList = Array.isArray(items) ? items : [];

            const featuredMenu = rawList.filter((it) =>
              it.isFeatured ||
              it.is_featured ||
              it.isPopular ||
              it.is_popular ||
              /best seller|terlaris|favorite/i.test(it.badge || it.tag || '')
            );

            if (featuredMenu.length === 0) {
              return <p className="text-center text-paper/45 2xl:text-lg">Belum ada menu populer / best seller saat ini.</p>;
            }

            return (
              <div className="flex flex-col items-center gap-10 2xl:gap-14">
                <div className="w-full relative px-1">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={featuredMenu.length > 3}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 28 },
                      1536: { slidesPerView: 4, spaceBetween: 32 },
                    }}
                    className="pb-14 2xl:pb-20"
                  >
                    {featuredMenu.map((it, index) => {
                      const itemWa = typeof wa !== 'undefined'
                        ? wa
                        : `https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(it.name || 'Menu')}`;

                      return (
                        <SwiperSlide key={it.id || index} className="h-auto">
                          <div className="group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden bg-paper/[0.03] border border-paper/10 hover:border-gold/50 transition-all duration-300 shadow-xl">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-black/40">
                              {it.image || it.img ? (
                                <img
                                  src={typeof imgSrc === 'function' ? imgSrc(it.image || it.img) : (it.image || it.img)}
                                  alt={it.name || 'Menu Item'}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-paper/30">
                                  <span className="text-4xl 2xl:text-6xl mb-2">
                                    {typeof emojiFor === 'function' ? emojiFor(it.name) : '🍽️'}
                                  </span>
                                  <span className="text-xs 2xl:text-sm">Gambar Tidak Tersedia</span>
                                </div>
                              )}

                              <span className="absolute top-3 right-3 bg-gold text-ink text-[10px] 2xl:text-xs font-bold px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full shadow-lg border border-paper/20 uppercase tracking-wider">
                                ★ Best Seller
                              </span>

                              {it.category && (
                                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-gold text-[10px] 2xl:text-xs font-semibold px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full border border-gold/20">
                                  {it.category}
                                </span>
                              )}
                            </div>

                            <div className="p-5 2xl:p-7 flex-1 flex flex-col justify-between bg-black/30">
                              <div>
                                <div className="flex justify-between items-start gap-2 mb-2">
                                  <h3 className="font-semibold text-base 2xl:text-xl text-white group-hover:text-gold transition-colors line-clamp-1">
                                    {it.name || 'Nama Menu'}
                                  </h3>
                                  {it.price && (
                                    <span className="text-gold font-bold text-sm 2xl:text-lg whitespace-nowrap">
                                      {typeof it.price === 'number' ? `Rp ${it.price.toLocaleString('id-ID')}` : it.price}
                                    </span>
                                  )}
                                </div>
                                {it.description && (
                                  <p className="text-paper/60 text-xs 2xl:text-sm line-clamp-2 mb-4">
                                    {it.description}
                                  </p>
                                )}
                              </div>

                              <a
                                href={itemWa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 2xl:py-3.5 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-ink border border-gold/30 font-semibold text-xs 2xl:text-sm transition-all text-center block mt-2"
                              >
                                Pesan via WhatsApp
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3.5 2xl:px-12 2xl:py-4.5 text-sm 2xl:text-base font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors shadow-lg"
                >
                  See Full Menu
                </Link>
              </div>
            );
          })()}
        </div>
      </section>

      <div className="wave-divider bg-black/25" />

      {/* REVIEWS SECTION */}
      <section className="py-20 md:py-28 2xl:py-36 bg-black/25 overflow-hidden" id="reviews">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-xl 2xl:max-w-3xl mx-auto mb-10">
            <div className="eyebrow justify-center flex mb-3 text-gold 2xl:text-base">
              Google Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-paper">
              What Our <span className="text-gold">Customers Say</span>
            </h2>
          </div>
          <div className="min-h-[280px] flex items-center justify-center">
            <ElfsightReviews />
          </div>
        </div>
      </section>

      {/* VISIT US SECTION */}
      <section className="py-20 md:py-28 2xl:py-36" id="visit">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-xl 2xl:max-w-3xl mx-auto mb-12">
            <div className="eyebrow justify-center flex mb-3 2xl:text-base">Come Say Hi</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold">Visit <span className="text-gold">Us</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-16 items-start">
            <div className="reveal space-y-6 2xl:space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0 text-gold mt-1"><MapPin size={18} className="2xl:w-6 2xl:h-6" /></div>
                <div>
                  <div className="font-serif font-semibold mb-1 2xl:text-xl">Location</div>
                  <div className="text-sm 2xl:text-base text-paper/60">{content.address}</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0 text-gold mt-1"><Phone size={18} className="2xl:w-6 2xl:h-6" /></div>
                <div>
                  <div className="font-serif font-semibold mb-1 2xl:text-xl">Phone</div>
                  <div className="text-sm 2xl:text-base text-paper/60">{content.phone}</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0 text-gold mt-1"><Mail size={18} className="2xl:w-6 2xl:h-6" /></div>
                <div>
                  <div className="font-serif font-semibold mb-1 2xl:text-xl">Email</div>
                  <div className="text-sm 2xl:text-base text-paper/60">{content.email}</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0 text-gold mt-1"><Clock size={18} className="2xl:w-6 2xl:h-6" /></div>
                <div>
                  <div className="font-serif font-semibold mb-1 2xl:text-xl">Opening Hours</div>
                  {(content.hours || []).map((h, i) => {
                    const label = h.d || h.day || h.label || 'Hours';
                    const value = h.h || h.time || h.hours || '';
                    return <div className="text-sm 2xl:text-base text-paper/60" key={i}>{label}: <span className="text-paper/80">{value}</span></div>;
                  })}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={wa} className="inline-flex items-center justify-center rounded-full px-6 py-3 2xl:px-8 2xl:py-4 text-sm 2xl:text-base font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">WhatsApp</a>
                <a href={`https://instagram.com/${content.instagram || ''}`} className="inline-flex items-center justify-center rounded-full px-6 py-3 2xl:px-8 2xl:py-4 text-sm 2xl:text-base font-semibold border border-paper/25 text-paper hover:border-paper/50 transition-colors">@{content.instagram}</a>
              </div>
            </div>
            <div className="reveal rounded-2xl overflow-hidden bg-black/40 border border-paper/10 h-[350px] sm:h-[400px] 2xl:h-[500px] relative w-full">
              <iframe
                title="Location"
                className="absolute inset-0 w-full h-full border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(content.address || content.mapsQuery || 'Kuta, Bali')}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <PageFooter content={content} wa={wa} />
    </div>
  );
}

function MenuPage({ content, categories: propsCategories, items, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoriesList = useMemo(() => {
    const rawCategories = Array.isArray(propsCategories) && propsCategories.length > 0
      ? propsCategories
      : (typeof DEV_DATA !== 'undefined' ? DEV_DATA.categories || [] : []);

    return [{ id: 'all', name: 'All Menu' }, ...rawCategories];
  }, [propsCategories]);

  const dataItems = Array.isArray(items) ? items : [];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return dataItems;

    return dataItems.filter((item) => {
      return (
        String(item.categories) === String(selectedCategory) ||
        String(item.categoryId) === String(selectedCategory) ||
        String(item.category_id) === String(selectedCategory) ||
        item.category === selectedCategory
      );
    });
  }, [dataItems, selectedCategory]);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <TopNav
        scrolled={scrolled}
        content={content}
        wa={wa}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        showMenuLink={false}
      />
      <span id="top" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-24 2xl:pt-48 2xl:pb-36">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl 2xl:max-w-4xl mx-auto mb-10 2xl:mb-16">
            <div className="eyebrow justify-center flex mb-3 2xl:text-base">Our Menu</div>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
              Browse the <span className="text-gold">Menu</span>
            </h1>
            <p className="text-paper/60 mt-4 text-sm md:text-base 2xl:text-xl leading-relaxed">
              Jelajahi seluruh pilihan menu kami. Pilih kategori di bawah ini untuk memfilter sajian favorit Anda.
            </p>
          </div>

          {/* TAB BAR FILTER KATEGORI */}
          <div className="relative max-w-5xl 2xl:max-w-7xl mx-auto mb-10 2xl:mb-16 px-2 md:px-8">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-gold/90 text-ink hover:bg-gold shadow-md transition-transform hover:scale-110 2xl:text-xl"
            >
              ‹
            </button>

            <div
              ref={scrollRef}
              className="flex items-center gap-2 2xl:gap-4 overflow-x-auto py-2 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
            >
              {categoriesList.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 px-5 py-2.5 2xl:px-8 2xl:py-3.5 rounded-full text-xs md:text-sm 2xl:text-base font-medium whitespace-nowrap transition-all duration-300 ${isActive
                      ? 'bg-gold text-ink font-semibold shadow-lg shadow-gold/20 scale-105'
                      : 'bg-paper/[0.05] text-paper/70 hover:bg-paper/10 hover:text-paper border border-paper/10'
                      }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-gold/90 text-ink hover:bg-gold shadow-md transition-transform hover:scale-110 2xl:text-xl"
            >
              ›
            </button>
          </div>

          {/* Grid Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
            {filteredItems.length === 0 && (
              <div className="text-center py-16 col-span-full bg-paper/[0.02] border border-paper/10 rounded-2xl">
                <p className="text-paper/45 text-base 2xl:text-xl">
                  Belum ada menu yang tersedia untuk kategori ini.
                </p>
              </div>
            )}

            {filteredItems.map((it, index) => {
              const itemWa = typeof wa !== 'undefined'
                ? wa
                : `https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(it.name || 'Menu')}`;

              const isBestSeller = it.isFeatured || it.is_featured || it.isPopular || it.is_popular || /best seller|terlaris|favorite/i.test(it.badge || it.tag || '');

              return (
                <div
                  key={it.id || index}
                  className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-paper/[0.03] border border-paper/10 hover:border-gold/50 transition-all duration-300 shadow-xl h-full"
                >
                  {/* Gambar / Emoji & Badge Header */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-black/40">
                    {it.image || it.img ? (
                      <img
                        src={typeof imgSrc === 'function' ? imgSrc(it.image || it.img) : (it.image || it.img)}
                        alt={it.name || 'Menu Item'}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-paper/30">
                        <span className="text-4xl 2xl:text-6xl mb-2">
                          {typeof emojiFor === 'function' ? emojiFor(it.name) : '🍽️'}
                        </span>
                        <span className="text-xs 2xl:text-sm">Gambar Tidak Tersedia</span>
                      </div>
                    )}

                    {/* Badge Best Seller (jika sesuai kondisi) */}
                    {isBestSeller && (
                      <span className="absolute top-3 right-3 bg-gold text-ink text-[10px] 2xl:text-xs font-bold px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full shadow-lg border border-paper/20 uppercase tracking-wider">
                        ★ Best Seller
                      </span>
                    )}

                    {/* Badge Kategori */}
                    {(it.category || it.category_name) && (
                      <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-gold text-[10px] 2xl:text-xs font-semibold px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full border border-gold/20">
                        {it.category || it.category_name}
                      </span>
                    )}
                  </div>

                  {/* Info Detail & Tombol Pesan */}
                  <div className="p-5 2xl:p-7 flex-1 flex flex-col justify-between bg-black/30">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="font-semibold text-base 2xl:text-xl text-white group-hover:text-gold transition-colors line-clamp-1">
                          {it.name || 'Nama Menu'}
                        </h3>
                        {it.price && (
                          <span className="text-gold font-bold text-sm 2xl:text-lg whitespace-nowrap">
                            {typeof it.price === 'number' ? `Rp ${it.price.toLocaleString('id-ID')}` : it.price}
                          </span>
                        )}
                      </div>
                      {it.description && (
                        <p className="text-paper/60 text-xs 2xl:text-sm line-clamp-2 mb-4">
                          {it.description}
                        </p>
                      )}
                    </div>

                    <a
                      href={itemWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 2xl:py-3.5 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-ink border border-gold/30 font-semibold text-xs 2xl:text-sm transition-all text-center block mt-2"
                    >
                      Pesan via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageFooter content={content} wa={wa} />
    </div>
  );
}

export { Maintenance, HomePage, MenuPage, TopNav, PageFooter };
export default function App({ data }) {
  const content = data?.content || {};
  const categories = data?.categories || [];
  const items = data?.items || [];
  const katalog = data?.katalog || [];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (content.brand) document.title = `${content.brand} — Restaurant & Bar in Kuta, Bali`;
  }, [content.brand]);

  const wa = `https://wa.me/${content.whatsapp || ''}`;

  if (MAINTENANCE_MODE) {
    return <Maintenance content={content} wa={wa} />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/menu" element={<MenuPage content={content} categories={categories} items={items} wa={wa} scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />} />
        <Route path="*" element={<HomePage content={content} items={items} katalog={katalog} data={data} wa={wa} scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />} />
      </Routes>
    </HashRouter>
  );
}