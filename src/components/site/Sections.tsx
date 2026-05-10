import { useState } from "react";
import { ChevronDown, Star, Package, Smartphone, Wifi, MessageCircle, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const steps = [
  { Icon: Package, title: "Choose a package", desc: "Pick a plan that fits your day, week or month." },
  { Icon: Smartphone, title: "Pay with Mobile Money", desc: "MTN, Telecel or AirtelTigo — fast & secure." },
  { Icon: Wifi, title: "Connect instantly", desc: "Get your voucher via SMS and start browsing." },
];

const reviews = [
  { name: "Akosua M.", role: "Student, KOSTECH", text: "Reliable and super fast. I stream lectures and YouTube without buffering.", rating: 5 },
  { name: "Kwame O.", role: "Trader, Market Circle", text: "The daily plan is so affordable. Customer support is really helpful.", rating: 5 },
  { name: "Ama D.", role: "Resident, Hostel Zone", text: "Voucher came in seconds. JOMENS WIFI changed how I study at night.", rating: 4 },
];

const faqs = [
  { q: "How do I connect to JOMENS WIFI?", a: "Buy a voucher, connect to the JOMENS WIFI network, then enter your code on the portal page." },
  { q: "How long does activation take?", a: "Vouchers are sent via SMS within seconds of payment confirmation." },
  { q: "Can multiple devices connect?", a: "Yes — depending on your plan, 1 to 3 devices can use the same voucher." },
  { q: "What happens after expiration?", a: "You'll be disconnected automatically. Buy a new voucher anytime to reconnect." },
];

export function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">How it works</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Online in <span className="text-gradient">3 steps</span></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={title} className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-7xl font-extrabold text-foreground/5">{i + 1}</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-4 font-semibold text-lg">{title}</div>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">Reviews</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Loved by our <span className="text-gradient">community</span></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-warning text-warning" : "text-muted"}`} />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">FAQ</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Got <span className="text-gradient">questions?</span></h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-4 text-sm text-muted-foreground animate-fade-up">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Contact</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Talk to <span className="text-gradient">JOMENS WIFI</span></h2>
          <p className="mt-3 text-muted-foreground">Need help connecting or buying a voucher? We're a message away.</p>

          <div className="mt-6 grid gap-3">
            <a href="https://wa.me/233559857728" className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-secondary/60 transition">
              <MessageCircle className="h-5 w-5 text-success" /> Chat on WhatsApp
            </a>
            <a href="tel:+233559857728" className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-secondary/60 transition">
              <Phone className="h-5 w-5 text-accent" /> Call support
            </a>
            <a href="mailto:hello@jomenswifi.com" className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-secondary/60 transition">
              <Mail className="h-5 w-5 text-violet" /> hello@jomenswifi.com
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="glass rounded-xl p-2.5 hover:bg-secondary/60"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="glass rounded-xl p-2.5 hover:bg-secondary/60"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="glass rounded-xl p-2.5 hover:bg-secondary/60"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="glass neon-border rounded-3xl overflow-hidden h-72 md:h-full min-h-[280px] relative">
          <div className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.7_0.22_245/0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7_0.22_245/0.18) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            Embedded coverage map placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
