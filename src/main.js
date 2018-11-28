import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// register globally
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin)

// or for a single instance
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
