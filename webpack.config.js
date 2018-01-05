const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new styleLintPlugin({
          configFile: '.stylelintrc',
          context: 'src',
          files: '**/*.css',
          failOnError: false,
          quiet: false,
        })
    ]
};
