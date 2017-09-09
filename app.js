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