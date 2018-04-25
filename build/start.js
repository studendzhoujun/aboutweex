/*
 * @Author: zhouJun 
 * @Date: 2018-02-07 14:06:40 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-04-25 15:32:52
 */
 const express = require('express')
 const path = require('path')
 const fs = require('fs')
 const argv = require('optimist').argv
 const webpack = require('webpack')
 const webpackDevMiddleware = require('webpack-dev-middleware')
 const webpackHotMiddleware = require('webpack-hot-middleware')
 const webpackDevConfig = require('../webpack.config.js')
 const app = express()
 const compiler = webpack(webpackDevConfig)
 const publicPath = '/'
 const port = process.env.PROT || 3333
 app.use(webpackDevMiddleware(compiler,{
     publicPath:publicPath,
     stats:{
         colors:true,
         chunks:false
     }
 }))
 // mock/proxy api requests
 let mockDir = path.resolve(__dirname,'../mock');
 ;;(function(mockDir){
    fs.readdirSync(mockDir).forEach((file)=>{
        let filePath = path.resolve(mockDir,file)
        let mock;
        // 递归
        if(fs.statSync(filePath).isDirectory()){
            setMock(filePath)
        }else{
            mock=require(filePath);
            app.use(mock.api, argv.proxy ? proxyMiddleware({target: 'http://' + argv.proxy}) : mock.response);
        }
    })
 })(mockDir)
// webpack compiler
 app.use(webpackHotMiddleware(compiler))
 app.use(express.static('static'))
//  const reload = require('reload')
//  const http = require('http')
//  const server = http.createServer(app)
//  reload(server,app)
//  server.listen(8080,()=>{
//      console.log('server run on port 8080')
//  })
app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    let url = 'http://localhost:'+port
    console.log(`Dev server listening at ${url} `)
})