
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

const linterOptions = {
    extensions: ['js'],
    emitError: true,
    emitWarning: true,
    failOnWarning: false,
    failOnError: false,
    fix: false,
    cache: false,
    formatter: require('eslint-friendly-formatter'),
};

module.exports = {
    // mode: "production",
    mode: "development",
    entry: {
        index: {
            import: "./src/index.js",
            // dependOn: 'shared',
        },
        another: {
            import: "./src/another-module.js",
            // dependOn: 'shared',
        },
        // shared: 'lodash',
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
        }),
        new ESLintWebpackPlugin(linterOptions),
    ],
    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
     optimization: {
        moduleIds: 'deterministic',
         runtimeChunk: 'single',
         splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
         }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader',
            }
        ]
    }
};
