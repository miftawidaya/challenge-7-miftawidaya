'use client';

/**
 * Category Page
 * Matches specifications for the filtered view.
 */

import * as React from 'react';
import { useParams } from 'next/navigation';
import { FilterContent } from '@/components/home/FilterContent';
import { RestaurantGrid } from '@/components/menu/RestaurantGrid';
import { useRestaurants } from '@/services/queries';

export default function CategoryPage() {
  const { id } = useParams();
  const categoryId = typeof id === 'string' ? id : 'all';
  const { data: restaurants, isLoading } = useRestaurants({
    category: categoryId,
  });

  const getCategoryLabel = (id: string) => {
    if (id === 'all') return 'All Restaurant';
    // Mapping other IDs if needed, or just capitalize
    return id
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='flex flex-col pt-24 pb-20 md:pt-32 md:pb-40'>
      <div className='custom-container mx-auto flex flex-col'>
        {/* Judul (Above the split) */}
        <div className='mb-8 md:mb-12'>
          <h2 className='text-display-xs md:text-display-sm font-extrabold text-neutral-950'>
            {getCategoryLabel(categoryId)}
          </h2>
        </div>

        <div className='flex flex-col gap-10 lg:flex-row'>
          {/* 2. Left Sidebar Filter - Persistent on this page */}
          <aside className='hidden w-full max-w-(--width-sidebar-desktop) shrink-0 lg:block'>
            <div className='shadow-card sticky top-24 rounded-2xl border border-neutral-100 bg-white p-6'>
              <FilterContent />
            </div>
          </aside>

          {/* 3. Main Content Column (Filtered Grid) */}
          <main className='flex flex-1 flex-col'>
            <section>
              <RestaurantGrid
                restaurants={restaurants}
                isLoading={isLoading}
                columns={2}
              />

              {/* Show More Button */}
              <div className='mt-12 flex justify-center'>
                <button
                  type='button'
                  className='rounded-xl border border-neutral-200 px-8 py-3 text-sm font-bold text-neutral-900 transition-colors hover:bg-neutral-50'
                >
                  Show More
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
