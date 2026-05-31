import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-7 w-7 bg-signal" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
            <span className="font-display text-xl tracking-wider">PYRAMID GRAPHICS</span>
          </div>
          <p className="text-sm text-warm/55 leading-relaxed">
            Premium printing and signage production studio. Helping Nagpur businesses build powerful visual presence since 2014.
          </p>
        </div>

        <div>
          <h4 className="label-track text-[11px] text-signal mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-warm/70">
            {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-signal transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-track text-[11px] text-signal mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-warm/70">
            <li>LED Acrylic Signage</li>
            <li>ACP Letter Signage</li>
            <li>Flex Banner Printing</li>
            <li>Vinyl & T-Shirt Print</li>
            <li>Corporate Branding</li>
          </ul>
        </div>

        <div>
          <h4 className="label-track text-[11px] text-signal mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-warm/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-signal mt-0.5" /> +91 7058776655</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-signal mt-0.5" /> Nagpur, Maharashtra</li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-signal mt-0.5" /> Mon–Sat · 10:00 – 20:00</li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 border border-warm/20 px-3 py-2 hover:border-[#25D366] hover:text-[#25D366] transition-colors label-track text-[11px]">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-warm/40">
        <span>© {new Date().getFullYear()} Pyramid Graphics · Nagpur</span>
        <span className="italic">Designed for businesses that want visibility.</span>
      </div>
    </footer>
  );
}
