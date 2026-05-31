import { motion } from "framer-motion";
import led from "@/assets/gallery-led.jpg";
import flex from "@/assets/gallery-flex.jpg";
import acp from "@/assets/gallery-acp.jpg";
import neon from "@/assets/gallery-neon.jpg";
import tshirt from "@/assets/gallery-tshirt.jpg";
import standee from "@/assets/gallery-standee.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  { src: led, cat: "LED Signage", span: "sm:row-span-2" },
  { src: flex, cat: "Flex Banner", span: "" },
  { src: neon, cat: "Neon", span: "" },
  { src: acp, cat: "ACP Letters", span: "sm:row-span-2" },
  { src: tshirt, cat: "T-Shirt Print", span: "" },
  { src: standee, cat: "Roll-Up", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-carbon py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-xs text-signal">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-warm leading-[0.95]">FEATURED WORK</h2>
          <p className="mt-4 text-warm/60 text-sm sm:text-base">
            Real projects. Real businesses. Real visibility.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[180px_180px_180px] sm:grid-rows-[260px_260px] gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[260px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.cat}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between">
                <span className="label-track text-[10px] sm:text-xs text-warm">{it.cat}</span>
                <span className="h-px w-8 bg-signal" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
