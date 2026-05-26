/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-link',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
