import { MapPin, Signal, Wifi, Map } from "lucide-react";

const HOTSPOT_URL = "https://kostechcampuswifi.sopraent.com/hotspot";

const locations = [
  { name: "KOSTECH Campus", desc: "Full coverage across lecture halls & hostels", slug: "kostech", status: "online", strength: 5, url: HOTSPOT_URL },
  { name: "Asuogya Junction", desc: "High-traffic stop with wide outdoor coverage", slug: "asuogya", status: "online", strength: 4, url: HOTSPOT_URL },
  { name: "Market Circle", desc: "Reliable WiFi for traders and shoppers", slug: "market", status: "online", strength: 4, url: HOTSPOT_URL },
];

function Bars({ n }: { n: number }) {
  return (
    <div className="flex items-end gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`w-1 rounded-sm ${i <= n ? "bg-gradient-cyan" : "bg-muted"}`}
          style={{ height: `${i * 3 + 4}px` }}
        />
      ))}
    </div>
  );
}

export function Locations() {
  return (
    <section id="locations" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Coverage</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Our WiFi <span className="text-gradient">Locations</span></h2>
          <p className="mt-3 text-muted-foreground">Tap any spot to connect to its dedicated hotspot portal.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => {
            const online = loc.status === "online";
            return (
              <a
                key={loc.slug}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass neon-border rounded-2xl p-5 transition-transform hover:-translate-y-1 hover:shadow-glow block cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <Wifi className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">JOMENS WIFI</div>
                      <div className="font-semibold">{loc.name}</div>
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold rounded-full px-2 py-1 ${online ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                    {online ? "● Online" : "● Offline"}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{loc.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Signal className="h-4 w-4 text-accent" /> Signal
                    <Bars n={loc.strength} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> Ghana
                  </div>
                </div>

                {/* map placeholder */}
                <div className="mt-4 relative h-24 overflow-hidden rounded-xl bg-secondary/40 border border-glass-border">
                  <div className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.7_0.22_245/0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7_0.22_245/0.18) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground gap-1">
                    <Map className="h-4 w-4" /> Map preview
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary/40 border border-glass-border px-3 py-2 group-hover:bg-secondary/60 transition-colors">
                  <code className="text-[11px] text-muted-foreground truncate">{loc.url}</code>
                  <span className="text-[11px] text-accent inline-flex items-center gap-1 shrink-0 ml-2">
                    <MapPin className="h-3.5 w-3.5" /> Hotspot
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
