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
            {path: '/login', name: 'login', component: require('components/login')},
            {path: '/menu', name: 'menu', component: require('components/menu')},
            {
                path: '/home', component: require('components/home'),
                children: [
                    {path: '/', redirect: {name: 'my.info'}},
                    {path: '/my.info', name: 'my.info', component: require('components/my.info')},
                    {path: '/my.time.table', name: 'my.time.table', component: require('components/my.time.table')},
                    {path: '/notification', name: 'notification', component: require('components/notification')},
                    {path: '/my.app', name: 'my.app', component: require('components/my.app')}
                ]
            }
        ]
    })
})