import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue router allows us to specify a path that maps to a certain component that we create
Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

const routes = [
    { path: '/data/:type', component: Data }  // :type is a query string
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
