'use client';

/**
 * FilterSheet Component
 *
 * A responsive wrapper for FilterContent that displays as a Sheet on mobile/tablet.
 * On desktop, this component is generally not used as the filter is persistent in the sidebar.
 */

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { FilterContent } from './FilterContent';
import { cn } from '@/lib/utils';

interface FilterSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterSheet({
  isOpen,
  onOpenChange,
}: Readonly<FilterSheetProps>) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side='left'
        className={cn('flex flex-col border-none p-0', 'w-full sm:max-w-md')}
      >
        {/* Scrollable area for filters */}
        <div className='flex-1 overflow-y-auto p-6'>
          <FilterContent />
        </div>

        {/* Action Buttons at bottom for Mobile Sheet */}
        <div className='flex items-center gap-3 border-t border-neutral-100 p-6'>
          <button
            type='button'
            className='flex-1 rounded-xl border border-neutral-200 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-neutral-50'
            onClick={() => onOpenChange(false)}
          >
            Clear All
          </button>
          <button
            type='button'
            className='bg-brand-primary flex-1 rounded-xl py-3 text-sm font-bold text-white transition-opacity hover:opacity-90'
            onClick={() => onOpenChange(false)}
          >
            Apply
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
