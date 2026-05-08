import { Wifi } from "lucide-react";

export function WifiPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span className="absolute inline-flex h-32 w-32 rounded-full bg-[oklch(0.72_0.2_240/0.25)] animate-wave" />
      <span className="absolute inline-flex h-32 w-32 rounded-full bg-[oklch(0.78_0.18_200/0.25)] animate-wave [animation-delay:0.8s]" />
      <span className="absolute inline-flex h-32 w-32 rounded-full bg-[oklch(0.62_0.25_295/0.2)] animate-wave [animation-delay:1.6s]" />
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow animate-pulse-glow">
        <Wifi className="h-10 w-10 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
  );
}
