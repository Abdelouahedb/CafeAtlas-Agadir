import { Phone, MapPin, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/data';

const actions = [
  {
    icon: Phone,
    label: 'Appeler',
    href: `tel:${CONTACT_INFO.phone}`,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Localiser',
    href: CONTACT_INFO.mapsLink,
    external: true,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: `https://wa.me/${CONTACT_INFO.whatsapp}`,
    external: true,
  },
  {
    icon: UtensilsCrossed,
    label: 'Menu',
    to: '/menu',
    external: false,
  },
];

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gold/10 shadow-[0_-4px_30px_rgba(44,24,16,0.3)]">
      <div className="grid grid-cols-4 h-16">
        {actions.map(({ icon: Icon, label, href, to, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              target={label === 'WhatsApp' || label === 'Localiser' ? '_blank' : undefined}
              rel={label === 'WhatsApp' || label === 'Localiser' ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center justify-center gap-1 text-white/70 active:text-gold active:bg-gold/5 transition-colors"
            >
              <Icon size={19} strokeWidth={1.8} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </a>
          ) : (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center justify-center gap-1 text-white/70 active:text-gold active:bg-gold/5 transition-colors"
            >
              <Icon size={19} strokeWidth={1.8} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </Link>
          )
        )}
      </div>
      {/* Safe area padding for iPhones */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
