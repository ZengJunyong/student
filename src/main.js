import "assets/main.css"
import 'mint-ui/lib/style.css'

import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
Vue.use(Mint)
Vue.use(require('vue-verify'))

new Vue({
    el: '#app',
    render: h => h(App),
    router: new VueRouter({
        routes: [
            {path: '/login', component: require('components/Login')}
        ]
    })
})