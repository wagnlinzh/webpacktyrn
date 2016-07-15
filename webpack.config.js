var path = require('path');
var webpack=require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  //入口
  entry:
  {    
    bundle:'./main.js', //这个里面主要放的是各种css 等样式
    // jquery:'./js/jquery1.8.3.min.js',
    // supperSlide:'./js/jquery.SuperSlide.js',
    // mScrollbar:'./js/jquery.mCustomScrollbar.min.js',
    regCom:'./js/reg_com.js',
    common:'./js/common.js',

    //  wl:'./js/wl.js', 
    //  has:'./hah.js',
    // dealer:'./common/dealer.js',
    // market:'./common/base_market.js'
  },

  //出口
  output: {
    path: DIST_PATH, // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename:'[name].[hash].js',
    // publicPath: "./dist/"
  },

  //enable dev source map
  // devtool: 'eval-source-map',
  //enable dev server


  //引入模块
  module: {

    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude:'node_modules'
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=8192&name=./images/[hash].[ext]',
        exclude:'node_modules'
        
      },

      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel',
      //   // include: APP_PATH,
      //   query: {
      //     presets: ['es2015'],
      //   }
      // },

      {
        test:/\.html$/,
        loader:'html-loader',
        exclude:'node_modules'
      }
    ]
  },

  plugins: [

    //provide $, jQuery and window.jQuery to every script
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

    // new webpack.optimize.CommonsChunkPlugin('jquery', 'jquery.js'),
    //  new CommonsChunkPlugin('jquery.js'),
    
    new HtmlwebpackPlugin({
      title: 'Ha.html html-webpack-plugin',
      filename: 'ha.html',
      template:"./index.html",
      inject: 'body' 
    }),

  ],



};
