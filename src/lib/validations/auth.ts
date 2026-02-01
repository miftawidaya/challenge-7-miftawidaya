import { z } from 'zod';

/**
 * Login Validation Schema
 */
export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

/**
 * Register Validation Schema
 */
export const registerSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^(?:\+62|62|0)8[1-9][0-9]{7,10}$/,
      'Invalid Indonesian phone number format'
    ),
});

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
