/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["navarro-benjamin.com"],
    // formats: ["image/webp", "image/avif"],
}
}

module.exports = nextConfig
