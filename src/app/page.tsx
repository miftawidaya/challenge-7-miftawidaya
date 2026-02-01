'use client';

/**
 * Home Page
 * @description The main landing page of the Restaurant App.
 * Features HeroSection with search, CategoryFilter, and RestaurantGrid.
 */

import * as React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryFilter } from '@/components/home/CategoryFilter';

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* 1. Hero Section - Persistent on home */}
      <HeroSection />

      {/* 2. Main Content Area */}
      <div className='custom-container mx-auto mt-12 flex flex-col pb-20 md:pb-40'>
        {/* Category Filter - Entry point for navigation */}
        <CategoryFilter />

        {/* 3. Restaurant Grid Area - Full Width for Home */}
        <main className='mt-10 flex flex-col gap-10'>
          <section>
            <div className='mb-8 flex items-center justify-between'>
              <h2 className='text-display-xs font-extrabold text-neutral-950'>
                Recommended
              </h2>
              <button
                type='button'
                className='text-brand-primary text-sm font-bold hover:underline'
              >
                See All
              </button>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {/* Mocked Cards for preview */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className='flex h-(--height-restaurant-card-mock) items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-400'
                >
                  Restaurant Card {i}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
