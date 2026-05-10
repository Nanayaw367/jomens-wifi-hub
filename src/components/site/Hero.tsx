import { MapPin, Activity, Users, Signal } from "lucide-react";
import { WifiPulse } from "./WifiPulse";

const stats = [
  { Icon: Users, value: "12,400+", label: "Active users" },
  { Icon: MapPin, value: "18", label: "Hotspot locations" },
  { Icon: Activity, value: "99.7%", label: "Network uptime" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* floating glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[oklch(0.7_0.22_245/0.35)] blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-40 -right-16 h-72 w-72 rounded-full bg-[oklch(0.62_0.25_295/0.3)] blur-3xl animate-float [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.78_0.18_200/0.25)] blur-3xl animate-float [animation-delay:3s]" />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up">
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Fast & Affordable <span className="text-gradient">WiFi Internet</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
              Reliable hotspot internet at multiple JOMENS WIFI locations across Ghana.
              Discover the closest spot and stay online.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#locations" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                <MapPin className="h-4 w-4" /> View Locations
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="glass rounded-2xl p-3 md:p-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="mt-2 text-lg md:text-2xl font-bold">{value}</div>
                  <div className="text-[11px] md:text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[340px] md:h-[460px] flex items-center justify-center animate-fade-up [animation-delay:0.15s]">
            <WifiPulse />
            {/* orbit cards */}
            <div className="absolute top-6 left-2 glass rounded-2xl px-3 py-2 text-xs animate-float">
              <div className="flex items-center gap-2"><Signal className="h-4 w-4 text-success" /> Signal Excellent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
