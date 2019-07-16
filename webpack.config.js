var path = require("path");

// var DIST_DIR = path.resolve(__dirname, "dist");
// var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: "./src/index.jsx",
    // mode: "development",
    output: {
        filename: "./main.js"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },

    module: {
        rules: [
            {
                test: /(\.m?)(js$|jsx$)/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};

module.exports = config;
