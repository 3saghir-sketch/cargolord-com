/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/tracking/:path*',
          destination: 'https://crm.cargolord.co.uk/tracking/:path*',
        },
      ],
    };
  },
}
module.exports = nextConfig
