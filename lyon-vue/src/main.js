import Vue from 'vue'
import VueRouter from  'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'

Vue.config.productionTip = false


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
