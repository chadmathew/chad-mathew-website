/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable optimized font loading
  optimizeFonts: true,
  
  // Configure headers for font files (iOS compatibility)
  async headers() {
    return [
      {
        source: '/font/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
