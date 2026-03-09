import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { MENU_DATA } from '../constants/data';

/* ─── Download PDF ─── */
function handleDownloadPDF() {
  import('jspdf').then(({ jsPDF }) => {
    import('jspdf-autotable').then(() => {
      const doc = new jsPDF();
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();
      const m = 18;

      const footer = () => {
        doc.setFillColor(44, 24, 16);
        doc.rect(0, H - 14, W, 14, 'F');
        doc.setFontSize(7);
        doc.setTextColor(200, 155, 60);
        doc.text('Café Atlas – Agadir  |  Bd du 20 Août, 80000  |  +212 528 123 456', W / 2, H - 5, { align: 'center' });
      };

      // Header
      doc.setFillColor(44, 24, 16);
      doc.rect(0, 0, W, 55, 'F');
      doc.setDrawColor(200, 155, 60);
      doc.setLineWidth(0.3);
      doc.line(m, 10, W - m, 10);
      doc.line(m, 48, W - m, 48);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.setTextColor(200, 155, 60);
      doc.text('Café Atlas', W / 2, 27, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text('Restaurant & Café – Agadir', W / 2, 37, { align: 'center' });

      let y = 66;

      MENU_DATA.forEach((cat) => {
        if (y > H - 70) { footer(); doc.addPage(); y = 20; }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(44, 24, 16);
        doc.text(`${cat.icon}  ${cat.category}`, W / 2, y, { align: 'center' });
        doc.setDrawColor(200, 155, 60);
        doc.setLineWidth(0.3);
        doc.line(m, y + 4, W - m, y + 4);
        y += 12;

        doc.autoTable({
          startY: y,
          body: cat.items.map((i) => [i.name, i.description, `${i.price} MAD`]),
          theme: 'plain',
          margin: { left: m, right: m },
          bodyStyles: { fontSize: 9, textColor: [60, 48, 38], cellPadding: { top: 4, bottom: 4, left: 3, right: 3 }, lineColor: [235, 225, 210], lineWidth: { bottom: 0.15 } },
          columnStyles: {
            0: { cellWidth: 50, fontStyle: 'bold', textColor: [44, 24, 16], fontSize: 9.5 },
            1: { textColor: [100, 85, 70], fontSize: 8.5 },
            2: { cellWidth: 24, halign: 'right', fontStyle: 'bold', textColor: [200, 155, 60], fontSize: 9.5 },
          },
          alternateRowStyles: { fillColor: [252, 248, 242] },
          didDrawPage: footer,
        });
        y = doc.lastAutoTable.finalY + 16;
      });

      footer();
      doc.save('Cafe-Atlas-Menu.pdf');
    });
  });
}

/* ─── Animated wrapper ─── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Menu Item Card (improved) ─── */
function MenuItemCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-cream"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-secondary/90 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
          {item.price} MAD
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h4 className="font-heading text-base md:text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-200">
          {item.name}
        </h4>
        <p className="text-dark/65 text-[13px] mt-1.5 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

/* ─── Category Section ─── */
function MenuCategory({ category, icon, items }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="flex items-center justify-center w-11 h-11 bg-secondary rounded-xl text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary">{category}</h3>
          <div className="mt-1 w-10 h-0.5 bg-gradient-to-r from-gold to-transparent rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <MenuItemCard key={item.name} item={item} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Download Button ─── */
function DownloadButton({ className = '' }) {
  return (
    <button
      onClick={handleDownloadPDF}
      className={`inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-secondary px-7 py-3 rounded-full font-semibold transition-colors duration-200 hover:shadow-lg hover:shadow-gold/20 active:scale-[0.97] ${className}`}
    >
      <Download size={18} />
      <span className="text-sm">Télécharger le menu</span>
    </button>
  );
}

/* ─── Page ─── */
export default function Menu() {
  const [active, setActive] = useState(null);
  const filtered = active !== null ? [MENU_DATA[active]] : MENU_DATA;

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-gold/30" />
          <div className="absolute bottom-5 left-5 w-40 h-40 rounded-full border border-gold/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
          >
            <FileText size={14} /> Notre Carte
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Notre <span className="text-gradient-gold italic">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/60 max-w-lg mx-auto text-sm md:text-base"
          >
            Des ingrédients frais et locaux, préparés avec passion chaque jour par notre Chef.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="divider-gold mx-auto mt-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7"
          >
            <DownloadButton />
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-cream/50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sticky category filters */}
          <div className="sticky top-16 md:top-20 z-30 bg-cream/80 backdrop-blur-lg py-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 md:mb-12">
            <div className="flex gap-2 overflow-x-auto scrollbar-none sm:flex-wrap sm:justify-center">
              <button
                onClick={() => setActive(null)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === null
                    ? 'bg-secondary text-gold shadow-lg shadow-secondary/20'
                    : 'bg-white text-dark/70 hover:bg-warm-gray border border-transparent hover:border-gold/20'
                }`}
              >
                Tout
              </button>
              {MENU_DATA.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActive(i)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === i
                      ? 'bg-secondary text-gold shadow-lg shadow-secondary/20'
                      : 'bg-white text-dark/70 hover:bg-warm-gray border border-transparent hover:border-gold/20'
                  }`}
                >
                  {cat.icon} {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu sections */}
          <div className="space-y-14 md:space-y-20">
            <AnimatePresence mode="wait">
              {filtered.map((cat) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuCategory category={cat.category} icon={cat.icon} items={cat.items} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom download CTA */}
          <FadeIn className="mt-16 md:mt-20">
            <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  Emportez notre <span className="text-gradient-gold italic">menu</span>
                </h3>
                <p className="text-white/60 text-sm max-w-md mx-auto mb-6">
                  Téléchargez notre menu complet en PDF pour le consulter hors ligne ou le partager.
                </p>
                <DownloadButton />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
