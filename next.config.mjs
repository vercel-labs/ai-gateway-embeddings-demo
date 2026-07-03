/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle the migration SQL into the function so ensureMigrated() can read it at runtime
  experimental: {
    outputFileTracingIncludes: {
      "/api/chat": ["./lib/db/migrations/**/*"],
    },
  },
};

export default nextConfig;
