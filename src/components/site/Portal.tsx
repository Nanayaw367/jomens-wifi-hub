import { Ticket, LogIn, Search, RotateCw, QrCode, Gauge, Activity, Map } from "lucide-react";

const items = [
  { Icon: Ticket, title: "Already Have Voucher?", desc: "Redeem your code to start browsing." },
  { Icon: LogIn, title: "Login to Hotspot", desc: "Sign in to your nearest spot." },
  { Icon: Search, title: "Check Voucher Status", desc: "See remaining time & data." },
  { Icon: RotateCw, title: "Reconnect Device", desc: "Drop a session and reconnect fast." },
];

const advanced = [
  { Icon: Activity, title: "Real-time Status", desc: "Live hotspot health" },
  { Icon: Gauge, title: "Speed Test", desc: "Test your connection" },
  { Icon: QrCode, title: "QR Login", desc: "Scan to connect" },
  { Icon: Map, title: "Coverage Map", desc: "Find nearest spot" },
];

export function Portal() {
  return (
    <section id="portal" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">Quick Access</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Your <span className="text-gradient">portal</span></h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, desc }) => (
            <button key={title} className="group glass rounded-2xl p-5 text-left transition-transform hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 font-semibold">{title}</div>
              <div className="text-sm text-muted-foreground">{desc}</div>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold">Advanced tools</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {advanced.map(({ Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cyan shadow-glow-cyan">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
