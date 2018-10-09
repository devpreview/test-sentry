const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options = {}) => {
    return {
        target: "web",
        mode: "development",
        entry: {
            main: path.resolve(__dirname, 'src/main.ts')
        },
        resolve: {
            extensions: [".js", ".ts"]
        },
        module: {
            rules: [
                { test: /\.ts$/, loader: "ts-loader" }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: "index.html",
                minify: false
            }),
        ],
        devtool: "cheap-module-source-map",
        devServer: {
            host: 'localhost',
            disableHostCheck: true,
            port: 3000,
            index: 'index.html',
            historyApiFallback: {
                index: '/index.html'
            }
        }
    };
};
