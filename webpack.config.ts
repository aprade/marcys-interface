import * as path from 'path';
import * as webpack from 'webpack';
import type * as webpackDev from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import sveltePreprocess from 'svelte-preprocess';

type Mode = 'development' | 'production';
const mode = (process.env.NODE_ENV as Mode) || 'development';
const prod = mode === 'production';

interface Configuration extends webpack.Configuration {
  devServer: webpackDev.Configuration;
}

const config: Configuration = {
  entry: {
    'build/bundle': ['./src/main.ts', './public/css/global.css']
  },
  resolve: {
    fallback: { process: false },
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json'))
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false
            }
          }
        }
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: !prod
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({
              sourceMap: !prod,
              type: {
                compilerOptions: {
                  module: 'es6'
                }
              }
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
          content: prod ? "-src 'self'" : "-src 'self' 'unsafe-eval'"
        }
      }
    })
  ],
  devServer: {
    hot: true,
    static: 'dist'
  },
  devtool: prod ? false : 'source-map'
};

export default config;
