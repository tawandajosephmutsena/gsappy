/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  
  // If deploying to a subdirectory, uncomment and set basePath
  // basePath: '/app',
  
  // Image optimization
  images: {
    domains: ['rvmstudio.org'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
