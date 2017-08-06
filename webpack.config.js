const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    
    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "ts-loader"
                ]
            }
        ]
    }
};
