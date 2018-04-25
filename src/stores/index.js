/*
 * @Author: zhouJun 
 * @Date: 2017-08-25 15:12:47 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-04-25 15:55:27
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
                 //url:'https://api.github.com/repos/alibaba/weex',
                url:'/api/hello'
               }).then(data=>{
                 console.log(data)
                 modal.toast({
                   message:data.data.message+' zz',
                   duration:2
                 })
               })
        },
    }
});
