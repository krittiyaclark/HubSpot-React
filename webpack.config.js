const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const hubspotConfig = ({ portal, autoupload }) => {
	return {
		target: 'web',
		entry: {
			main: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
		},
		optimization: {
			minimize: false,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					},
				},
				{
					test: /\.s(s(a|c)ss)$/i,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: 'css-loader', options: { url: false } },
						{
							loader: 'postcss-loader',
							options: {
								plugin: () => [autoprefixer()],
							},
						},
						'sass-loader',
					],
				},
				{
					test: /\.(svg)$/,
					use: [{ loader: 'url-loader' }],
				},
			],
		},
		plugins: [
			new HubSpotAutoUploadPlugin({
				portal,
				autoupload,
				src: 'dist',
				dest: 'hs-react',
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
			new CopyWebpackPlugin([
				{ from: 'src/images', to: 'images' },
				{ from: 'src/modules', to: 'modules' },
			]),
		],
	}
}

module.exports = [hubspotConfig]
