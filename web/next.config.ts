import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 Cache Components (replaces experimental.ppr)
  // Portfolio shell stays static; ready for future cached/dynamic islands.
  cacheComponents: true,
};

export default nextConfig;
