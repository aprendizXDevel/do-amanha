const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge")

const paths = {
	mainJs: path.resolve(__dirname, "src", "js", "main.js"),
	outputJs: path.resolve(__dirname, "public", "js"),
};

const prodConfig = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"],
					fallback: "style-loader",
				}),
			},
		],
	},

	plugins: [
		new ExtractTextPlugin("../css/main.css"),
	],
};

const devConfig = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};

const defaultConfig = {
	context: __dirname,
	entry: {
		main: paths.mainJs,
	},

	output: {
		path: paths.outputJs,
		filename: "[name].js",
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				//include: paths.mainJs,
				//exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['babel-preset-env'],
					},
				},
			},
		],
	},

	// devServer: {
	// 	hot: true,
	// },

	plugins: [
		new HtmlWebpackPlugin({
			title: "Yeah",
			template: "index.html",
		}),
	],
}

module.exports = env => {
	if (env === "production") {
		return merge(defaultConfig, prodConfig);
	}
	return merge(defaultConfig, prodConfig);
};