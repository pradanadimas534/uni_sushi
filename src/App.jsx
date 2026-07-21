import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown, Star } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import GoogleReviewsWidget from 'google-reviews-widget';


const rupiah = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

// Nyalakan mode maintenance dengan set ke true.
const MAINTENANCE_MODE = false;

function Maintenance({ content, wa }) {
  return (
    <div className="min-h-screen bg-ink text-paper flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-seigaiha" style={{ backgroundSize: '56px 28px' }} />
      <div className="relative text-center max-w-lg">
        <img src={imgSrc(content.logo)} alt={content.brand || 'Uni Sushi'} className="w-20 h-20 rounded-full mx-auto mb-8 object-cover ring-1 ring-gold/40" />
        <div className="eyebrow justify-center flex mb-4">Sedang Dalam Perbaikan</div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
          {content.brand || 'Uni Sushi'} <span className="text-gold">sedang berbenah</span>
        </h1>
        <p className="text-paper/60 leading-relaxed mb-10">
          Kami sedang menata ulang halaman ini agar lebih baik. Silakan
          kembali beberapa saat lagi, atau hubungi kami langsung lewat
          kontak di bawah.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={wa} className="btn-coral">Hubungi via WhatsApp</a>
          {content.email && (
            <a href={`mailto:${content.email}`} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-paper/25 text-paper hover:border-gold/60 hover:text-gold transition-colors">
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
    // Memuat script Elfsight hanya sekali saat komponen dimuat
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
      className="elfsight-app-88a07733-6995-46aa-872b-7ad4c9c0659b"
      data-elfsight-app-lazy
    />
  );
}

function TopNav({ scrolled, content, wa, mobileOpen, setMobileOpen, showMenuLink = true }) {
  const primaryLinks = [
    { label: 'Home', to: '#top' },
    { label: 'Our Story', to: '#about' },
    { label: 'Menu', to: '/menu' },
    { label: 'Reviews', to: '#reviews' }, // Diubah dari Gallery ke Reviews
    { label: 'Visit', to: '#visit' },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur shadow-lg py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-6'}`}>
        <div className="uc-wrap flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-semibold flex items-center gap-3 text-paper">
            <img src={imgSrc(content.logo)} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
            {content.brand}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {primaryLinks.filter((link) => showMenuLink || link.label !== 'Menu').map((link) => (
              link.to.startsWith('#') ? (
                <a key={link.to} href={link.to} onClick={(e) => handleHashScroll(e, link.to)} className="text-sm font-medium text-paper/75 hover:text-gold transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="text-sm font-medium text-paper/75 hover:text-gold transition-colors">{link.label}</Link>
              )
            ))}
            <a href={wa} className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">Reserve</a>
          </div>
          <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="md:hidden p-2 text-paper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-ink text-paper flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button aria-label="Close" onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-3xl">×</button>
        {primaryLinks.filter((link) => showMenuLink || link.label !== 'Menu').map((link) => (
          link.to.startsWith('#') ? (
            <a key={link.to} href={link.to} onClick={(e) => { setMobileOpen(false); handleHashScroll(e, link.to); }} className="text-2xl font-serif">
              {link.label}
            </a>
          ) : (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="text-2xl font-serif">{link.label}</Link>
          )
        ))}
        <a href={wa} onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-gold text-ink mt-4">Reserve →</a>
      </div>
    </>
  );
}

function PageFooter({ content, wa }) {
  return (
    <footer className="bg-black/40 border-t border-paper/10 pt-20 pb-8">
      <div className="uc-wrap">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="font-serif text-xl font-semibold flex items-center gap-3 mb-3">
              <img src={imgSrc(content.logo)} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />{content.brand}
            </div>
            <p className="text-paper/55 text-sm max-w-xs leading-relaxed">{content.heroLede}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-gold font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-paper/65 text-sm hover:text-gold">Home</Link>
              <Link to="/menu" className="text-paper/65 text-sm hover:text-gold">Menu</Link>
              <a href="#katalog" onClick={(e) => handleHashScroll(e, '#katalog')} className="text-paper/65 text-sm hover:text-gold">Catalog</a>
              <a href="#reviews" onClick={(e) => handleHashScroll(e, '#reviews')} className="text-paper/65 text-sm hover:text-gold">Reviews</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-gold font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href={wa} className="text-paper/65 text-sm hover:text-gold">WhatsApp</a>
              <a href={`https://instagram.com/${content.instagram || ''}`} className="text-paper/65 text-sm hover:text-gold">Instagram</a>
              <a href={`mailto:${content.email || ''}`} className="text-paper/65 text-sm hover:text-gold">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/10 pt-6 flex flex-wrap justify-between gap-3 text-xs text-paper/45">
          <span>© {new Date().getFullYear()} {content.brand} · Kuta, Bali</span>
          <a href="/admin/" className="hover:text-gold">Admin Login →</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ content, items, katalog, data, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();

  const heroImg = content.heroImage;

  return (
    <div className="min-h-screen bg-ink text-paper">
      <TopNav scrolled={scrolled} content={content} wa={wa} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <span id="top" />

      <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {heroImg ? (
          <img src={imgSrc(heroImg)} alt={content.brand} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c2f22] via-ink to-[#0e1712]" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-[0.08] bg-seigaiha" style={{ backgroundSize: '56px 28px' }} />

        <div className="relative uc-wrap max-w-2xl mx-auto pt-24 pb-36 flex flex-col items-center">
          <div className="eyebrow justify-center flex mb-4">{content.heroEyebrow}</div>

          <img
            src={imgSrc(content.logo)}
            alt={`${content.brand} Logo`}
            className="w-24 sm:w-32 md:w-36 aspect-square rounded-full object-cover border-4 border-white/20 shadow-2xl mb-4" />
          {/* BLOK LOGO TULISAN SESUAI GAMBAR 2 */}
          <div className="flex flex-col items-center my-2 select-none">
            {/* "Uni" - Font Caveat (Cursive Brush Oranye) */}
            <span
              className="text-6xl sm:text-7xl md:text-8xl text-[#FF5722] leading-none drop-shadow-md -mb-3 z-10"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
            >
              Uni
            </span>

            {/* "SUSHI" - Font Permanent Marker (Bold Brush Putih) */}
            <span
              className="text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider leading-none drop-shadow-xl"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              SUSHI
            </span>

            {/* Tagline "WE SERVE THE BEST" */}
            <div className="flex items-center gap-3 mt-4 text-paper/70">
              <span className="w-10 h-[1px] bg-paper/30"></span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-paper/90">
                WE SERVE THE BEST
              </span>
              <span className="w-10 h-[1px] bg-paper/30"></span>
            </div>
          </div>

          <p className="text-paper/75 leading-relaxed mt-6 mb-9 max-w-xl mx-auto">{content.heroLede}</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">Explore Menu</Link>
            <a href={wa} className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold border border-paper/40 text-paper hover:bg-paper hover:text-ink transition-colors">Reserve via WhatsApp</a>
          </div>
        </div>
        <a href="#about" onClick={(e) => handleHashScroll(e, '#about')} aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/60 animate-bounce">
          <ChevronDown size={26} />
        </a>
      </header>

      <div className="wave-divider bg-ink" />

      <section className="py-24 md:py-32" id="about">
        <div className="uc-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Kolom Gambar (Menggantikan Timeline Tahun) */}
            <div className="reveal order-2 lg:order-1 flex justify-center">
              <div className="relative group max-w-md w-full">
                <img
                  src={content?.aboutImage}
                  alt="About Us"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Kolom Teks Konten */}
            <div className="reveal order-1 lg:order-2">
              <div className="eyebrow mb-3 text-gold">
                {content?.aboutEyebrow}
              </div>
              <p className="text-paper/65 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {content?.aboutText}
              </p>
            </div>

          </div>
        </div>
      </section>
      <div className="wave-divider bg-black/25" />


      {/* FEATURED MENU SLIDER */}
      <section className="py-24 md:py-32 bg-black/40 overflow-hidden" id="menu-highlight">
        <div className="uc-wrap max-w-6xl mx-auto px-4">
          <div className="reveal text-center max-w-xl mx-auto mb-4">
            <div className="eyebrow justify-center flex mb-3 text-gold">Our Selection</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Featured <span className="text-gold">Menu</span>
            </h2>
          </div>
          <p className="reveal text-center text-paper/55 text-sm max-w-lg mx-auto mb-12">
            Explore our signature dishes crafted with fresh ingredients and authentic flavors.
          </p>

          {(() => {
            const menuList = Array.isArray(katalog) ? katalog : [];
            const featuredMenu = menuList.slice(0, 10);

            if (featuredMenu.length === 0) {
              return <p className="text-center text-paper/45">Belum ada menu tersedia.</p>;
            }

            return (
              <div className="flex flex-col items-center gap-10">
                <div className="w-full relative px-2">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={featuredMenu.length > 3}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 24 },
                      1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    className="pb-14"
                  >
                    {featuredMenu.map((it, index) => {
                      const itemWa = typeof wa !== 'undefined'
                        ? wa
                        : `https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(it.name || 'Menu')}`;

                      return (
                        <SwiperSlide key={it.id || index} className="h-auto">
                          <div className="group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden bg-paper/[0.03] border border-paper/10 hover:border-gold/50 transition-all duration-300 shadow-xl hover:-translate-y-1">

                            {/* Gambar dengan rasio 4/5 */}
                            <div className="relative w-full aspect-[4/5] overflow-hidden bg-black/40">
                              {it.image || it.img ? (
                                <img
                                  src={typeof imgSrc === 'function' ? imgSrc(it.image || it.img) : (it.image || it.img)}
                                  alt={it.name || 'Menu Item'}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-paper/30">
                                  <span className="text-4xl mb-2">
                                    {typeof emojiFor === 'function' ? emojiFor(it.name) : '🍽️'}
                                  </span>
                                  <span className="text-xs">Gambar Tidak Tersedia</span>
                                </div>
                              )}

                              {it.category && (
                                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-gold text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gold/20">
                                  {it.category}
                                </span>
                              )}
                            </div>

                            {/* Konten Kartu */}
                            <div className="p-5 flex-1 flex flex-col justify-between bg-black/30">
                              <div>
                                <div className="flex justify-between items-start gap-2 mb-2">
                                  <h3 className="font-semibold text-base text-white group-hover:text-gold transition-colors">
                                    {it.name || 'Nama Menu'}
                                  </h3>
                                  {it.price && (
                                    <span className="text-gold font-bold text-sm whitespace-nowrap">
                                      {typeof it.price === 'number' ? `Rp ${it.price.toLocaleString('id-ID')}` : it.price}
                                    </span>
                                  )}
                                </div>
                                {it.description && (
                                  <p className="text-paper/60 text-xs line-clamp-2 mb-4">
                                    {it.description}
                                  </p>
                                )}
                              </div>

                              <a
                                href={itemWa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-ink border border-gold/30 font-semibold text-xs transition-all text-center block mt-2"
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
                  className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors shadow-lg"
                >
                  See Full Menu
                </Link>
              </div>
            );
          })()}
        </div>
      </section>

      <div className="wave-divider bg-black/25" />

      {/* REVIEWS SECTION - AUTOMATIC FROM GOOGLE MAPS */}
      {/* REVIEWS SECTION */}
      <section className="py-24 md:py-32 bg-black/25 overflow-hidden" id="reviews">
        <div className="uc-wrap max-w-6xl mx-auto px-4">
          {/* Header Seksi */}
          <div className="reveal text-center max-w-xl mx-auto mb-10">
            <div className="eyebrow justify-center flex mb-3 text-gold">
              Google Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-paper">
              What Our <span className="text-gold">Customers Say</span>
            </h2>
          </div>
          {/* Container Widget Elfsight */}
          <div className="min-h-[300px] flex items-center justify-center">
            <ElfsightReviews />
          </div>
        </div>
      </section>

      <div className="wave-divider bg-black/25" />

      <section className="py-24 md:py-32" id="visit">
        <div className="uc-wrap">
          <div className="reveal text-center max-w-xl mx-auto mb-14">
            <div className="eyebrow justify-center flex mb-3">Come Say Hi</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Visit <span className="text-gold">Us</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="reveal space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold"><MapPin size={19} /></div>
                <div>
                  <div className="font-serif font-semibold mb-1">Location</div>
                  <div className="text-sm text-paper/60">{content.address}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold"><Phone size={19} /></div>
                <div>
                  <div className="font-serif font-semibold mb-1">Phone</div>
                  <div className="text-sm text-paper/60">{content.phone}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold"><Mail size={19} /></div>
                <div>
                  <div className="font-serif font-semibold mb-1">Email</div>
                  <div className="text-sm text-paper/60">{content.email}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold"><Clock size={19} /></div>
                <div>
                  <div className="font-serif font-semibold mb-1">Opening Hours</div>
                  {(content.hours || []).map((h, i) => {
                    const label = h.d || h.day || h.label || 'Hours';
                    const value = h.h || h.time || h.hours || '';
                    return <div className="text-sm text-paper/60" key={i}>{label}: <span className="text-paper/80">{value}</span></div>;
                  })}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-3">
                <a href={wa} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">WhatsApp</a>
                <a href={`https://instagram.com/${content.instagram || ''}`} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-paper/25 text-paper hover:border-paper/50 transition-colors">@{content.instagram}</a>
              </div>
            </div>
            <div className="reveal rounded-2xl overflow-hidden bg-black/40 border border-paper/10 min-h-[420px] relative">
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

      <div className="wave-divider bg-black/40" />
      <PageFooter content={content} wa={wa} />
    </div>
  );
}

function MenuPage({ content, items, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();
  const [posterLightbox, setPosterLightbox] = useState(null);

  const dataItems = Array.isArray(items) ? items : [];

  return (
    <div className="min-h-screen bg-ink text-paper">
      <TopNav
        scrolled={scrolled}
        content={content}
        wa={wa}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        showMenuLink={false}
      />
      <span id="top" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="uc-wrap max-w-6xl mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center flex mb-3">Our Menu</div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Browse the <span className="text-gold">Menu</span>
            </h1>
            <p className="text-paper/60 mt-4 leading-relaxed">
              Jelajahi seluruh pilihan menu kami. Ketuk pada gambar untuk memperbesar detail poster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataItems.length === 0 && (
              <p className="text-paper/45 text-center py-12 col-span-full">
                Belum ada menu yang tersedia saat ini.
              </p>
            )}

            {dataItems.map((it) => (
              <div
                key={it.id}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-paper/[0.03] border border-paper/10 hover:border-gold/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden bg-black/40 cursor-pointer"
                  onClick={() => setPosterLightbox(imgSrc(it.image))}
                >
                  {it.image ? (
                    <img
                      src={imgSrc(it.image)}
                      alt={it.name || 'Menu Poster'}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sage/20 to-black/30 flex items-center justify-center text-6xl">
                      {typeof emojiFor === 'function' ? emojiFor(it.name) : '🍽️'}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="px-4 py-2 rounded-full bg-gold/90 text-ink text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Perbesar Poster
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-paper/[0.02] border-t border-paper/10 flex items-center justify-between">
                  <div className="pr-2 truncate">
                    <p className="text-gold font-semibold text-sm">
                      {it.price && typeof rupiah === 'function'
                        ? rupiah(it.price)
                        : it.name || 'Menu Item'}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${wa}?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(
                      it.name || 'Menu'
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 px-4 py-1.5 bg-gold hover:bg-gold/80 text-ink rounded-lg text-xs font-semibold transition-colors"
                  >
                    Pesan Via WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {posterLightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setPosterLightbox(null)}
        >
          <button
            onClick={() => setPosterLightbox(null)}
            aria-label="Tutup"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-paper/80 hover:text-gold transition-colors p-2"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={posterLightbox}
            alt="Menu Detail"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <PageFooter content={content} wa={wa} />
    </div>
  );
}

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