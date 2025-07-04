/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://192.168.1.13:3000', // ← your LAN IP
    ],
  },
};

module.exports = nextConfig;
