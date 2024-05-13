/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
