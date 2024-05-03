/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api-exchange/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api-exchange/:path*',
        destination: 'https://bitexchange.co.id/api-exchange/:path*', // 替换为您的外部接口域名
      },
    ];
  },
  webpack(config) {
    config.module.rules.push(
      {
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    );

    return config;
  }
};

export default nextConfig;
