import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import led from "@/assets/gallery-led.jpg";
import flex from "@/assets/gallery-flex.jpg";
import acp from "@/assets/gallery-acp.jpg";
import neon from "@/assets/gallery-neon.jpg";
import tshirt from "@/assets/gallery-tshirt.jpg";
import standee from "@/assets/gallery-standee.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  { n: "01", t: "LED Signages", d: "Illuminated acrylic letter signs with premium LED modules for brilliant night visibility.", img: led },
  { n: "02", t: "Flex Banner Printing", d: "Wide-format flex banners for hoardings, events, and outdoor commercial branding.", img: flex },
  { n: "03", t: "Acrylic & ACP Boards", d: "Brushed metal and acrylic letter boards for premium corporate facades.", img: acp },
  { n: "04", t: "Neon Letter Signage", d: "Custom neon and retro-modern signs that turn storefronts into landmarks.", img: neon },
  { n: "05", t: "Vinyl & T-Shirt Printing", d: "Vibrant vinyl prints and custom branded apparel for teams and events.", img: tshirt },
  { n: "06", t: "Roll-Up Standees", d: "Premium roll-up banners and corporate branding collateral for events.", img: standee },
];

export function Services() {
  return (
    <section id="services" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-signal" />
              <span className="label-track text-xs text-signal">What We Do</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-warm leading-[0.95]">OUR SERVICES</h2>
          </div>
          <p className="max-w-md text-warm/60 text-sm sm:text-base">
            End-to-end signage and printing — from design and production to expert installation across Nagpur.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <motion.a
              key={s.t}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
              className="group relative bg-carbon overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
                <div className="absolute top-4 left-4 label-track text-[10px] text-signal">{s.n}</div>
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-warm/70 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl sm:text-3xl text-warm group-hover:text-signal transition-colors">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm text-warm/60 leading-relaxed">{s.d}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
