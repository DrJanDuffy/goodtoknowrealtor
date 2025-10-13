/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.bhhscp.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "*.bhhscp.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "cdn.cookielaw.org",
            port: "",
            pathname: "/**",
          },
        ],
      },
  serverExternalPackages: ['cheerio'],
};

module.exports = nextConfig;
