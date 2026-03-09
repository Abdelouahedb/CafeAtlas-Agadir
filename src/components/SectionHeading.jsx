import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeading({ subtitle, title, description, light = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 md:mb-14"
    >
      {subtitle && (
        <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          — {subtitle} —
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {/* Decorative divider */}
      <div className="flex justify-center mt-4 mb-2">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
      </div>
      {description && (
        <p className={`mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-dark/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
