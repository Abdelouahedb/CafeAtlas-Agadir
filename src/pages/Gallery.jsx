import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import IMAGES from '../constants/images';

function GalleryImage({ src, alt, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-400"
      onClick={() => onClick(index)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </motion.div>
  );
}

function Lightbox({ images, current, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {current !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 md:left-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <motion.img
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            src={images[current].src.replace('w=600', 'w=1200')}
            alt={images[current].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 text-sm font-medium tracking-wider">
            {current + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = IMAGES.gallery;

  const openLightbox = (i) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const prev = () => setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));

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
            <span className="w-8 h-px bg-gold/50" /> Photos <span className="w-8 h-px bg-gold/50" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white"
          >
            Galerie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-white/60 max-w-lg mx-auto"
          >
            Découvrez l'ambiance et les créations culinaires du Café Atlas.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <GalleryImage
                key={i}
                src={img.src}
                alt={img.alt}
                index={i}
                onClick={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        current={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
