'use client';

import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export default function CheckoutSuccessPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 py-32'>
      <div className='flex w-full max-w-md flex-col items-center text-center'>
        <div className='bg-status-success/10 mb-8 flex size-24 items-center justify-center rounded-full'>
          <Icon
            icon='ri:checkbox-circle-fill'
            className='text-status-success size-12'
          />
        </div>
        <h1 className='text-display-sm mb-4 font-extrabold text-neutral-950'>
          Order Placed Successfully!
        </h1>
        <p className='text-md mb-10 leading-relaxed text-neutral-500'>
          Thank you for your order. Your food is being prepared and will be
          delivered to you shortly. You can track your order status in the
          orders section.
        </p>
        <div className='flex w-full flex-col gap-4'>
          <Button asChild className='h-14 rounded-2xl font-bold'>
            <Link href={ROUTES.ORDERS}>View My Orders</Link>
          </Button>
          <Button
            asChild
            variant='outline'
            className='h-14 rounded-2xl font-bold'
          >
            <Link href={ROUTES.HOME}>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
