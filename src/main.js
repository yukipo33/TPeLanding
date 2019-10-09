import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router'
import store from '../src/store/store'
import BootstrapVue from 'bootstrap-vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles


//import '../public/css/styles.css'

Vue.use(BootstrapVue)
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
