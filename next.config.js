const { withContentlayer } = require("next-contentlayer2")

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

if (process.env.STATIC_BUILD) {
  console.log("Static build detected. Disabling image optimization.")
  nextConfig.images = {
    unoptimized: true,
  }
  nextConfig.env = {
    NEXT_PUBLIC_GITHUB_BUILD: "true"
  }
}

module.exports = withContentlayer(nextConfig)
