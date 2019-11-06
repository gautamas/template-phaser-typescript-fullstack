const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/frontend/main.ts',
        vendors: ['phaser']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist/scripts'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, './assets/', '**', '*'),
                to: path.resolve(__dirname, './dist/')
            },
            {
                from: path.resolve(__dirname, './src/public/'),
                to: path.resolve(__dirname, './dist/')
            },
        ])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}