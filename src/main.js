// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import Home from 'components/Home'
import App from './App'

Vue.use(VueRouter)
Vue.use(Mint)

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    routes: [
      {path: '/login', component: require('components/Login')},
      {path: '/home', component: Home}
    ]
  })
})