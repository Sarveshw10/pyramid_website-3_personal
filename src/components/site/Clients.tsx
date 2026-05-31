import { motion } from "framer-motion";

const clients = ["Hindustan Petroleum", "HPCL", "Superior Drinks", "Duratuff"];

export function Clients() {
  return (
    <section className="bg-warm text-carbon py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-xs text-signal">Trusted By</span>
            <span className="h-px w-10 bg-signal" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1]">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-carbon/10 border border-carbon/10">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-warm p-8 sm:p-10 flex items-center justify-center text-center hover:bg-carbon hover:text-warm transition-colors duration-500 group"
            >
              <span className="font-display text-xl sm:text-2xl tracking-wider text-carbon/70 group-hover:text-signal transition-colors">
                {c}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-carbon/65 text-sm sm:text-base leading-relaxed">
          From fuel stations to commercial brands, Pyramid Graphics has helped businesses across Nagpur create impactful signage and branding solutions with dependable quality and professional execution.
        </p>
      </div>
    </section>
  );
}
