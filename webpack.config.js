module.exports = {
    module: {
        rules: [
            {
                test: /\.(ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
}