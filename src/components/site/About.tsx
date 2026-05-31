import { motion } from "framer-motion";
import led from "@/assets/gallery-led.jpg";
import flex from "@/assets/gallery-flex.jpg";
import acp from "@/assets/gallery-acp.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { v: "10+", l: "Years Experience" },
  { v: "687+", l: "Happy Clients" },
  { v: "100%", l: "Corporate Vendor" },
  { v: "24h", l: "Fast Turnaround" },
];

export function About() {
  return (
    <section id="about" className="bg-warm text-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-xs text-signal">About</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl leading-[0.95]">
            ABOUT PYRAMID GRAPHICS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-carbon/70">
            Nagpur's trusted printing and signage partner for premium commercial branding solutions.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-5 text-[15px] sm:text-base leading-relaxed text-carbon/80">
            <p>
              Welcome to <strong className="text-carbon">Pyramid Graphics Flex Banner Printing</strong>, your trusted printing and signage partner in Nagpur, Maharashtra. With over a <span className="text-signal font-semibold">decade of experience</span>, we specialize in LED Acrylic Letter Signage, ACP Letter Signages, Neon Letter Signages, T-Shirt Printing, Banner Printing, Vinyl Printing, and customized branding solutions.
            </p>
            <p>
              We have proudly served hundreds of satisfied customers through <span className="text-signal font-semibold">premium quality</span> production, modern machinery, durable materials, and professional service. From commercial signboards to large-format branding materials, we help businesses create a <span className="text-signal font-semibold">powerful visual presence</span> that stands out.
            </p>
            <p>
              Our focus is simple — premium quality, reliable execution, fast delivery, and branding solutions that make businesses impossible to ignore.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3 h-[320px] sm:h-[420px]">
            <motion.img
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              src={led} alt="LED signage" className="row-span-2 h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <motion.img
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.1 }}
              src={flex} alt="Flex printing" className="col-span-2 h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <motion.img
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.2 }}
              src={acp} alt="ACP signage" className="col-span-2 h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-carbon/10 border border-carbon/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-warm p-6 sm:p-8">
              <div className="font-display text-4xl sm:text-5xl text-carbon">{s.v}</div>
              <div className="mt-2 label-track text-[11px] text-carbon/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
