import { Wifi, Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative pt-16 pb-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-3xl p-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Wifi className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="font-bold tracking-wide">JOMENS WIFI</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Fast, affordable hotspot internet across communities in Ghana.</p>
            <div className="mt-4 flex gap-2">
              <a href="#" className="glass rounded-lg p-2 hover:bg-secondary/60"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="glass rounded-lg p-2 hover:bg-secondary/60"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="glass rounded-lg p-2 hover:bg-secondary/60"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Navigate</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-foreground">Home</a></li>
              <li><a href="#locations" className="hover:text-foreground">Locations</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#voucher" className="hover:text-foreground">Buy Voucher</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Hotspots</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>KOSTECH Campus</li>
              <li>Asuogya Junction</li>
              <li>Market Circle</li>
              <li>Hostel Zone</li>
              <li>Community Center</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JOMENS WIFI. All rights reserved. Built for Ghana.
        </div>
      </div>
    </footer>
  );
}
