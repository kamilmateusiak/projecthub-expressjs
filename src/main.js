import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3030'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
