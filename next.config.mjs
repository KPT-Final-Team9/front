/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // 환경 변수에 따라 번들 분석기 활성화
});
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.stories\.(ts|js|tsx|jsx)$/,
      loader: 'ignore-loader',
    });

    config.module.rules.push({
      test: /\.storybook/,
      loader: 'ignore-loader',
    });
    // Svg loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // TODO: 서버 주소에 맞게 바꾸기
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://13.124.168.137/api/:path*',
      },
      {
        source: '/public-api/:path*',
        destination: 'http://13.124.168.137/public-api/:path*',
      },
    ];
  },
  output: 'standalone',
};
// export default withBundleAnalyzer(nextConfig);
export default nextConfig;
