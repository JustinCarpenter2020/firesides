import bootstrap from 'bootstrap'
import corejs from 'core-js'
import jquery from 'jquery'
import popper from 'popper.js'
import { createApp } from 'vue'
import App from './App.vue'
import { AppState } from './AppState'
import './AuthConfig'
import router from './router'

// window.$ = window.jQuery = require('jquery')

createApp(App, {
  AppState

})
  .use(router, popper, jquery, corejs, bootstrap, { install: function(Vue, options) { Vue.prototype.$jQuery = require('jquery') } })
  .mount('#app')
