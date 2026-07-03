/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/chat": ["./lib/db/migrations/**/*"],
    },
  },
};

export default nextConfig;
