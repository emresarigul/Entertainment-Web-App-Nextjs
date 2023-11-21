/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "images.alphacoders.com", "image.tmdb.org"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
