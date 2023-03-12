/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@use "$src/styles/core/index.scss" as *;`,
  },
}

module.exports = nextConfig
