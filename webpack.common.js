const path = require('path');

module.exports = {
  entry: {
    app:  './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
      rules: [
          {
            test: /\.html$/,
            use: [
              'html-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images'
              }
            }
            ]
          },
      ]
  },
};