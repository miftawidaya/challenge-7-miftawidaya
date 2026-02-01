import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * API Rewrites Configuration
   * Proxies requests to /api/* through Next.js to avoid CORS issues during development.
   * The backend API is at https://be-restaurant-api-889893107835.asia-southeast2.run.app
   */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
