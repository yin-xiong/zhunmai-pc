var path = require('path')
function resolve (dir) {
    console.log(__dirname)
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
    outputDir: 'dist',
    assetsDir: "dist",
    productionSourceMap: false,
    filenameHashing: false,
    lintOnSave: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/home': {
                target: 'http://zhunmaics.yujinhudong.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/home': '/home'
                }
            },
        },
    },
}
