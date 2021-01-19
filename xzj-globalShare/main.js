import Vue from 'vue'
import App from './App'
const $x={}
Vue.prototype.$x=$x
let mpShare=require('util/mapShare.js')
Vue.mixin(mpShare)
const app = new Vue({
    ...App
})
app.$mount()
