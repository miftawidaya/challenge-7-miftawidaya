'use client';

/**
 * FilterContent Component
 *
 * The core filter logic and UI shared between the Mobile Sheet and Desktop Sidebar.
 * Matches specifications for Distance, Price, and Rating sections.
 */

import * as React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

type FilterContentProps = Readonly<{
  className?: string;
  showTitle?: boolean;
}>;

export function FilterContent({
  className,
  showTitle = true,
}: FilterContentProps) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      {showTitle && (
        <h3 className='text-display-xs font-extrabold tracking-tight text-neutral-950 uppercase'>
          FILTER
        </h3>
      )}

      {/* Distance Filter */}
      <FilterGroup title='Distance'>
        {['Nearby', 'Within 1 km', 'Within 3 km', 'Within 5 km'].map((dist) => (
          <FilterOption
            key={dist}
            label={dist}
            isSelected={dist === 'Nearby'}
          />
        ))}
      </FilterGroup>

      {/* Divider for Desktop Sidebar look */}
      <div className='h-px w-full bg-neutral-100 md:hidden' />

      {/* Price Filter */}
      <FilterGroup title='Price'>
        <div className='flex flex-col gap-3'>
          <div className='relative'>
            <div className='absolute top-1/2 left-2 flex h-8 w-(--width-price-prefix) -translate-y-1/2 items-center justify-center rounded-md bg-neutral-100 text-sm font-bold text-neutral-950'>
              Rp
            </div>
            <Input
              placeholder='Minimum Price'
              className='focus-visible:ring-brand-primary/20 pl-price-input-left h-12 border-neutral-300 text-sm font-medium placeholder:text-neutral-400 focus-visible:ring-1'
            />
          </div>
          <div className='relative'>
            <div className='absolute top-1/2 left-2 flex h-8 w-(--width-price-prefix) -translate-y-1/2 items-center justify-center rounded-md bg-neutral-100 text-sm font-bold text-neutral-950'>
              Rp
            </div>
            <Input
              placeholder='Maximum Price'
              className='focus-visible:ring-brand-primary/20 pl-price-input-left h-12 border-neutral-300 text-sm font-medium placeholder:text-neutral-400 focus-visible:ring-1'
            />
          </div>
        </div>
      </FilterGroup>

      {/* Divider */}
      <div className='h-px w-full bg-neutral-100 md:hidden' />

      {/* Rating Filter */}
      <FilterGroup title='Rating'>
        {[5, 4, 3, 2, 1].map((star) => (
          <FilterOption key={star} label={star.toString()} isRating />
        ))}
      </FilterGroup>
    </div>
  );
}

type FilterGroupProps = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-md font-bold text-neutral-950'>{title}</h4>
      <div className='flex flex-col gap-4'>{children}</div>
    </div>
  );
}

type FilterOptionProps = Readonly<{
  label: string;
  isSelected?: boolean;
  isRating?: boolean;
}>;

function FilterOption({
  label,
  isSelected = false,
  isRating = false,
}: FilterOptionProps) {
  const [active, setActive] = React.useState(isSelected);

  return (
    <button
      type='button'
      onClick={() => setActive(!active)}
      className='group flex cursor-pointer items-center gap-3 outline-none'
    >
      {/* Checkbox Box */}
      <div
        className={cn(
          'flex size-5 shrink-0 items-center justify-center rounded border transition-all',
          active
            ? 'bg-brand-primary border-brand-primary shadow-sm'
            : 'border-neutral-300 bg-white group-hover:border-neutral-400'
        )}
      >
        {active && (
          <Icon
            icon='heroicons:check-16-solid'
            className='size-3.5 text-white'
            strokeWidth={2}
          />
        )}
      </div>

      {/* Label with optional Rating Star */}
      <div className='flex items-center gap-2'>
        {isRating && (
          <Icon icon='ri:star-fill' className='text-rating size-5' />
        )}
        <span
          className={cn(
            'text-sm transition-colors',
            active ? 'font-semibold text-neutral-950' : 'text-neutral-600'
          )}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
