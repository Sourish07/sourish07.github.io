/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

if (process.env.STATIC_BUILD) {
  console.log("Static build detected. Disabling image optimization.")
  nextConfig.images = {
    unoptimized: true,
  }
}

module.exports = nextConfig
