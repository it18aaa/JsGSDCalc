const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        //filename: "bundle.js",
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),  
        clean: true,
    },
};
