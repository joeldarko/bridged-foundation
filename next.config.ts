import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root (a parent lockfile exists in the home dir).
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
