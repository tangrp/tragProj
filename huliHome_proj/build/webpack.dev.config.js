// 1.【模块引入】
const webpack = require('webpack');
const path    = require('path');
const glob    = require('glob');
const Entry   = require('./webpack.entry');
const Plugin    = require('./webpack.plugin');
const Loader  = require('./webpack.loader');


// 2.【配置任务】
module.exports = {
    // * SourceMap
    // 生成资源映射文件/调试
    // 注意：在产品阶段切记一定不要设置该模式
    // devtool: 'source-map',
    // * Context
    context: path.resolve(__dirname, '../'),
    // * Entry
    entry: Entry.config,
    // * Output
    output: {
        // 输出路径
        path: path.resolve(__dirname, '../dist/'),
        // 文件名
        filename: "static/js/[name]-bundle.js",
        publicPath: "http://localhost:8080/dist/"
    },
    // * Loader
    module: {
        rules: Loader.config
    },
    // * Plugin
    plugins: Plugin.config,
    // * resolve
    resolve: {
        // 路径解析/创建别名
        alias: {
            'tools-JS': path.resolve(__dirname, '../src/js/tools.js'),
            'normalized-LESS': path.resolve(__dirname, '../src/less/normalized.less'),
            'common-LESS': path.resolve(__dirname, '../src/less/common.less'),
            'footer-LESS': path.resolve(__dirname, '../src/less/footer.less'),
            'header-LESS': path.resolve(__dirname, '../src/less/header.less'),
        }
    },
    // * devServer
    devServer:{
        // 设置服务器访问的基本目录
        // contentBase:path.resolve(__dirname,'./dist'), // 最好设置成绝对路径
        contentBase:'./dist', // 最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port:8080,
        // 设置自动拉起浏览器
        open:true,
        // 自动刷新
        inline: true,
        // 模块热替换
        hot: true
    }
}
