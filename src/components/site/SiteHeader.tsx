import { Link } from "@tanstack/react-router";
import { Wifi, MapPin, Ticket, LayoutGrid, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#locations", label: "Locations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#voucher", label: "Voucher" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-glass-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Wifi className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide text-foreground">JOMENS WIFI</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Fast • Affordable</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#voucher" className="rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
              Buy Voucher
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden glass rounded-xl p-2" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-glass-border px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

const bottomNav = [
  { href: "#hero", label: "Home", Icon: Wifi },
  { href: "#locations", label: "Spots", Icon: MapPin },
  { href: "#voucher", label: "Buy", Icon: Ticket },
  { href: "#portal", label: "Portal", Icon: LayoutGrid },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
      <div className="glass rounded-2xl shadow-card px-2 py-2 flex items-center justify-around">
        {bottomNav.map(({ href, label, Icon }) => (
          <a key={href} href={href} className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition">
            <Icon className="h-5 w-5" />
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
