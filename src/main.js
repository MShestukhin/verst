import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import  HelloWorld from './components/HelloWorld'
// register globally
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin)
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name:'home',
            component: Main,
        },
        {
            path: '/post',
            name:'post',
            component: HelloWorld,
            props: true,
        },
    ]
})

// or for a single instance
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
