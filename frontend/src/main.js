import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.dispatch("getUserInfo") //새로고침하더라도 항상 유지하도록 설정
  },
  render: h => h(App),
}).$mount('#app')
