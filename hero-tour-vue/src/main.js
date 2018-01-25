// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store'
import { initService } from './service/idleDataId'

Vue.config.productionTip = false

// 初始化可用的最小英雄ID/危机ID/消息ID
initService(store.state.heroes, store.state.crisisLibary, store.state.msgs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
