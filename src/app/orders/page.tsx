'use client';

import * as React from 'react';
import { useOrders } from '@/services/queries';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Order } from '@/types';
import { Button } from '@/components/ui/button';
import { ReviewDialog } from '@/components/orders/ReviewDialog';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

export default function OrdersPage() {
  const { data: orders, isLoading } = useOrders();
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);

  return (
    <div className='custom-container mx-auto flex flex-col gap-10 py-32'>
      <h1 className='text-display-sm font-extrabold text-neutral-950'>
        My Orders
      </h1>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex flex-col gap-6'>
          {orders?.map((order: Order) => (
            <div
              key={order.id}
              className='flex flex-col gap-4 rounded-2xl border border-neutral-100 p-6 md:flex-row md:items-center md:justify-between'
            >
              <div className='flex items-center gap-6'>
                <div className='relative size-20 shrink-0 overflow-hidden rounded-xl bg-neutral-100'>
                  <ImageWithFallback
                    src={order.restaurantImage}
                    alt={order.restaurantName}
                    fill
                    className='object-cover'
                    fallbackIconSize='sm'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg font-bold text-neutral-950'>
                    {order.restaurantName}
                  </h3>
                  <p className='text-sm text-neutral-500'>
                    {order.items} Items • {order.date}
                  </p>
                  <span className='text-md font-extrabold text-neutral-950'>
                    Rp {order.totalAmount.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Badge
                  variant='outline'
                  className={cn(
                    'rounded-lg px-4 py-1.5 text-xs font-bold uppercase',
                    order.status === 'DELIVERED'
                      ? 'bg-status-success/10 text-status-success border-status-success/20'
                      : 'bg-status-warning/10 text-status-warning border-status-warning/20'
                  )}
                >
                  {order.status}
                </Badge>
                {order.status === 'DELIVERED' && (
                  <Button
                    variant='secondary'
                    size='sm'
                    className='rounded-xl font-bold'
                    onClick={() => setSelectedOrder(order)}
                  >
                    Give Review
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedOrder && (
        <ReviewDialog
          isOpen={!!selectedOrder}
          onOpenChange={(open) => !open && setSelectedOrder(null)}
          restaurantId={selectedOrder.restaurantId}
          restaurantName={selectedOrder.restaurantName}
        />
      )}
    </div>
  );
}
