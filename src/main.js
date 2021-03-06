import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'onsenui'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

import App from './App'

import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
