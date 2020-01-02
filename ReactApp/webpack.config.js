let webpack = require("webpack"),
path = require("path"),
DIST_DIR = path.resolve(__dirname,"dist"),
SRC_DIR = path.resolve(__dirname,"src"),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),

webpackConfig = {
    //entry point
    entry: SRC_DIR+"/index.js",

     //out put
     output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },

    //loaders, presets, module configurations
    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader: "babel-loader", 
                enforce: 'pre',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test:/\.(css|gif|png|jpg|svg)$/,
                include:SRC_DIR,
                use:['style-loader','css-loader']
            },
            // {
            //     include:SRC_DIR,
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //       'file-loader',
            //       {
            //         loader: 'image-webpack-loader',
            //         options: {
            //           bypassOnDebug: true, // webpack@1.x
            //           disable: true, // webpack@2.x and newer
            //         },
            //       },
            //     ],
            //   }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJSPlugin({
            test: /\.js(\?.*)?$/i,
            //include: /\/includes/,
            //exclude: /\/excludes/,
            cache: true,
            sourceMap: true
          }),
        ],
      },
    resolve: {
        extensions: ['.js', '.jsx']
      },
      
    devServer: {
      contentBase: __dirname,
      inline: false,
      //host: "local.synergiticit.com",
      port:9092,
      // watchContentBase: true,
      // https: true,
  
      //for supporting history api fallback
      historyApiFallback: {
        index: '/'
      },
      //compress: true
    },
    //devtool: 'source-map',
    mode: 'production'
}

module.exports = webpackConfig;