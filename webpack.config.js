const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  return ({
    entry: './src/hello-world.js',
    output: {
      filename: 'hello-world.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'hello-world.html'),
        filename: 'hello-world.html',
        inlineSource: '.js$',
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      }),
      new ExtractTextPlugin("styles.css"),
      new StyleExtHtmlWebpackPlugin(),
      new CopyWebpackPlugin([
          { from: 'public/index.html', to: 'index.html' },

          { from: 'node_modules/document-register-element/build/document-register-element.js', to: 'lib/document-register-element.js' },

          { from: 'node_modules/@webcomponents/custom-elements/custom-elements.min.js', to: 'lib/custom-elements/custom-elements.min.js' },
          { from: 'node_modules/@webcomponents/custom-elements/src/native-shim.js', to: 'lib/custom-elements/native-shim.js' },

          { from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', to: 'lib/webcomponentsjs/webcomponents-loader.js' },
          { from: 'node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', to: 'lib/webcomponentsjs/webcomponents-sd-ce.js' },
          { from: 'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js', to: 'lib/webcomponentsjs/custom-elements-es5-adapter.js' },
      ])
    ],
  });
};