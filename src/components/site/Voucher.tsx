import { useState } from "react";
import { Phone, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";

const packages = [
  { id: "2h", label: "2-Hour Pass — GHS 2" },
  { id: "1d", label: "Daily Unlimited — GHS 5" },
  { id: "7d", label: "Weekly Plan — GHS 25" },
  { id: "30d", label: "Monthly Unlimited — GHS 80" },
];

const networks = [
  { id: "mtn", label: "MTN MoMo", color: "oklch(0.85 0.15 85)" },
  { id: "telecel", label: "Telecel Cash", color: "oklch(0.7 0.22 25)" },
  { id: "at", label: "AirtelTigo Money", color: "oklch(0.7 0.18 250)" },
];

export function Voucher() {
  const [pkg, setPkg] = useState("1d");
  const [net, setNet] = useState("mtn");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="voucher" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Voucher</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Buy your <span className="text-gradient">WiFi voucher</span></h2>
          <p className="mt-3 text-muted-foreground">Pay with Mobile Money. Receive your voucher code instantly via SMS and connect at any JOMENS WIFI hotspot.</p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-success" /> Secure payment via Paystack</li>
            <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-accent" /> Works on any Android or iPhone</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-violet" /> SMS delivery within seconds</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="glass neon-border rounded-3xl p-6 shadow-card"
        >
          <label className="block text-xs text-muted-foreground">Phone number</label>
          <div className="mt-1 flex items-center gap-2 rounded-xl bg-input px-3 py-2.5">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="024 000 0000"
              className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
          </div>

          <label className="mt-4 block text-xs text-muted-foreground">Select package</label>
          <div className="mt-1 grid gap-2">
            {packages.map((p) => (
              <button
                type="button"
                key={p.id}
                onClick={() => setPkg(p.id)}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                  pkg === p.id ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-secondary/40 hover:bg-secondary/60"
                }`}
              >
                {p.label}
                {pkg === p.id && <ArrowRight className="h-4 w-4" />}
              </button>
            ))}
          </div>

          <label className="mt-4 block text-xs text-muted-foreground">Mobile Money network</label>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {networks.map((n) => (
              <button
                type="button"
                key={n.id}
                onClick={() => setNet(n.id)}
                className={`rounded-xl px-2 py-3 text-xs font-semibold transition ${
                  net === n.id ? "bg-gradient-cyan text-primary-foreground shadow-glow-cyan" : "bg-secondary/40 hover:bg-secondary/60"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90"
          >
            Pay & Get Voucher <ArrowRight className="h-4 w-4" />
          </button>

          {submitted && (
            <div className="mt-4 rounded-xl bg-success/10 border border-success/30 px-3 py-2 text-xs text-success">
              Payment request sent. Check your phone to approve and receive your voucher via SMS.
            </div>
          )}

          <p className="mt-3 text-[11px] text-muted-foreground text-center">Demo interface — payments not yet wired.</p>
        </form>
      </div>
    </section>
  );
}
