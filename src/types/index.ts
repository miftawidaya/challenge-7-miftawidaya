/**
 * Restaurant Types
 */

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalReview: number;
  place: string;
  distance: string | number;
  category: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'FOOD' | 'DRINK';
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface RestaurantDetail extends Restaurant {
  menu: MenuItem[];
  reviews: Review[];
}

/**
 * Cart Types
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

/**
 * Order Types
 */

export type OrderStatus = 'PENDING' | 'PREPARING' | 'DELIVERED' | 'CANCELLED';

export interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  totalAmount: number;
  items: number;
  status: OrderStatus;
  date: string;
}
