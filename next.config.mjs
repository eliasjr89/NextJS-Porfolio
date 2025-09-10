/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shot.screenshotapi.net",
        port: "",
        pathname: "/screenshot",
      },
    ],
  },
};

export default nextConfig;
