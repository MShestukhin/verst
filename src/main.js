import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import  HelloWorld from './components/More'
import  Provider from './components/Provider'
import  Product from './components/Product'
import  Contacts from './components/Contacts'
// register globally
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin)
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name:'home',
            component: Main
        },
        {
            path: '/post/:link',
            name:'post',
            component: HelloWorld,
            props: true
        },
        {
            path: '/provider',
            name:'provider',
            component: Provider,
            props: true
        },
        {
            path: '/product',
            name:'product',
            component: Product,
            props: true
        },
        {
            path: '/contacts',
            name:'contacts',
            component: Contacts,
            props: true
        },
    ]
})

// or for a single instance
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
