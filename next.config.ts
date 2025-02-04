import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "utfs.io", protocol: "https" }],
  },
};

export default nextConfig;
