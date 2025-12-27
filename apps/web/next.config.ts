import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["@lattice/wikipedia"],
};

export default nextConfig;
