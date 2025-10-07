import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subpath like https://username.github.io/repository-name/
  // uncomment and set your repository name:
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
};

export default nextConfig;
