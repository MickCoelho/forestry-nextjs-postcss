const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  pageExtensions: ['jsx', 'js'],

  cssModules: true,
  cssLoaderOptions: {
    sourceMap: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
    camelCase: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });

    return config;
  },
});
