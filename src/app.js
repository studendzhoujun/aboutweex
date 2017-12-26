/*
 * @Author: zhouJun 
 * @Date: 2017-09-09 12:21:33 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-12-26 16:20:00
 */
import app from './index.vue'
import store from './stores/index.js'
// app.el = '#root'
console.log('===11')
export default new Vue(Vue.util.extend({ el: '#root', store }, app));
// export default new Vue(app);
store.dispatch('init')