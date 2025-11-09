/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@react-email/components", "inngest", "@arcjet/next"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig