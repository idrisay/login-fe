/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEN_URL: process.env.BACKEN_URL
  },
};

module.exports = nextConfig;
