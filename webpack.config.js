let path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        publicPath: '/dist/',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /(\.js$|\.jsx$)/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    }
}