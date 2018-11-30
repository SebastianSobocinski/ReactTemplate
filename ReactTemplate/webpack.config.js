const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: { 'main': './ClientApp/boot.jsx' },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    output: {
        path: path.join(__dirname, './wwwroot/dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
            { test: /\.(s*)css$/, use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "resolve-url-loader", "sass-loader"] },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=1' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'site.css' }),
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
    ]
}