import Vue from 'vue'
import meta from 'vue-meta'
import mixin from '@/assets/js/global/mixin'
import router from '@/router'
import store from '@/store'
import VueMask from 'v-mask'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'

// eslint-disable-next-line
import '@/assets/js/global/filter'

// path to vuetify export

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(meta)
Vue.mixin(mixin)
Vue.use(VueMask)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
