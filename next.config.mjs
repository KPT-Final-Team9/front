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
  // TODO: auth js에서 내부 api에 접근할 때 프록시되는 문제가 있어서 api -> apis 로 변경

  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: 'https://officeback.site/api/:path*',
      },
      {
        source: '/public-api/:path*',
        destination: 'https://officeback.site/public-api/:path*',
      },
    ];
  },
  output: 'standalone',
};
// export default withBundleAnalyzer(nextConfig);
export default nextConfig;
