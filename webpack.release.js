const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const htmlWebpackPluginConfig = {
	title: "beiqi",
	filename: "../index.html",
	template: "./template.html",
	hash: true,
	inject: true
}

const ProvidePlugin = new webpack.ProvidePlugin({
	React:'react'
});

module.exports ={
	entry: {
		app: "./app/index.js"
	},
	output: {
		filename: "[name][hash].js",
		path: path.resolve(__dirname, "build")
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /(node_modules|libs)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react"]
					}
				}
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(htmlWebpackPluginConfig),
		ProvidePlugin,
		new CleanWebpackPlugin(["build"])
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	}
}