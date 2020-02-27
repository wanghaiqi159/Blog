const webpack = require('webpack')
module.exports = {
    baseUrl: './',
    runtimeCompiler: true,
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: true,
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
    productionSourceMap: true,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src/views'))
    //         .set('$', resolve('src/images'))
    //         .set('#', resolve('src/components'))
    // },
    css: {
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        modules: false
    },
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8085, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地 
                target: 'xxx',
                // 如果要代理 websockets
                ws: true,
                changeOrigin: true
            },
            '/test': { //测试
                target: 'xxx'
            },
            '/pre': { //预发布
                target: 'xxx'
            },
            '/pro': { //正式
                target: 'xxx'
            }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    }
}