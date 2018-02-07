/*
 * @Author: zhouJun 
 * @Date: 2018-02-07 14:06:40 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-02-07 14:23:55
 */
 const express = require('express')
 const path = require('path')
 const webpack = require('webpack')
 const webpackDevMiddleware = require('webpack-dev-middleware')
 const webpackHotMiddleware = require('webpack-hot-middleware')
 const webpackDevConfig = require('../webpack.config.js')
 const app = express()
 const compiler = webpack(webpackDevConfig)
 const publicPath = 'http://localhost:8080/'
 app.use(webpackDevMiddleware(compiler,{
     publicPath:publicPath,
     noInfo:true,
     stats:{
         colors:true
     }
 }))
 app.use(webpackHotMiddleware(compiler))
 
 const reload = require('reload')
 const http = require('http')
 const server = http.createServer(app)
 reload(server,app)
 server.listen(8080,()=>{
     console.log('server run on port 8080')
 })