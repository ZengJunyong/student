import 'mint-ui/lib/style.css'
import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss"
import "assets/main.css"

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
            {path: '/', redirect: '/login'},
            {name: 'login', path: '/login', component: require('components/Login')},
            {
                path: '/home', component: require('components/Home'),
                children: [
                    {path: '/', redirect: {name: 'myInfo'}},
                    {
                        name: 'myInfo',
                        path: 'myInfo',
                        component: require('components/MyInfo')
                    },
                    {
                        name: 'myTimeTable',
                        path: 'myTimeTable',
                        component: require('components/MyTimeTable')
                    },
                    {
                        name: 'notification',
                        path: 'notification',
                        component: require('components/notification')
                    },
                    {
                        name: 'myApp',
                        path: 'myApp',
                        component: require('components/MyApp')
                    }
                ]
            }
        ]
    })
})