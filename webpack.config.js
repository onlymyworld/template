const path = require('path');
const webpack = require("webpack");
const ProvidePlugin = new webpack.ProvidePlugin({
	React:'react'
});
module.exports = {
    entry: {
		app: "./app/index.js"
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "build")
	},
    module: {
        rules: [{
                test: /\.js/,
                exclude: /(node_modules|libs)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "stage-3"]
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
    plugins: [ProvidePlugin]
}