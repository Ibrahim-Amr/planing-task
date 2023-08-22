/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.dummyjson.com/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
