var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/client.js",
  module: {
      loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_componenets)/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
          },
          {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: 'svg-react-loader',
            query: {
                classIdPrefix: '[name]-[hash:8]__',
                propsMap: {
                    fillRule: 'fill-rule'
                },
                xmlnsTest: /^xmlns.*$/
            }
        }
      ]
  },
  output: {
    path: __dirname + "/public",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};