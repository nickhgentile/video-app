module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*'
      }
    ]
  }
};
