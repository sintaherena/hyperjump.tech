/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hyperjump.tech",
  assetPrefix: "/hyperjump.tech",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
