import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "d33wubrfki0l68.cloudfront.net"],
  },
};

export default bundleAnalyzerConfig(nextConfig);
