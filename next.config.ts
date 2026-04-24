import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [process.env.ALLOWED_DEV_ORIGINS || ""],
};

export default nextConfig;
