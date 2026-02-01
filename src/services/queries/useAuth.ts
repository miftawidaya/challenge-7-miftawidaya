import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { authService } from '@/services/api/auth';
import { setCredentials, logout } from '@/features/auth/authSlice';
import { LoginInput, RegisterInput } from '@/types/auth';

/**
 * Authentication Queries and Mutations
 */

export const useLogin = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginInput) => authService.login(data),
    onSuccess: (response) => {
      const { user, token } = response.data;

      // Set cookie for SSR/Middleware
      Cookies.set('auth_token', token, { expires: 7 });

      // Update Redux state
      dispatch(setCredentials({ user, token }));

      // Clear all queries as user context changed
      queryClient.clear();

      // Redirect to home
      router.push('/');
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterInput) => authService.register(data),
    onSuccess: (response) => {
      const { user, token } = response.data;

      // Set cookie for SSR/Middleware
      Cookies.set('auth_token', token, { expires: 7 });

      // Update Redux state
      dispatch(setCredentials({ user, token }));

      // Clear all queries as user context changed
      queryClient.clear();

      // Redirect to home
      router.push('/');
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  return () => {
    // Remove cookie
    Cookies.remove('auth_token');

    // Reset Redux state
    dispatch(logout());

    // Clear all queries
    queryClient.clear();

    // Redirect to login
    router.push('/login');
  };
};

export const useProfile = (enabled = true) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => authService.getProfile(),
    select: (response) => response.data,
    enabled,
  });
};
