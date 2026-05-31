import { motion } from "framer-motion";
import { Truck, Award, Wrench, Shield, Users, Cpu, Palette, LifeBuoy } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  { i: Truck, t: "Fast Delivery", d: "Production timelines you can plan around." },
  { i: Award, t: "Commercial Quality", d: "Materials and finish built for the long haul." },
  { i: Wrench, t: "Expert Installation", d: "Professional mounting and on-site fitting." },
  { i: Shield, t: "Durable Materials", d: "Weather-tested vinyl, ACP and acrylic." },
  { i: Users, t: "Experienced Team", d: "A decade of signage execution in Nagpur." },
  { i: Cpu, t: "Modern Machinery", d: "Latest large-format printing equipment." },
  { i: Palette, t: "Custom Branding", d: "Design solutions tailored to your brand." },
  { i: LifeBuoy, t: "End-to-End Service", d: "Concept → Print → Install → Support." },
];

export function Trust() {
  return (
    <section className="relative bg-carbon py-20 sm:py-28 border-t border-border">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-xs text-signal">Why Pyramid</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-warm leading-[0.95]">
            WHY BUSINESSES <span className="text-signal">TRUST</span> US
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => {
            const Icon = it.i;
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: (i % 4) * 0.06 }}
                className="group bg-card border border-border p-6 hover:border-signal/60 hover:-translate-y-1 transition-all hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.35)]"
              >
                <Icon className="h-7 w-7 text-signal" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-lg text-warm uppercase tracking-wide">{it.t}</h3>
                <p className="mt-2 text-sm text-warm/55 leading-relaxed">{it.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
