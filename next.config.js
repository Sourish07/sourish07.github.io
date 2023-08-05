const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

if (process.env.STATIC_BUILD) {
  console.log("Static build detected. Disabling image optimization.")
  nextConfig.images = {
    unoptimized: true,
  }
  nextConfig.env = {
    NEXT_PUBLIC_GITHUB_BUILD: true
  }
}

module.exports = withContentlayer(nextConfig)
