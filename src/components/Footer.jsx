import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants/data';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/90 pb-20 md:pb-0">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">☕</span>
              <div>
                <span className="font-heading text-2xl font-bold text-white">Café Atlas</span>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-gold font-medium -mt-0.5">Agadir</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Saveurs authentiques au cœur d'Agadir. Cuisine marocaine traditionnelle et créations modernes dans un cadre exceptionnel.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold mb-5 tracking-wide">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/menu', label: 'Notre Menu' },
                { to: '/gallery', label: 'Galerie' },
                { to: '/about', label: 'À Propos' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold mb-5 tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold/60 shrink-0" />
                <span className="text-white/60">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold/60 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white/60 hover:text-gold transition-colors duration-300">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold/60 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/60 hover:text-gold transition-colors duration-300">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold mb-5 tracking-wide">Horaires</h3>
            <ul className="space-y-3 text-sm">
              {OPENING_HOURS.map((h) => (
                <li key={h.day} className="flex items-center gap-3">
                  <Clock size={16} className="text-gold/60 shrink-0" />
                  <div>
                    <span className="text-white/60 font-medium">{h.day}</span>
                    <br />
                    <span className="text-white/50">{h.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="border-t border-white/5 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Café Atlas – Agadir. Tous droits réservés.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
      </div>
    </footer>
  );
}
