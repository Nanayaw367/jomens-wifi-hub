import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, MobileBottomNav } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Locations } from "@/components/site/Locations";
import { HowItWorks, Testimonials, Faq, Contact } from "@/components/site/Sections";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOMENS WIFI — Fast & Affordable Hotspot Internet in Ghana" },
      { name: "description", content: "Connect to JOMENS WIFI hotspots across Ghana. Buy a voucher with Mobile Money and stay online — fast, affordable, reliable." },
      { property: "og:title", content: "JOMENS WIFI — Fast & Affordable Hotspot Internet" },
      { property: "og:description", content: "Reliable community WiFi across Ghana. Pay with MoMo, connect instantly." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Locations />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}
