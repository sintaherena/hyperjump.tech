import { execSync } from "child_process";

const basePath = ""; // process.env.NODE_ENV === "production" ? "/hyperjump.tech" : "";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap("GenerateSitemap", () => {
            console.log("Build complete. Generating sitemap...");
            execSync("bun run ./scripts/generate-sitemap.ts");
          });
        }
      });
    }

    return config;
  }
};

export default nextConfig;
