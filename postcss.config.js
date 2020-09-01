module.exports = {
    plugins: [
        require('postcss-preset-env')({
            autoprefixer: {
                grid: true
            },
        browsers: [
            "last 1 version",
            "> 1%",
            "not dead"
         ],
        stage: 1,
        features: {
            'nesting-rules': true
            } 
        })
    ]
}
