// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueResource from 'vue-resource';

axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"
/*axios.defaults.headers.post["Content-type"] = "application/json"*/
Vue.prototype.$axios=axios;
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
