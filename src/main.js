import Vue from 'vue';
import App from './App.vue';
import './styles/main.scss';

//lib to get the load in loop
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false;

Vue.use(InfiniteLoading, {});

new Vue({
  render: (h) => h(App),
}).$mount('#root');
