import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// register globally
const YmapPlugin =  require('vue-yandex-maps');
Vue.use(YmapPlugin)

// or for a single instance
const { yandexMap, ymapMarker } = require('vue-yandex-maps');
new Vue({
    components: { yandexMap, ymapMarker }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
