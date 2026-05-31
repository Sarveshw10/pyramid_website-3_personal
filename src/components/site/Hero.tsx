import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import bannerVideo from "@/assets/hero-banner -ezremove.mp4";
import workshop from "@/assets/workshop-bg.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  "10+ Years Experience",
  "687+ Happy Clients",
  "Corporate Vendor",
  "Fast Turnaround",
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-16">
      {/* Background workshop */}
      <div className="absolute inset-0">
        <img
          src={workshop}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/60 to-carbon" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-10 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-[10px] sm:text-xs text-signal">Nagpur • Maharashtra</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-[40px] leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl text-warm text-shadow-hero"
          >
            PRINTING THAT
            <br />
            BUILDS <span className="text-signal">BRAND</span>
            <br />
            VISIBILITY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-5 max-w-xl text-sm sm:text-base text-warm/70 leading-relaxed"
          >
            Premium Signages, Flex Printing, LED Boards, Acrylic Branding & Commercial Printing Solutions in Nagpur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-signal text-carbon px-6 py-4 label-track text-xs sm:text-sm signal-glow hover:translate-y-[-2px] transition-transform"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-warm/20 text-warm px-6 py-4 label-track text-xs sm:text-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
            className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-border pt-6"
          >
            {trust.map((t) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="text-[11px] sm:text-xs label-track text-warm/70"
              >
                <span className="text-signal mr-2">●</span>{t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT — banner */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="relative mx-auto max-w-[360px] sm:max-w-[420px] lg:max-w-none"
          >
            <div className="absolute -inset-6 bg-signal/10 blur-3xl rounded-full" />
            <video
              src={bannerVideo}
              autoPlay
              muted
              playsInline
              className="relative w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.9 }}
              className="hidden sm:flex absolute -left-4 top-10 bg-carbon/90 backdrop-blur border border-border px-3 py-2 items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
              <span className="label-track text-[10px] text-warm/80">Live Production</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.05 }}
              className="hidden sm:block absolute -right-4 bottom-20 bg-signal text-carbon px-3 py-2"
            >
              <div className="font-display text-2xl leading-none">687+</div>
              <div className="label-track text-[9px]">Clients Served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
