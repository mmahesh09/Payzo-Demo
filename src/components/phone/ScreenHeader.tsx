import { ChevronLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface ScreenHeaderProps {
  title: string;
  hasBackButton?: boolean;
  trailing?: ReactNode;
}

export function ScreenHeader({ title, hasBackButton = false, trailing }: ScreenHeaderProps) {
  return (
    <div className="flex h-9 shrink-0 items-center gap-2">
      {hasBackButton ? (
        <span className="grid size-8 place-items-center rounded-full bg-white ring-1 ring-line">
          <ChevronLeft className="size-4" />
        </span>
      ) : null}
      <p className="flex-1 text-[19px] font-bold tracking-[-0.02em]">{title}</p>
      {trailing}
    </div>
  );
}
