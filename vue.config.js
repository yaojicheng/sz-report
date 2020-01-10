const path = require('path');

module.exports = {
    publicPath: './',
    outputDir:'kf_manage',
    assetsDir:'static',
    lintOnSave: false,
    devServer:{
        open: true,
        port: 8080,
        https: false,
        hotOnly: false
    },
    /*configureWebpack:config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }*/
    configureWebpack:{
        resolve:{  // 配置解析别名
            alias:{
                '@':path.resolve(__dirname,'./src'),
                '@views':path.resolve(__dirname, './src/views'),
                '@image':path.resolve(__dirname, './src/assets/images'),
                '@components':path.resolve(__dirname, './src/components'),
                '@layout':path.resolve(__dirname, './src/layout'),
                '@utils':path.resolve(__dirname, './src/utils'),
            }
        }
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 compress: {
    //                     dead_code: true,
    //                     drop_console: false,//console
    //                     drop_debugger: true,
    //                     pure_funcs: ['console.log']//移除console
    //                 }
    //             }
    //         })
    //     ]
    // }
}
