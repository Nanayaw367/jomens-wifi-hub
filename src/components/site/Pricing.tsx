import { Check, Zap, Smartphone } from "lucide-react";

const plans = [
  { name: "2-Hour Pass", price: 2, duration: "2 hours", speed: "10 Mbps", devices: 1 },
  { name: "Daily Unlimited", price: 5, duration: "24 hours", speed: "20 Mbps", devices: 2, popular: true },
  { name: "Weekly Plan", price: 25, duration: "7 days", speed: "20 Mbps", devices: 2 },
  { name: "Monthly Unlimited", price: 80, duration: "30 days", speed: "30 Mbps", devices: 3 },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Pricing</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Internet plans for <span className="text-gradient">everyone</span></h2>
          <p className="mt-3 text-muted-foreground">Pay with Mobile Money. No contracts. Connect anywhere we have coverage.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative glass rounded-2xl p-6 transition-transform hover:-translate-y-1 ${p.popular ? "neon-border shadow-glow" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
                  Most Popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gradient">GHS {p.price}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{p.duration}</div>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> {p.speed} speed</li>
                <li className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-accent" /> {p.devices} device{p.devices > 1 ? "s" : ""}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Auto reconnect</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> SMS voucher delivery</li>
              </ul>

              <a
                href="#voucher"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  p.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                    : "glass hover:bg-secondary/60"
                }`}
              >
                Buy Now
              </a>

              <div className="mt-3 flex items-center justify-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="rounded-full bg-secondary/60 px-2 py-0.5">MoMo</span>
                <span className="rounded-full bg-secondary/60 px-2 py-0.5">Telecel</span>
                <span className="rounded-full bg-secondary/60 px-2 py-0.5">AT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
