/*
 * @Author: zhouJun 
 * @Date: 2018-04-25 15:35:25 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-04-25 15:38:24
 */

 const mock = {
     api:'/api/hello',
     response:function(req,res){
         res.send({
             state:'ok',
             message:'hello world'
         })
     }
 }
 module.exports=mock