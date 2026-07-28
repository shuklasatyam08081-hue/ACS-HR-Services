/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow ngrok and other tunnel domains for mobile testing
  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok.io",
    "*.ngrok.app",
    "frigidly-upswing-stick.ngrok-free.dev",
  ],
}

export default nextConfig
