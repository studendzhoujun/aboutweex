/*
 * @Author: zhouJun 
 * @Date: 2017-08-25 15:12:47 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-12-26 16:35:58
 */

import Vuex from 'vuex'
import http from './http.js'
if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

export default new Vuex.Store({
    state: {
      message:'hello'
    },
    mutations:{
      init(state,data){
        //   console.log(data)
      }
    },
    actions:{
        init ({state, commit}) {
            // const data=api.data
            // commit('init',data)
            const modal = weex.requireModule('modal')
            http({
                 url:'https://api.github.com/repos/alibaba/weex',
                // url:'https://api.douban.com/v2/movie/in_theaters'
               }).then(data=>{
                 console.log(data)
                 modal.toast({
                   message:data,
                   duration:2
                 })
               })
            console.log('hhhhhhhhhhhh')
        },
    }
});
