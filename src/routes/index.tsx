import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { Gallery } from "@/components/site/Gallery";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pyramid Graphics — Premium Signage & Printing in Nagpur" },
      { name: "description", content: "Premium LED signages, flex banners, acrylic boards, vinyl & t-shirt printing in Nagpur. 10+ years, 687+ clients. Get a quote on WhatsApp." },
      { property: "og:title", content: "Pyramid Graphics — Premium Signage & Printing" },
      { property: "og:description", content: "LED, ACP, Neon signage & commercial printing studio in Nagpur, Maharashtra." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-carbon text-warm">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Trust />
      <Gallery />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
