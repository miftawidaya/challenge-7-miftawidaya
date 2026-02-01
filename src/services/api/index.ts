import axios from './axios';
import { API_ENDPOINTS } from '@/config/api';
import { CartItem } from '@/types';

export const restaurantService = {
  getRestaurants: async (params?: Record<string, unknown>) => {
    const { data } = await axios.get(API_ENDPOINTS.RESTAURANTS.LIST, {
      params,
    });
    return data;
  },
  getDetail: async (id: string) => {
    const { data } = await axios.get(API_ENDPOINTS.RESTAURANTS.DETAIL(id));
    return data;
  },
  getRecommended: async () => {
    const { data } = await axios.get(API_ENDPOINTS.RESTAURANTS.RECOMMENDED);
    return data;
  },
};

export const cartService = {
  getCart: async () => {
    const { data } = await axios.get(API_ENDPOINTS.CART.GET);
    return data;
  },
  updateCart: async (items: CartItem[]) => {
    // Assuming the update cart endpoint is the POST /api/cart to sync items
    const { data } = await axios.post(API_ENDPOINTS.CART.ADD, { items });
    return data;
  },
};

export const orderService = {
  getOrders: async () => {
    const { data } = await axios.get(API_ENDPOINTS.ORDERS.HISTORY);
    return data;
  },
  checkout: async (payload: Record<string, unknown>) => {
    const { data } = await axios.post(API_ENDPOINTS.ORDERS.CHECKOUT, payload);
    return data;
  },
};
