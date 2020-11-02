import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import index from './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  index,
  render: h => h(App)
}).$mount('#app')
