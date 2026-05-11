/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
      domains: ["tellus.itsoft-bd.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
