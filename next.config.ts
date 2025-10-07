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
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
