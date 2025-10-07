import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  basePath: '/SentAuth-landingpage',
  assetPrefix: '/SentAuth-landingpage/',
};

export default nextConfig;
