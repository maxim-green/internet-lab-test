import { ProgressPlugin, Configuration } from "webpack";
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

interface Environment {
  [key: string]: string
  mode: 'production' | 'development'
}

export default (env: Environment): Configuration => {
  return {
    mode: env.mode || 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve('src', 'assets'),
          to: 'assets'
        }]
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/i,
          use: [
            env.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (resPath: string) => {
                    return resPath.includes('.module.')
                  },
                  localIdentName: "[name]_[local]_[hash:base64:5]",
                  namedExport: false
                }
              }
            },
            "sass-loader",
          ],
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
      port: env.port ? Number(env.port) : 3000,
      open: true
    },
    devtool: 'inline-source-map'
  }
}