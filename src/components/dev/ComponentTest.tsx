/**
 * ComponentTest Component
 *
 * Test component to verify UI components (Button, Input, Badge, etc.).
 * Add component tests here as you build them.
 *
 * @remarks
 * For development and testing purposes only.
 */

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Share07,
  FilterLines,
  Star01,
  MarkerPin01,
  File05,
  ArrowCircleBrokenLeft,
} from '@untitledui/icons';
import { cn } from '@/lib/utils';

export function ComponentTest() {
  return (
    <div className='custom-container space-y-10xl py-6xl'>
      {/* Header */}
      <header className='space-y-md'>
        <h1 className='text-display-xl text-foreground font-extrabold'>
          Component Test
        </h1>
        <p className='text-md text-muted-foreground'>
          Verify UI components (Button, Avatar, Sheet, etc.)
        </p>
      </header>

      {/* Logo Section - Demo CSS Color Control */}
      <section className='space-y-4xl' aria-labelledby='logo-heading'>
        <h2
          id='logo-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Logo (Single SVG with CSS Color Control)
        </h2>

        <div className='space-y-3xl'>
          {/* Original Brand Color - Red on Light BG */}
          <div className='bg-card p-4xl space-y-md rounded-2xl border border-neutral-200'>
            <p className='text-muted-foreground text-sm'>
              Primary Color (text-primary) - Light Background
            </p>
            <span className='text-primary inline-block'>
              <Logo title='Logo primary color' />
            </span>
          </div>

          {/* White Logo on Dark BG */}
          <div className='bg-foreground p-4xl space-y-md rounded-2xl'>
            <p className='text-background text-sm'>
              White Logo (text-white) - Dark Background
            </p>
            <span className='inline-block text-white'>
              <Logo title='Logo white' />
            </span>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className='space-y-4xl' aria-labelledby='buttons-heading'>
        <h2
          id='buttons-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Buttons (Figma Customized)
        </h2>

        <div className='space-y-6xl'>
          {/* Light Theme Buttons */}
          <div className='bg-card p-4xl space-y-4xl rounded-2xl border border-neutral-200'>
            <div>
              <p className='text-muted-foreground mb-2 text-sm'>
                Light Background Variants
              </p>
              <div className='gap-xl flex flex-wrap items-center'>
                <Button>Sign Up (Primary/Default Red)</Button>
                <Button variant='outline'>Sign In (Outline)</Button>
              </div>
            </div>

            <div className='gap-4xl grid grid-cols-1 md:grid-cols-2'>
              <div>
                <p className='mb-2 text-xs text-neutral-500'>
                  Desktop Height (48px)
                </p>
                <Button className='min-w-32'>Desktop Button</Button>
              </div>
              <div className='md:hidden'>
                <p className='mb-2 text-xs text-neutral-500'>
                  Mobile Height (36px) - Automatically responsive
                </p>
                <Button className='min-w-32'>Mobile Button</Button>
              </div>
            </div>
          </div>

          {/* Dark Theme Buttons */}
          <div className='p-4xl space-y-4xl rounded-2xl bg-neutral-900'>
            <div>
              <p className='mb-2 text-sm text-neutral-400'>
                Dark Background Variants
              </p>
              <div className='gap-xl flex flex-wrap items-center'>
                <Button variant='secondary'>Sign Up (Secondary White)</Button>
                <Button
                  variant='outline'
                  className='border-white text-white hover:bg-white/10'
                >
                  Sign In (Outline White)
                </Button>
              </div>
            </div>
          </div>

          {/* Size Scaling */}
          <div className='bg-card p-4xl space-y-4xl rounded-2xl border border-neutral-200'>
            <p className='text-muted-foreground text-sm'>
              Sizes (sm, default, lg)
            </p>
            <div className='gap-xl flex flex-wrap items-end'>
              <Button size='sm'>Small</Button>
              <Button size='default'>Default (Responsive)</Button>
              <Button size='lg'>Large</Button>
            </div>
          </div>

          {/* Action Buttons (Icon + Label) */}
          <div className='bg-card p-4xl space-y-4xl rounded-2xl border border-neutral-200'>
            <div>
              <p className='text-muted-foreground mb-2 text-sm'>
                Action Button (Share Example - 44px Height)
              </p>
              <div className='gap-xl flex flex-wrap items-center'>
                <Button variant='outline' className='h-11 gap-2'>
                  <Share07
                    className='size-5 md:size-6'
                    strokeWidth={2}
                    aria-hidden='true'
                  />
                  Share
                </Button>

                <Button
                  variant='outline'
                  size='icon'
                  className='size-11 rounded-full'
                >
                  <Share07
                    className='size-5 md:size-6'
                    strokeWidth={2}
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Share</span>
                </Button>
              </div>
              <p className='mt-2 text-xs text-neutral-500'>
                Note: Uses className="h-11" for 44px and icon class "size-5
                md:size-6"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avatars Section */}
      <section className='space-y-4xl' aria-labelledby='avatars-heading'>
        <h2
          id='avatars-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Avatars
        </h2>

        <div className='bg-card p-4xl gap-4xl flex items-center rounded-2xl border border-neutral-200'>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-muted-foreground text-xs'>Small (24px)</p>
            <Avatar size='sm'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-muted-foreground text-xs'>Default (32px)</p>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-muted-foreground text-xs'>Large (40px)</p>
            <Avatar size='lg'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-muted-foreground text-xs'>Fallback</p>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Sheets Section */}
      <section className='space-y-4xl' aria-labelledby='sheets-heading'>
        <h2
          id='sheets-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Sheets (Mobile Menu & Filter Demo)
        </h2>

        <div className='bg-card p-4xl gap-4xl flex flex-wrap rounded-2xl border border-neutral-200'>
          {/* Mobile Menu Demo */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline'>Mobile Menu</Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <SheetHeader>
                <SheetTitle>Mobile Menu</SheetTitle>
                <SheetDescription>
                  This is how the navigation menu will look on mobile.
                </SheetDescription>
              </SheetHeader>
              <div className='space-y-4 p-4'>
                <Button className='w-full'>Home</Button>
                <Button variant='ghost' className='w-full justify-start'>
                  Menu
                </Button>
                <Button variant='ghost' className='w-full justify-start'>
                  About
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Filter Demo - Figma Inspired */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='size-11'>
                <FilterLines className='size-5' strokeWidth={2} />
                <span className='sr-only'>Open Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='w-78 overflow-visible p-0'
              showCloseButton={true}
            >
              <div className='flex-1 space-y-8 overflow-y-auto p-6'>
                <h3 className='text-display-xs font-bold uppercase'>Filter</h3>

                {/* Distance Section */}
                <div className='space-y-4'>
                  <h4 className='text-md text-foreground font-bold'>
                    Distance
                  </h4>
                  <div className='space-y-4'>
                    {[
                      'Nearby',
                      'Within 1 km',
                      'Within 3 km',
                      'Within 5 km',
                    ].map((dist) => (
                      <label
                        key={dist}
                        className='group flex cursor-pointer items-center gap-3'
                      >
                        <input
                          type='checkbox'
                          className='sr-only'
                          checked={dist === 'Nearby'}
                          readOnly
                        />
                        <div
                          className={cn(
                            'flex size-5 items-center justify-center rounded border border-neutral-300 transition-colors',
                            dist === 'Nearby'
                              ? 'bg-brand-primary border-brand-primary'
                              : 'bg-white'
                          )}
                        >
                          {dist === 'Nearby' && (
                            <div className='size-2 rounded-full bg-white' />
                          )}
                        </div>
                        <span
                          className={cn(
                            'text-sm',
                            dist === 'Nearby'
                              ? 'font-semibold'
                              : 'text-neutral-600'
                          )}
                        >
                          {dist}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className='border-neutral-200' />

                {/* Price Section */}
                <div className='space-y-4'>
                  <h4 className='text-md text-foreground font-bold'>Price</h4>
                  <div className='space-y-3'>
                    <div className='focus-within:ring-ring flex h-11 items-center overflow-hidden rounded-lg border border-neutral-200 transition-all focus-within:ring-2'>
                      <label
                        htmlFor='min-price'
                        className='flex h-full items-center justify-center border-e border-neutral-200 bg-neutral-50 px-3 text-sm font-bold text-neutral-900'
                      >
                        Rp
                      </label>
                      <input
                        id='min-price'
                        type='text'
                        placeholder='Minimum Price'
                        className='flex-1 bg-white px-3 text-sm outline-none placeholder:text-neutral-400'
                      />
                    </div>
                    <div className='focus-within:ring-ring flex h-11 items-center overflow-hidden rounded-lg border border-neutral-200 transition-all focus-within:ring-2'>
                      <label
                        htmlFor='max-price'
                        className='flex h-full items-center justify-center border-e border-neutral-200 bg-neutral-50 px-3 text-sm font-bold text-neutral-900'
                      >
                        Rp
                      </label>
                      <input
                        id='max-price'
                        type='text'
                        placeholder='Maximum Price'
                        className='flex-1 bg-white px-3 text-sm outline-none placeholder:text-neutral-400'
                      />
                    </div>
                  </div>
                </div>

                <hr className='border-neutral-200' />

                {/* Rating Section */}
                <div className='space-y-4'>
                  <h4 className='text-md text-foreground font-bold'>Rating</h4>
                  <div className='space-y-4'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label
                        key={rating}
                        className='flex cursor-pointer items-center gap-3'
                      >
                        <input type='checkbox' className='sr-only' />
                        <div className='size-5 rounded border border-neutral-300 bg-white' />
                        <div className='flex items-center gap-1.5'>
                          <Star01
                            className='text-rating fill-rating size-4.5'
                            strokeWidth={2}
                          />
                          <span className='text-sm font-medium text-neutral-900'>
                            {rating}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* Dropdown Menu Section */}
      <section className='space-y-4xl' aria-labelledby='dropdown-heading'>
        <h2
          id='dropdown-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Dropdown Menu (Figma Profile Demo)
        </h2>

        <div className='bg-card p-4xl gap-4xl flex flex-wrap rounded-2xl border border-neutral-200'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='ring-offset-background focus-visible:ring-ring cursor-pointer rounded-full outline-hidden transition-all focus-visible:ring-2'>
                <Avatar className='border-2 border-white shadow-sm'>
                  <AvatarImage src='https://github.com/shadcn.png' alt='User' />
                  <AvatarFallback className='bg-brand-primary text-white'>
                    JD
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-dropdown shadow-card flex flex-col gap-3 rounded-2xl border-none p-4'
              align='end'
              sideOffset={8}
            >
              {/* User Section */}
              <DropdownMenuLabel className='flex items-center gap-2 p-0'>
                <Avatar className='size-9'>
                  <AvatarImage
                    src='https://github.com/mifta.png'
                    alt='John Doe'
                  />
                  <AvatarFallback className='bg-brand-primary text-xs text-white'>
                    JD
                  </AvatarFallback>
                </Avatar>
                <span className='text-md font-bold tracking-tight text-neutral-950'>
                  John Doe
                </span>
              </DropdownMenuLabel>

              {/* Line 16 */}
              <DropdownMenuSeparator className='mx-0 my-0 h-px bg-neutral-200' />

              {/* Menu Items */}
              <div className='flex flex-col gap-3'>
                <DropdownMenuItem className='cursor-pointer gap-2 rounded-xl p-0 text-neutral-950'>
                  <MarkerPin01 className='size-5' strokeWidth={2} />
                  <span className='text-sm font-medium'>Delivery Address</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer gap-2 rounded-xl p-0 text-neutral-900'>
                  <File05 className='size-5' strokeWidth={2} />
                  <span className='text-sm font-medium'>My Orders</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer gap-2 rounded-xl p-0 text-neutral-950'>
                  <ArrowCircleBrokenLeft className='size-5' strokeWidth={2} />
                  <span className='text-sm font-medium'>Logout</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Skeletons Section */}
      <section className='space-y-4xl' aria-labelledby='skeletons-heading'>
        <h2
          id='skeletons-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Skeletons (Loading States)
        </h2>

        <div className='bg-card p-4xl space-y-6xl rounded-2xl border border-neutral-200'>
          <div className='flex items-center space-x-4'>
            <Skeleton className='size-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-64' />
              <Skeleton className='h-4 w-48' />
            </div>
          </div>

          <div className='gap-4xl grid grid-cols-1 md:grid-cols-3'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='space-y-4'>
                <Skeleton className='aspect-video w-full rounded-xl' />
                <Skeleton className='h-4 w-3/4' />
                <Skeleton className='h-4 w-1/2' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section className='space-y-4xl' aria-labelledby='inputs-heading'>
        <h2
          id='inputs-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Inputs
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Input component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Badges Section */}
      <section className='space-y-4xl' aria-labelledby='badges-heading'>
        <h2
          id='badges-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Badges
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Badge component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className='space-y-4xl' aria-labelledby='cards-heading'>
        <h2
          id='cards-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Cards
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Card component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Modals Section */}
      <section className='space-y-4xl' aria-labelledby='modals-heading'>
        <h2
          id='modals-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Modals
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Modal component tests here when components are created.
          </p>
        </div>
      </section>
    </div>
  );
}
