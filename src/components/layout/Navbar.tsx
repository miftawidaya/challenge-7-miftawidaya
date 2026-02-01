/**
 * Navbar Component
 *
 * Primary navigation header providing site branding and utility actions.
 * Features a scroll-aware background and smooth transitions for branding elements.
 */

'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Icon } from '@iconify/react';
import { ProfileMenu } from './ProfileMenu';
import { cn } from '@/lib/utils';

const SCROLL_THRESHOLD = 20;

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'z-header duration-header fixed inset-x-0 top-0 transition-all ease-in-out',
        isScrolled
          ? 'h-header-mobile lg:h-header bg-base-white shadow-sm'
          : 'h-header-mobile lg:h-header bg-transparent shadow-none'
      )}
    >
      <div className='custom-container mx-auto flex h-20 items-center justify-between'>
        {/* Logo Section */}
        <Link href='/' className='group flex items-center gap-3 outline-hidden'>
          <Logo
            className={cn(
              'duration-header size-10 transition-colors md:size-10.5',
              isScrolled ? 'text-primary' : 'text-base-white'
            )}
          />
          <span
            className={cn(
              'text-display-md duration-header hidden font-extrabold transition-colors md:block',
              isScrolled ? 'text-neutral-950' : 'text-base-white'
            )}
          >
            Foody
          </span>
        </Link>

        {/* Actions */}
        <div className='flex items-center gap-4 md:gap-6'>
          {/* Cart Action */}
          <Button
            variant='ghost'
            size='icon'
            className={cn(
              'duration-header relative size-11 rounded-full p-0 transition-colors',
              isScrolled
                ? 'text-neutral-900 hover:bg-neutral-100'
                : 'text-base-white hover:bg-white/10'
            )}
          >
            <Icon icon='lets-icons:bag-fill' className='size-8' />
            <span className='bg-brand-primary text-base-white absolute -end-0.5 top-1 flex size-5 items-center justify-center rounded-full text-xs font-bold shadow-sm'>
              2
            </span>
            <span className='sr-only'>2 items in cart</span>
          </Button>

          {/* Profile Dropdown */}
          <ProfileMenu name='John Doe' isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}
