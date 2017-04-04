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
            {name: 'login', path: '/login', component: require('components/login')},
            {
                path: '/home', component: require('components/home'),
                children: [
                    {path: '/', redirect: {name: 'my.info'}},
                    {
                        name: 'my.info',
                        path: 'my.info',
                        component: require('components/my.info')
                    },
                    {
                        name: 'my.time.table',
                        path: 'my.time.table',
                        component: require('components/my.time.table')
                    },
                    {
                        name: 'notification',
                        path: 'notification',
                        component: require('components/notification')
                    },
                    {
                        name: 'my.app',
                        path: 'my.app',
                                component: require('components/my.app')
                    }
                ]
            }
        ]
    })
})