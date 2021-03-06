// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';
import store from './store';

// 重置样式
import './assets/css/main.css';
import './assets/font/iconfont.css';

//引入icons
import './icons';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
