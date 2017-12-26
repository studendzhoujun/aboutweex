/*
 * @Author: zhouJun 
 * @Date: 2017-12-26 16:16:54 
 * @Last Modified by:   zhouJun 
 * @Last Modified time: 2017-12-26 16:16:54 
 */

const stream = weex.requireModule('stream')

function extend(source, options) {
    for (let i in options) {
        if (options.hasOwnProperty(i)){
            source[i] = options[i];
        }
    }
    return source;
}

export default function (options) {
    options=extend({
        method:'GET',
        url:'',
        type:'json',
        // headers:{"Access-Control-Allow-Origin":"*"}, 
        body:''
    },options)
    return new Promise(function(resolve, reject) {
        stream.fetch(options,function(res) {
            if(res.ok){
                resolve(res)     
            }else{         
                reject(res)
            }
        })
    })
}
