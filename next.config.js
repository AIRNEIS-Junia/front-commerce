/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "plus.unsplash.com",
      },
    ],
  },
};
