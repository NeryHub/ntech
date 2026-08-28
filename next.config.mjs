/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← Descomente esta linha!
  
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  // Remova estas linhas (não são suportadas no Next.js 16)
  // swcMinify: true,
  // poweredByHeader: false,
  
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig