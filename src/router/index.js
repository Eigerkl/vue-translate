import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TranslateOutput from '../components/TranslateOutput'
import TranslateForm from '../components/TranslateForm'

Vue.use(Router);
Vue.use(Vuex);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components',
      name: 'TranslateForm',
      component: TranslateForm
    },
    {
      path: '/components',
      name: 'TranslateOutput',
      component: TranslateOutput
    }
  ]
})
