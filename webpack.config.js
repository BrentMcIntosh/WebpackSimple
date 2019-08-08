
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {

    app: path.join(__dirname, 'app'),

    build: path.resolve(__dirname, 'wwwroot/dist')
};

module.exports = {

    mode: 'development',

    entry: {

        app: PATHS.app

    },

    output: {

        path: PATHS.build,

        filename: '[name].js',

    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Webpack Demo'
        })

    ]
};