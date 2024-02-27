// next.config.js
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["media.dev.to"],
  },
};
