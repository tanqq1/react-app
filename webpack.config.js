const path = require("path");
module.export = {
    'mode':"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path: path.join(__dirname, "dist"),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                loader:['babel?presets[]=es2015,presets[]=react']
            },
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:'babel-loader',
            //         options: {
            //             babelrc: false,
            //             plugins: [
            //                 "@babel/plugin-proposal-class-properties",
            //                 "@babel/plugin-syntax-dynamic-import",
            //                 "lodash",
            //             ],
            //         },
            //         presets: [
            //             [
            //                 "babel-preset-env",
            //                 {
            //                   "useBuiltIns": "usage",
            //                   "corejs": 3,
            //                   "targets": {
            //                     "chrome": "58",
            //                     "ie": "11"
            //                   }
            //                 }
            //             ], 
            //             "babel-preset-react"
            //         ]
            //     }
            // },
        ]
    },
}