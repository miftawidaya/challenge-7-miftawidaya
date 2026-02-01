import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { restaurantService, cartService, orderService } from '@/services/api';
import { Restaurant, RestaurantDetail, CartItem, Order } from '@/types';

// Restaurant Hooks
export const useRestaurants = (params?: Record<string, unknown>) =>
  useQuery<Restaurant[]>({
    queryKey: ['restaurants', params],
    queryFn: () => restaurantService.getRestaurants(params),
  });

export const useRestaurantDetail = (id: string) =>
  useQuery<RestaurantDetail>({
    queryKey: ['restaurant', id],
    queryFn: () => restaurantService.getDetail(id),
    enabled: !!id,
  });

export const useRecommendedRestaurants = () =>
  useQuery<Restaurant[]>({
    queryKey: ['restaurants', 'recommended'],
    queryFn: restaurantService.getRecommended,
  });

// Cart Hooks
export const useCart = () =>
  useQuery<{ items: CartItem[] }>({
    queryKey: ['cart'],
    queryFn: cartService.getCart,
  });

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cartService.updateCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });
};

// Order Hooks
export const useOrders = () =>
  useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: orderService.getOrders,
  });

export const useCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: orderService.checkout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};
