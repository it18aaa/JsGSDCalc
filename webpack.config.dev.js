
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
        port: 3001,
        // the following allows SPA url routing, routed back to indexhtml
        historyApiFallback: {
            index: 'index.html',
            // rewrites subdirectory routes...
            rewrites: [
                { from: /\/test/, to: '/index.html'}
            ]
        },
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
            },
            // {
            //     test: /\.(css)$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    },
                    "sass-loader",
                ],
            }
        ]
    }
};
