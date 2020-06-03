import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import dateFilter from "./filters/date.filter";
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

require('@/store/subscriber')

Vue.config.productionTip = false

//axios.defaults.baseURL = 'http://qoima.com/api/admin'
axios.defaults.baseURL = 'https://laravel.memento-mori.site/api/admin'

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
