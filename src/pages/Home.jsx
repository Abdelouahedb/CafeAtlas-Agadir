import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MapPin, Star, Clock, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import IMAGES from '../constants/images';
import { MENU_DATA, CONTACT_INFO, OPENING_HOURS } from '../constants/data';

/* ─── Small reusable animated wrapper ─── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Restaurant Café Atlas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-5"
        >
          <span className="w-8 h-px bg-gold/50" />
          Restaurant & Café – Agadir
          <span className="w-8 h-px bg-gold/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
        >
          Saveurs authentiques
          <br />
          <span className="text-gradient-gold italic">au cœur d'Agadir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto"
        >
          Cuisine marocaine traditionnelle et créations modernes, dans un cadre chaleureux face à l'océan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="bg-gold hover:bg-gold-light text-secondary px-8 py-3.5 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-gold/20 active:scale-95"
          >
            Voir le menu
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 active:scale-95"
          >
            Réserver / Contact
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/55 text-xs sm:text-sm"
        >
          <span className="flex items-center gap-2"><Star size={14} className="text-gold" /> 4.8 sur Google</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="flex items-center gap-2"><MapPin size={14} className="text-gold/60" /> Bd du 20 Août</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="flex items-center gap-2"><Clock size={14} className="text-gold/60" /> Ouvert aujourd'hui</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Introduction ─── */
function Introduction() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <img
                src={IMAGES.interior}
                alt="Intérieur du Café Atlas"
                className="rounded-2xl w-full h-64 sm:h-80 md:h-[440px] object-cover shadow-2xl shadow-secondary/10"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 bg-secondary text-white rounded-2xl p-5 shadow-xl hidden sm:block">
                <p className="font-heading text-3xl font-bold text-gold">10+</p>
                <p className="text-xs text-white/50 mt-0.5">Ans d'expérience</p>
              </div>
              {/* Decorative line */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl hidden md:block" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-6 h-px bg-gold" /> Bienvenue
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-4 leading-tight">
              Un lieu unique entre<br /><span className="italic text-primary">tradition et modernité</span>
            </h2>
            <p className="mt-6 text-dark/70 leading-relaxed">
              Bienvenue au Café Atlas, un restaurant moderne situé à Agadir où tradition marocaine et
              cuisine contemporaine se rencontrent. Notre chef combine les saveurs ancestrales du Maroc
              avec une touche créative pour vous offrir une expérience culinaire inoubliable.
            </p>
            <p className="mt-4 text-dark/70 leading-relaxed">
              Situé près de la plage, notre terrasse offre une vue imprenable sur l'océan Atlantique —
              le cadre idéal pour un petit déjeuner, un déjeuner d'affaires ou un dîner romantique.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: Users, label: 'Service\npersonnalisé' },
                { icon: Star, label: 'Produits\nfrais' },
                { icon: MapPin, label: 'Vue sur\nl\'océan' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-cream border border-gold/10 hover:border-gold/25 transition-colors duration-300">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-2.5">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <p className="text-xs font-medium text-dark/70 whitespace-pre-line leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Dishes ─── */
function FeaturedDishes() {
  const featured = [
    { name: 'Tajine de Poulet', price: 90, img: IMAGES.dishes.tajine, cat: 'Plat principal' },
    { name: 'Avocado Toast', price: 45, img: IMAGES.dishes.avocadoToast, cat: 'Petit déjeuner' },
    { name: 'Couscous Royal', price: 110, img: IMAGES.dishes.couscous, cat: 'Plat principal' },
    { name: 'Pastilla au Poulet', price: 95, img: IMAGES.dishes.pastilla, cat: 'Spécialité' },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Nos Créations"
          title="Plats Populaires"
          description="Découvrez les créations préférées de nos clients, préparées chaque jour avec des ingrédients frais et locaux."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((dish, i) => (
            <FadeIn key={dish.name} delay={i * 0.1}>
              <Link to="/menu" className="group block">
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-secondary/5 hover:shadow-xl transition-shadow duration-400">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-52 sm:h-60 md:h-68 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <span className="text-[10px] sm:text-xs text-gold font-semibold uppercase tracking-widest">{dish.cat}</span>
                    <h3 className="text-white font-heading font-semibold text-sm sm:text-base mt-1">{dish.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gold font-bold text-sm">{dish.price} MAD</span>
                      <span className="w-4 h-px bg-gold/40" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-secondary text-gold px-8 py-3.5 rounded-full font-semibold hover:bg-secondary-light transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-95"
          >
            Voir le menu complet <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Gallery Preview ─── */
function GalleryPreview() {
  const preview = IMAGES.gallery.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Galerie"
          title="Notre Univers"
          description="Un aperçu de l'ambiance chaleureuse et des plats savoureux qui vous attendent."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {preview.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl aspect-square group shadow-sm hover:shadow-xl transition-shadow duration-400">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3.5 rounded-full font-semibold hover:bg-secondary hover:text-gold transition-all duration-300 active:scale-95"
          >
            Voir toute la galerie <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Location Preview ─── */
function LocationPreview() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden h-64 md:h-96 shadow-lg shadow-secondary/10">
              <iframe
                title="Localisation Café Atlas"
                src={CONTACT_INFO.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-6 h-px bg-gold" /> Nous trouver
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-4">
              Venez nous rendre visite
            </h2>
            <p className="mt-4 text-dark/70 leading-relaxed">
              Situé sur le Boulevard du 20 Août, à quelques pas de la plage d'Agadir. Facile d'accès avec parking disponible.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-dark/70">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              {OPENING_HOURS.map((h) => (
                <div key={h.day} className="flex items-center gap-3 text-dark/70">
                  <Clock size={18} className="text-gold shrink-0" />
                  <span>{h.day}: <strong className="text-dark/80">{h.hours}</strong></span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-gold px-7 py-3 rounded-full font-semibold hover:bg-secondary-light transition-all hover:shadow-lg active:scale-95"
              >
                <MapPin size={18} /> Itinéraire
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-7 py-3 rounded-full font-semibold hover:bg-secondary hover:text-gold transition-all duration-300 active:scale-95"
              >
                Appeler
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.terrace} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/90" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <FadeIn>
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            <span className="w-8 h-px bg-gold/50" /> Réservation <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
            Réservez votre table<br />
            <span className="italic text-gold">dès maintenant</span>
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Que ce soit pour un repas en famille, un rendez-vous professionnel ou une soirée spéciale, nous vous accueillons avec plaisir.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-light text-secondary px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 active:scale-95"
            >
              Nous contacter
            </Link>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold/40 text-gold hover:bg-gold/10 px-8 py-3.5 rounded-full text-base font-semibold transition-all active:scale-95"
            >
              💬 WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedDishes />
      <GalleryPreview />
      <LocationPreview />
      <CTA />
    </>
  );
}
