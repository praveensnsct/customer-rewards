const path = require('path');
const route = require('./src/server/routes');

const { HOST = 'localhost', PORT = 5000 } = process.env;

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, './src/index.jsx'),
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        historyApiFallback: true,
        disableHostCheck: true,
        port: PORT,
        host: HOST,
        hot: true,
        before: (app) => {
            route(app);
        },
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        }],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
};
