import { ProgressPlugin, Configuration } from "webpack";
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

interface Environment {
  [key: string]: string
  mode: 'production' | 'development'
}

export default (env: Environment): Configuration => {
  return {
    mode: env.mode || 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
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