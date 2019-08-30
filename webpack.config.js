
const path = require('path');

module.exports = {

    mode: 'development',

    output: {

        path: path.resolve(__dirname, 'wwwroot/dist'),

        publicPath: '/dist/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};