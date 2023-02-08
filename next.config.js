/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}
if (process.env.STATIC_BUILD || process.env.GITHUB_REPOSITORY) {
  console.log('Static build detected, disabling image optimization');
  nextConfig.images = {
    unoptimized: true,
  }
}

module.exports = nextConfig
