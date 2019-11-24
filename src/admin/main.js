import Vue from 'vue';
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import store from './store'

Vue.component('paginate', Paginate)

new Vue({
  el: "#app-root",
  store,
  render: h => h(App),

});