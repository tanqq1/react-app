const path = require("path");
module.export = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        // path: path.resolve(__dirname, "dist"),
        path: __dirname + '/dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
        ]
    },
}