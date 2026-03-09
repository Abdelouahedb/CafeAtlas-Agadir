import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Award, Leaf, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import IMAGES from '../constants/images';

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

const values = [
  { icon: Heart, title: 'Passion', desc: 'Chaque plat est préparé avec amour et dévouement.' },
  { icon: Leaf, title: 'Fraîcheur', desc: 'Ingrédients frais et locaux sélectionnés chaque matin.' },
  { icon: Award, title: 'Qualité', desc: 'Les meilleurs produits pour une expérience exceptionnelle.' },
  { icon: Users, title: 'Convivialité', desc: 'Un accueil chaleureux dans une ambiance familiale.' },
];

export default function About() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-gold/50" /> À propos <span className="w-8 h-px bg-gold/50" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white"
          >
            Notre Histoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-white/60 max-w-lg mx-auto"
          >
            Découvrez l'histoire et la passion derrière Café Atlas.
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src={IMAGES.terrace}
                  alt="Terrasse du Café Atlas"
                  className="rounded-2xl w-full h-72 md:h-[440px] object-cover shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl hidden sm:block border border-gold/20">
                  <p className="font-heading text-4xl font-bold text-gold">2015</p>
                  <p className="text-dark/60 text-sm font-medium">Année de création</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-6 h-px bg-gold" /> Notre histoire
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-4 leading-tight">
                Là où la <em className="italic text-gold not-italic">tradition</em><br />rencontre l'innovation
              </h2>
              <div className="mt-6 space-y-4 text-dark/70 leading-relaxed">
                <p>
                  Bienvenue au Café Atlas, un restaurant moderne situé à Agadir où tradition marocaine
                  et cuisine moderne se rencontrent. Fondé en 2015, notre établissement est né d'une passion
                  profonde pour la gastronomie marocaine et d'un désir de la faire découvrir au monde entier.
                </p>
                <p>
                  Notre fondateur, inspiré par les recettes de sa grand-mère et les saveurs des souks d'Agadir,
                  a créé un lieu unique qui célèbre le patrimoine culinaire marocain tout en embrassant
                  la modernité. Chaque plat raconte une histoire, chaque saveur est un voyage.
                </p>
                <p>
                  Situé sur le boulevard du 20 Août avec une vue imprenable sur l'océan Atlantique,
                  Café Atlas est devenu un incontournable pour les habitants d'Agadir et les touristes
                  du monde entier à la recherche d'une expérience culinaire authentique.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Nos valeurs"
            title="Ce qui nous anime"
            description="Des valeurs fortes qui guident chacune de nos créations et de nos interactions."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-400 border border-gold/10">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <v.icon size={26} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-secondary">{v.title}</h3>
                  <p className="mt-2 text-dark/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Chef / Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn delay={0.1} className="order-2 md:order-1">
              <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-6 h-px bg-gold" /> Notre Chef
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-4 leading-tight">
                Une cuisine d'exception<br />signée <em className="italic text-gold not-italic">Chef Youssef</em>
              </h2>
              <div className="mt-6 space-y-4 text-dark/70 leading-relaxed">
                <p>
                  Avec plus de 15 ans d'expérience dans les cuisines des plus grands restaurants
                  du Maroc et d'Europe, Chef Youssef apporte une expertise unique à Café Atlas.
                </p>
                <p>
                  Sa philosophie : respecter les saveurs authentiques de la cuisine marocaine
                  tout en apportant une touche de créativité moderne. Chaque plat est pensé comme
                  une œuvre d'art, alliant esthétique et saveurs pour une expérience inoubliable.
                </p>
                <p>
                  « La cuisine, c'est l'amour rendu visible. Chaque assiette que nous servons
                  est une invitation au voyage. » — <span className="text-gold font-semibold">Chef Youssef</span>
                </p>
              </div>
            </FadeIn>

            <FadeIn className="order-1 md:order-2">
              <img
                src={IMAGES.chef}
                alt="Chef Youssef"
                className="rounded-2xl w-full h-72 md:h-[440px] object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
