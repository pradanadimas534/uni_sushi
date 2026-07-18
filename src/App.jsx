import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

const rupiah = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

// Nyalakan mode maintenance dengan set ke true.
// Selama true, seluruh isi situs disembunyikan dan hanya halaman
// "sedang dalam perbaikan" di bawah ini yang ditampilkan.
const MAINTENANCE_MODE = false;

function Maintenance({ content, wa }) {
  return (
    <div className="min-h-screen bg-ink text-paper flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-seigaiha" style={{ backgroundSize: '56px 28px' }} />
      <div className="relative text-center max-w-lg">
        <img src="/public/images/logo.jpeg" alt={content.brand || 'Uni Sushi'} className="w-20 h-20 rounded-full mx-auto mb-8 object-cover ring-1 ring-gold/40" />
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

// Resolves an image field to a real URL:
// - already-absolute paths (dev demo images like "/images/hero.jpg", or full URLs) are used as-is
// - plain filenames (as stored by the admin uploader, e.g. "abc123.jpg") get prefixed with /uploads/
function imgSrc(path) {
  if (!path) return null;
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

function TopNav({ scrolled, content, wa, mobileOpen, setMobileOpen, showMenuLink = true }) {
  const primaryLinks = [
    { label: 'Home', to: '/' },
    { label: 'Our Story', to: '/about' },
    { label: 'Menu', to: '/menu' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Visit', to: '/visit' },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur shadow-lg py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-6'}`}>
        <div className="uc-wrap flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-semibold flex items-center gap-3 text-paper">
            <img src="/public/images/logo.jpeg" alt="" className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
            {content.brand}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {primaryLinks.filter((link) => showMenuLink || link.label !== 'Menu').map((link) => (
              <Link key={link.to} to={link.to} className="text-sm font-medium text-paper/75 hover:text-gold transition-colors">{link.label}</Link>
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
          <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="text-2xl font-serif">{link.label}</Link>
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
              <img src="/public/images/logo.jpeg" alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />{content.brand}
            </div>
            <p className="text-paper/55 text-sm max-w-xs leading-relaxed">{content.heroLede}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-gold font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-paper/65 text-sm hover:text-gold">Home</Link>
              <Link to="/menu" className="text-paper/65 text-sm hover:text-gold">Menu</Link>
              <a href="/#visit" className="text-paper/65 text-sm hover:text-gold">Visit</a>
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

function HomePage({ content, items, data, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();
  const featured = items.filter((i) => i.featured).slice(0, 3);
  const galleryImgs = data.gallery || [];
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

        <div className="relative uc-wrap max-w-2xl mx-auto pt-24">
          <div className="eyebrow justify-center flex mb-5">{content.heroEyebrow}</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
            Welcome to <span className="text-gold">{content.brand}</span>
          </h1>
          <p className="text-paper/75 leading-relaxed mb-9 max-w-xl mx-auto">{content.heroLede}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">Explore Menu</Link>
            <a href={wa} className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold border border-paper/40 text-paper hover:bg-paper hover:text-ink transition-colors">Reserve via WhatsApp</a>
          </div>
        </div>
        <a href="#about" aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/60 animate-bounce">
          <ChevronDown size={26} />
        </a>
      </header>

      <div className="wave-divider bg-ink" />

      <section className="py-24 md:py-32" id="about">
        <div className="uc-wrap">
          <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-16 items-start">
            <div className="reveal">
              <div className="eyebrow mb-3">{content.aboutEyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <p className="text-paper/65 leading-relaxed whitespace-pre-line">{content.aboutText}</p>
            </div>
            <div className="reveal relative">
              <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-paper/10" />
              {[
                { year: '2016', title: 'Founded' },
                { year: '2018', title: 'Signature Menu' },
                { year: '2020', title: 'Community Events' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-5 pb-12">
                  <div className="z-10 w-6 h-6 rounded-full bg-gold border-4 border-ink shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.year}</h3>
                    <p className="text-paper/55 text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { emoji: '🍣', title: 'Edomae Craft', text: 'Nigiri and sashimi cut to order, in the unhurried tradition of a Tokyo sushi counter.' },
              { emoji: '🌺', title: 'Island Ingredients', text: "Ocean-fresh catch and Bali's own produce, married with Japanese technique." },
              { emoji: '🎐', title: 'Warm Hospitality', text: 'A gathering spot for celebrations and quiet dinners alike — Balinese warmth, Japanese precision.' },
            ].map((item) => (
              <div key={item.title} className="reveal rounded-2xl border border-paper/10 bg-black/20 p-8 text-center hover:-translate-y-2 hover:border-gold/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5 text-3xl">{item.emoji}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-paper/60 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-divider bg-black/25" />

      {/* <section className="py-24 md:py-32 bg-black/25" id="menu">
        <div className="uc-wrap">
          <div className="reveal text-center max-w-xl mx-auto mb-4">
            <div className="eyebrow justify-center flex mb-3">Today's Menu</div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our <span className="text-gold">Menu</span>
            </h2>
          </div>
          <p className="reveal text-center text-paper/55 text-sm max-w-lg mx-auto mb-10">
            A short taste of what awaits — browse the full menu page for all categories.
          </p>
          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((it) => (
              <div className="rounded-lg overflow-hidden bg-paper/[0.04] border border-paper/10 hover:border-gold/50 transition-colors" key={it.id}>
                {it.image ? (
                  <div className="aspect-[4/3] overflow-hidden frame-corners">
                    <img src={imgSrc(it.image)} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage/20 to-black/30 flex items-center justify-center text-5xl">{emojiFor(it.name)}</div>
                )}
                <div className="p-5">
                  <h3 className="font-serif font-semibold mb-1.5">{it.name}</h3>
                  {it.description && <p className="text-sm text-paper/55 leading-relaxed">{it.description}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal flex justify-center mt-12">
            <Link to="/menu" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold bg-gold text-ink hover:bg-gold/85 transition-colors">
              Lihat Menu Lengkap
              <ChevronDown size={16} />
            </Link>
          </div>
        </div>
      </section> */}

      <section className="py-24 md:py-32 bg-black/25" id="gallery">
        <div className="uc-wrap">
          <div className="reveal text-center max-w-xl mx-auto mb-12">
            <div className="eyebrow justify-center flex mb-3">Ambience</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Around <span className="text-gold">{content.brand}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImgs.map((photo) => (
              <div key={photo.id} className="aspect-square rounded-lg overflow-hidden reveal frame-corners">
                <img src={photo.image} className="w-full h-full object-cover hover:scale-110 transition duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-divider bg-ink" />

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

function MenuPage({ content, categories, items, wa, scrolled, mobileOpen, setMobileOpen }) {
  useReveal();
  const [activeCat, setActiveCat] = useState(categories[0]?.id ?? null);
  const [posterLightbox, setPosterLightbox] = useState(null);
  const shown = items.filter((it) => String(it.category_id || it.categoryId) === String(activeCat));
  const activeCategory = categories.find((c) => String(c.id) === String(activeCat));

  useEffect(() => {
    if (!activeCat && categories[0]?.id) {
      setActiveCat(categories[0].id);
    }
  }, [activeCat, categories]);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <TopNav scrolled={scrolled} content={content} wa={wa} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} showMenuLink={false} />
      <span id="top" />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="uc-wrap">
          <div className="reveal text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow justify-center flex mb-3">Full Menu</div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Browse the <span className="text-gold">Menu</span>
            </h1>
            <p className="text-paper/60 mt-4 leading-relaxed">
              Explore the full selection from breakfast to cocktails, all in one place.
            </p>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
            {Array.isArray(categories) && categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`menu-tab ${String(activeCat) === String(c.id) ? 'bg-gold text-ink border-gold' : 'border-paper/20 text-paper/70 hover:border-gold/50 hover:text-gold'}`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {activeCategory?.posterImage ? (
            <div className="reveal max-w-xl mx-auto">
              <button onClick={() => setPosterLightbox(activeCategory.posterImage)} className="block w-full rounded-lg overflow-hidden frame-corners border border-paper/10 hover:border-gold/50 transition-colors">
                <img src={activeCategory.posterImage} alt={activeCategory.name} className="w-full h-auto" />
              </button>
              <p className="text-center text-paper/45 text-xs mt-3 tracking-wide uppercase">Ketuk gambar untuk memperbesar</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.length === 0 && (
                <p className="text-paper/45 text-center py-8 col-span-full">No items in this category yet.</p>
              )}
              {shown.map((it) => (
                <div className="rounded-lg overflow-hidden bg-paper/[0.04] border border-paper/10 hover:border-gold/50 transition-colors" key={it.id}>
                  {it.image ? (
                    <div className="aspect-[4/3] overflow-hidden frame-corners">
                      <img src={imgSrc(it.image)} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-sage/20 to-black/30 flex items-center justify-center text-5xl">{emojiFor(it.name)}</div>
                  )}
                  <div className="p-5">
                    <h3 className="font-serif font-semibold mb-1.5">{it.name}</h3>
                    {it.description && <p className="text-sm text-paper/55 leading-relaxed">{it.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {posterLightbox && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-10" onClick={() => setPosterLightbox(null)}>
          <button onClick={() => setPosterLightbox(null)} aria-label="Tutup" className="absolute top-5 right-5 md:top-8 md:right-8 text-paper/80 hover:text-gold transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <img src={posterLightbox} alt="Menu" className="max-h-full max-w-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
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
        <Route path="*" element={<HomePage content={content} items={items} data={data} wa={wa} scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />} />
      </Routes>
    </HashRouter>
  );
}