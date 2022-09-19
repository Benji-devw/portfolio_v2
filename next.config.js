/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images : {
    basePath: '/media'
  }
}

module.exports = nextConfig
