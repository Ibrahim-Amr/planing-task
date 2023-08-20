/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
