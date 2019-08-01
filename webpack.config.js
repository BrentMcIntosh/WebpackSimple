const path = require('path');

const webpack = require('webpack');

module.exports = {

    mode: 'development',

    output: {

        path: path.resolve(__dirname, 'wwwroot/dist')

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};