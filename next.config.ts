import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 82] },
  async redirects() {
    return [
      { source: "/bounce", destination: "/loopstudio", permanent: true },
      { source: "/gym-journal", destination: "/gym", permanent: true },
      { source: "/transcript-vault", destination: "/transcription", permanent: true },
      { source: "/apps", destination: "/#apps", permanent: false },
    ];
  },
  // ClearDSA (separate Vercel project "cleardsa") served at /dsa.
  // See ClearDSA/docs/DEPLOYMENT.md. Remove these two rewrites to unmount it.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/dsa", destination: "https://cleardsa.vercel.app/dsa/" },
        { source: "/dsa/:path*", destination: "https://cleardsa.vercel.app/dsa/:path*" },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
