/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig