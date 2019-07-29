// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolbar',
  'ion-label',
  'ion-item',
  'ion-button',
  'ion-content',
  'ion-title',
  'ion-list',
  'ion-img',
  'ion-fab-button',
  'ion-fab',
  'ion-card-title',
  'ion-card-content',
  'ion-card',
  'ion-icon',
  'ion-badge',
  'ion-input',
  'ion-tabs',
  'ion-tab',
  'ion-menu',
  'ion-select',
  'ion-select-option',
  'ion-slides',
  'ion-slide',
  'ion-checkbox',
  'ion-toggle'
]
Vue.use(VueFire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
