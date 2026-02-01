'use client';

import * as React from 'react';
import { RestaurantCard, RestaurantCardSkeleton } from './RestaurantCard';
import { Restaurant } from '@/types';
import { cn } from '@/lib/utils';

interface RestaurantGridProps {
  restaurants?: Restaurant[];
  isLoading?: boolean;
  className?: string;
  columns?: number;
}

export function RestaurantGrid({
  restaurants,
  isLoading,
  className,
  columns = 4,
}: RestaurantGridProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          'grid gap-6',
          columns === 4
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2',
          className
        )}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <RestaurantCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!restaurants?.length) {
    return (
      <div className='flex flex-col items-center justify-center py-20 text-center'>
        <p className='text-lg font-bold text-neutral-950'>
          No restaurant found
        </p>
        <p className='text-sm text-neutral-500'>
          Try adjusting your filters or search.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 4
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3',
        className
      )}
    >
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
