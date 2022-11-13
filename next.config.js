/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raheg-api.vercel.app","localhost"],
  },
}

module.exports = nextConfig
