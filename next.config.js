/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perenual.com',
        port: '',
       
      },
    ],
  },
}

module.exports = nextConfig
