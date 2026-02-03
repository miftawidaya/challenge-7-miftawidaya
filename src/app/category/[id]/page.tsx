'use client';

/**
 * Category Page
 * Matches specifications for the filtered view.
 */

import * as React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { FilterContent } from '@/components/home/FilterContent';
import { RestaurantGrid } from '@/components/menu/RestaurantGrid';
import { useRestaurants } from '@/services/queries';
import { Button } from '@/components/ui/button';
import { useLocation } from '@/context/LocationContext';
import {
  RECOMMENDED_INITIAL_COUNT,
  RECOMMENDED_LOAD_INCREMENT,
} from '@/config/constants';
import { FilterSheet } from '@/components/home/FilterSheet';
import { FilterLines } from '@untitledui/icons';
import { cn } from '@/lib/utils';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';

export default function CategoryPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const categoryId = typeof id === 'string' ? id : 'all';
  const {
    latitude,
    longitude,
    isLoading: isLoadingLocation,
    requestLocation,
  } = useLocation();

  const { minPrice, maxPrice, rating, distance } = useSelector(
    (state: RootState) => state.filter
  );

  // Automatically request location if "nearby" is selected
  React.useEffect(() => {
    if (categoryId === 'nearby') {
      requestLocation();
    }
  }, [categoryId, requestLocation]);

  const { data: restaurants, isLoading: isLoadingData } = useRestaurants(
    {
      ...(categoryId !== 'all' && { category: categoryId }),
      ...(latitude !== null && { lat: latitude }),
      ...(longitude !== null && { lng: longitude }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
      ...(rating && { rating }),
      ...(distance && { distanceFilter: distance }), // renamed to avoid conflict with numeric distance
      ...(search && { search }),
    },
    { enabled: !isLoadingLocation }
  );

  const isLoading = isLoadingLocation || isLoadingData;

  const getCategoryLabel = (id: string) => {
    if (id === 'all') return 'All Restaurant';
    // Mapping other IDs if needed, or just capitalize
    return id
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const [visibleCount, setVisibleCount] = React.useState(
    RECOMMENDED_INITIAL_COUNT
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + RECOMMENDED_LOAD_INCREMENT);
  };

  const visibleRestaurants = restaurants?.slice(0, visibleCount);
  const hasMore = restaurants && visibleCount < restaurants.length;
  const isListLongEnough =
    restaurants && restaurants.length >= RECOMMENDED_INITIAL_COUNT;

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  return (
    <div className='flex flex-col pt-24 pb-20 md:pt-32 md:pb-40'>
      <FilterSheet isOpen={isFilterOpen} onOpenChange={setIsFilterOpen} />

      <div className='custom-container mx-auto flex flex-col'>
        {/* Title (Above the split) */}
        <div className='mb-8 md:mb-12'>
          <h2 className='text-display-xs md:text-display-sm font-extrabold text-neutral-950'>
            {getCategoryLabel(categoryId)}
          </h2>
        </div>

        {/* Mobile Filter Trigger */}
        <button
          type='button'
          onClick={() => setIsFilterOpen(true)}
          className={cn(
            'shadow-card bg-base-white relative mb-10 flex h-13 w-full items-center justify-center rounded-xl transition-transform active:scale-95 lg:hidden'
          )}
        >
          <span className='px-6 text-sm font-extrabold text-neutral-950'>
            Filter
          </span>
          <div className='absolute end-4'>
            <FilterLines
              className='size-5 text-neutral-950'
              strokeWidth={2.5}
            />
          </div>
        </button>

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
                restaurants={visibleRestaurants}
                isLoading={isLoading}
                columns={2}
              />

              {/* Pagination Logic */}
              {isListLongEnough && (
                <div className='mt-4 flex min-h-10 items-center justify-center md:mt-8 md:min-h-12'>
                  {hasMore ||
                  (visibleCount === RECOMMENDED_INITIAL_COUNT &&
                    isListLongEnough) ? (
                    <Button
                      variant='outline'
                      onClick={handleShowMore}
                      className='md:text-md h-10 w-40 text-sm leading-7 md:h-12 md:leading-7.5'
                    >
                      Show More
                    </Button>
                  ) : (
                    <p className='text-md font-medium text-neutral-500 italic'>
                      No more restaurants to show
                    </p>
                  )}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
