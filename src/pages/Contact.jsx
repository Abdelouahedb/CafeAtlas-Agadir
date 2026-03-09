import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { CONTACT_INFO, OPENING_HOURS } from '../constants/data';

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

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
            <span className="w-8 h-px bg-gold/50" /> Contact <span className="w-8 h-px bg-gold/50" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-white/60 max-w-lg mx-auto"
          >
            Réservez une table ou envoyez-nous un message. Nous serons ravis de vous accueillir.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Contact Info */}
            <FadeIn>
              <div className="space-y-6">
                {/* Info cards */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/10">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-5">Informations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary text-sm">Adresse</p>
                        <p className="text-dark/70 text-sm">{CONTACT_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary text-sm">Téléphone</p>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-gold text-sm font-medium">
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary text-sm mb-1">Horaires d'ouverture</p>
                        {OPENING_HOURS.map((h) => (
                          <p key={h.day} className="text-dark/70 text-sm">
                            <span className="font-medium text-dark/80">{h.day}:</span> {h.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1da851] transition-colors active:scale-[0.98]"
                  >
                    <MessageCircle size={20} />
                    Contacter via WhatsApp
                  </a>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold/10">
                  <iframe
                    title="Localisation Café Atlas"
                    src={CONTACT_INFO.mapsEmbed}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-fit border border-gold/10">
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">Envoyez-nous un message</h3>
                <p className="text-dark/60 text-sm mb-6">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                    <h4 className="font-heading text-xl font-bold text-dark">Message envoyé !</h4>
                    <p className="mt-2 text-dark/60 text-sm">
                      Merci pour votre message. Nous vous répondrons très bientôt.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-1.5">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark/70 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+212 6XX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Votre message ou demande de réservation..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-gold py-3.5 rounded-xl font-semibold hover:bg-secondary-light transition-all hover:shadow-lg active:scale-[0.98] text-base"
                    >
                      <Send size={18} />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
