import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    'build/bundle': ['./src/main.ts', './public/css/global.css']
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json'))
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: !prod
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({
              sourceMap: !prod
            })
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.ProvidePlugin({
      process: 'process'
    }),
    new HtmlWebpackPlugin({
      title: 'Marcys Interface',
      template: './public/index.html',
      meta: {
        viewport:
          'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
        'X-UA-Compatible': {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1'
        },
        HandheldFriendly: 'true',
        'Content-Security-Policy': {
          'http-equiv': 'Content-Security-Policy',
          content: prod
            ? "script-src 'self'"
            : "script-src 'self' 'unsafe-eval'"
        }
      }
    })
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    hot: true
  }
};
