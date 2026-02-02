'use client';

import * as React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/features/store';
import { useAddToCart } from '@/services/queries';
import { ROUTES } from '@/config/routes';

/**
 * CartSync Component
 * @description Automatically syncs pending cart items from localStorage after a user logs in.
 */
export function CartSync() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const addToCart = useAddToCart();
  const hasLoaded = React.useRef(false);

  React.useEffect(() => {
    if (isAuthenticated && !hasLoaded.current) {
      const pendingItemStr = localStorage.getItem('pending_cart_item');
      if (pendingItemStr) {
        try {
          const pendingItem = JSON.parse(pendingItemStr);
          addToCart.mutate(pendingItem, {
            onSuccess: () => {
              localStorage.removeItem('pending_cart_item');
              router.push(ROUTES.CHECKOUT);
            },
          });
        } catch (error) {
          console.error('Failed to parse pending cart item:', error);
          localStorage.removeItem('pending_cart_item');
        }
      }
      hasLoaded.current = true;
    } else if (!isAuthenticated) {
      hasLoaded.current = false;
    }
  }, [isAuthenticated, addToCart, router]);

  return null;
}
