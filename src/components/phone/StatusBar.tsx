import { BatteryFull, Signal, Wifi } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between px-7 pt-1 text-[13px] font-semibold">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Signal className="size-3.5" strokeWidth={2.5} />
        <Wifi className="size-3.5" strokeWidth={2.5} />
        <BatteryFull className="size-[18px]" strokeWidth={2} />
      </span>
    </div>
  );
}
