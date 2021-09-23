const withTM = require('next-transpile-modules')(['@signalwire/js']); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
});
