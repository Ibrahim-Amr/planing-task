/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
