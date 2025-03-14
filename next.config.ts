import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"], // Add allowed image hosts
  },
};

export default nextConfig;
