import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import cta from "@/assets/cta-bg.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cta} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/90 via-carbon/80 to-carbon" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-signal" />
            <span className="label-track text-xs text-signal">Get in Touch</span>
            <span className="h-px w-10 bg-signal" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-warm leading-[0.95]">
            READY TO MAKE
            <br />
            YOUR <span className="text-signal">BRAND</span> STAND OUT?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-warm/70 max-w-2xl mx-auto">
            Let's build signage and branding that gets your business noticed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 label-track text-xs sm:text-sm hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 bg-signal text-carbon px-6 py-4 label-track text-xs sm:text-sm signal-glow hover:scale-[1.02] transition-transform"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const fd = new FormData(f);
            const msg = `Hi Pyramid Graphics, I'd like a quote.%0A%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ABusiness: ${fd.get("biz")}%0ARequirement: ${fd.get("req")}`;
            window.open(`https://wa.me/917058776655?text=${msg}`, "_blank");
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-14 max-w-2xl mx-auto bg-card/80 backdrop-blur border border-border p-6 sm:p-8 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="phone" label="Phone" placeholder="+91…" type="tel" />
            <Field name="biz" label="Business Type" placeholder="Retail, Corporate…" />
            <Field name="req" label="Requirement" placeholder="LED sign, flex banner…" />
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-signal text-carbon py-4 label-track text-xs sm:text-sm signal-glow hover:scale-[1.01] transition-transform"
          >
            Send via WhatsApp <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="label-track text-[10px] text-warm/60">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border border-border focus:border-signal outline-none px-3 py-3 text-sm text-warm placeholder:text-warm/30 transition-colors"
      />
    </label>
  );
}
