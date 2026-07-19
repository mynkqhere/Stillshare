// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  allowedDevOrigins: ['172.16.2.36']
};

export default nextConfig;