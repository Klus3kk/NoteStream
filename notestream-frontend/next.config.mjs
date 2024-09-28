import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  // Add other options if needed
});

export default {
  reactStrictMode: true, // This should be outside the PWA configuration
  ...nextConfig,
};
