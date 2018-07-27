const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const CopyWebpackPlugin    = require("copy-webpack-plugin");
const purifyCSS            = require('purifycss-webpack');

exports.config = [
    // 编译HTML文件
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        chunks: ["index"],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/shopping.html",
        inject: true,
        chunks: ["shopping"],
        filename: "static/pages/shopping.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/bed.html",
        inject: true,
        chunks: ["bed"],
        filename: "static/pages/bed.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/storage.html",
        inject: true,
        chunks: ["storage"],
        filename: "static/pages/storage.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/tableAndChair.html",
        inject: true,
        chunks: ["tableAndChair"],
        filename: "static/pages/tableAndChair.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/more.html",
        inject: true,
        chunks: ["more"],
        filename: "static/pages/more.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/goodsDetails.html",
        inject: true,
        chunks: ["goodsDetails"],
        filename: "static/pages/goodsDetails.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/personInfo.html",
        inject: true,
        chunks: ["personInfo"],
        filename: "static/pages/personInfo.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/order.html",
        inject: true,
        chunks: ["order"],
        filename: "static/pages/order.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/mySell.html",
        inject: true,
        chunks: ["mySell"],
        filename: "static/pages/mySell.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/account.html",
        inject: true,
        chunks: ["account"],
        filename: "static/pages/account.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/bed.html",
        inject: true,
        chunks: ["bed"],
        filename: "static/pages/bed.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/sofa.html",
        inject: true,
        chunks: ["sofa"],
        filename: "static/pages/sofa.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/login.html",
        inject: true,
        chunks: ["login"],
        filename: "static/pages/login.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/register.html",
        inject: true,
        chunks: ["register"],
        filename: "static/pages/register.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/goodsDetails_assem.html",
        inject: true,
        chunks: ["goodsDetails_assem"],
        filename: "static/pages/goodsDetails_assem.html"
    }),
    // 清除文件
    new CleanWebpackPlugin("static/**/*.*"),
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    // 抽离CSS
    new ExtractTextPlugin('static/css/[name].css'),
    // 文件拷贝迁移
    new CopyWebpackPlugin([{
        from: './src/json',
        to: './static/json'
    }]),
    // 清除未使用的CSS
    // new purifyCSS({paths: glob.sync(path.join(__dirname, './src/*.html'))}),
    // 版权声明
    new webpack.BannerPlugin("版权归XXX所有， 翻版必究！"),
    // 全局引入三方插件
    new webpack.ProvidePlugin({
        $: 'jquery'
    }),
]