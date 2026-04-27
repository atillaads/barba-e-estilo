/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Scissors, 
  Clock, 
  Star 
} from "lucide-react";

export default function App() {
  const socialButtons = [
    {
      id: "whatsapp",
      label: "Falar no WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      link: "https://wa.me/5500999999999",
      iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    },
    {
      id: "instagram",
      label: "Ver Instagram",
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      link: "https://instagram.com",
      iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    },
    {
      id: "call",
      label: "Ligar Agora",
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      link: "tel:+5500999999999",
      iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    },
    {
      id: "location",
      label: "Como Chegar",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      link: "https://maps.google.com",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#080808] text-gray-100 flex flex-col md:items-center md:justify-center font-sans overflow-y-auto overflow-x-hidden p-5 md:p-8 relative">
      {/* Ambient Glows - Slightly more intense for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Card Container - Larger max-width for desktop */}
      <div className="w-full max-w-xl mx-auto relative z-10 py-6 md:py-12">
        <motion.div 
          className="flex flex-col items-center space-y-6 md:space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo Section - Optimized for Mobile visibility */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="w-28 h-28 md:w-48 md:h-48 rounded-full border-2 border-amber-500/40 p-1 bg-gradient-to-b from-amber-500/20 to-transparent shadow-[0_0_30px_rgba(245,158,11,0.15)]">
              <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent transition-opacity group-hover:opacity-100 opacity-0" />
                <Scissors className="w-14 h-14 md:w-24 md:h-24 text-amber-500 opacity-90 group-hover:scale-110 group-hover:rotate-0 transition-all duration-700 -rotate-45" />
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[9px] md:text-xs font-black px-3 md:px-4 py-0.5 md:py-1 rounded-full shadow-xl tracking-tighter whitespace-nowrap">
              PREMIUM BARBER
            </div>
          </motion.div>

          {/* Title Section - Tighter on Mobile */}
          <motion.div variants={itemVariants} className="text-center space-y-1 md:space-y-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white uppercase italic leading-none">
              Barba & <span className="font-bold text-amber-500 not-italic">Estilo</span>
            </h1>
            <p className="text-neutral-400 text-xs md:text-lg tracking-[0.2em] uppercase italic font-light">
              Esculpindo sua melhor versão
            </p>
          </motion.div>

          {/* Action Buttons - Optimized for stacking above the fold on mobile */}
          <div className="w-full space-y-3 md:space-y-6 px-1 md:px-0">
            {socialButtons.slice(0, 2).map((button) => (
              <motion.a
                key={button.id}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(38, 38, 38, 0.8)" }}
                whileTap={{ scale: 0.99 }}
                className="group relative flex items-center justify-between p-4 md:p-8 bg-neutral-900/60 border border-white/10 rounded-2xl md:rounded-[2rem] transition-all duration-300 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center space-x-4 md:space-x-5">
                  <div className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 group-hover:scale-110 ${button.iconBg}`}>
                    {button.id === "whatsapp" && <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />}
                    {button.id === "instagram" && <Instagram className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />}
                  </div>
                  <span className="font-semibold text-lg md:text-2xl text-gray-100 tracking-tight">{button.label}</span>
                </div>
                <div className="text-neutral-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </motion.a>
            ))}

            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {socialButtons.slice(2).map((button) => (
                <motion.a
                  key={button.id}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(38, 38, 38, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col items-center justify-center min-h-[90px] md:min-h-[140px] p-4 md:p-8 bg-neutral-900/60 border border-white/10 rounded-2xl md:rounded-[2rem] transition-all duration-300 shadow-xl backdrop-blur-md text-center"
                >
                  <div className={`mb-2 md:mb-4 p-2 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 group-hover:scale-110 ${button.iconBg}`}>
                    {button.id === "call" && <Phone className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />}
                    {button.id === "location" && <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />}
                  </div>
                  <span className="text-[10px] md:text-base uppercase tracking-widest font-bold text-gray-200">
                    {button.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Information - Secondary (Visible on scroll) */}
          <motion.div variants={itemVariants} className="pt-8 md:pt-16 pb-4 text-neutral-400 flex flex-col items-center w-full space-y-6 md:space-y-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 w-full max-w-lg">
              <div className="flex items-center justify-center space-x-3 md:space-x-4 group cursor-default">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-500/80 transition-colors group-hover:text-amber-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-500">Funcionamento</span>
                  <span className="text-xs md:text-base text-neutral-200 font-medium">Seg - Sáb • 09:00 - 20:00</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 md:space-x-4 group cursor-default">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500/80 transition-colors group-hover:text-amber-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-500">Excelência</span>
                  <span className="text-xs md:text-base text-neutral-200 font-medium whitespace-nowrap">Avaliação 4.9 • 500+ Clientes</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-500 transition-colors cursor-default text-center leading-relaxed font-semibold">
              Rua das Navalhas, 123 • Centro Premium<br />
              © 2026 BARBA & ESTILO
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
