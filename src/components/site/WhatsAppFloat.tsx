import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/917058776655?text=Hi%20Pyramid%20Graphics%2C%20I%27d%20like%20a%20quote.";

export function WhatsAppFloat() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white wa-pulse hover:scale-105 transition-transform shadow-lg"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden sm:inline">Chat With Us</span>
    </a>
  );
}

export const WHATSAPP_URL = WA;
