import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Proxy PostHog ingestion so ad blockers don't drop events.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // PostHog endpoints use trailing slashes.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
