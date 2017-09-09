/*
 * @Author: zhouJun 
 * @Date: 2017-09-09 12:21:33 
 * @Last Modified by:   zhouJun 
 * @Last Modified time: 2017-09-09 12:21:33 
 */
import app from './src/index.vue'
// import api from './APIconfig.js'
// import store from './src/stores'
app.el = '#root'
export default new Vue(app);
// new Vue({
//     el: '#root',
//     store,
//     render: h => h(app)
// });
//   const data = await http({
//         url:api.cms,
//         type:'jsonp',
//         data: {
//             keyProms:(true?'channelGomeShopHaohuoEmployees':'channelGomeShopHaohuoNonemployees')
//         }
//   })
// store.dispatch('init')