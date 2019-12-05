const path = require("path");
module.export = {
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js"
    },
    module:{
        rules:{
            test:/\.css$/,
            use:[{loader:'style-loader'},{loader:'css-loader'}]
        }
    },
    plugins:{}
}