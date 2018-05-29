import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHadler from './components/AuthHadler'

Vue.use(VueRouter);

const router = new VueRouter({
  // replace #-router
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHadler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');