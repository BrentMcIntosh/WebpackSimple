const path = require('path');

module.exports = {

    mode: 'development',

    output: {

        path: path.resolve(__dirname, 'wwwroot/dist')

    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial"
                },
            },
        },
    }
};