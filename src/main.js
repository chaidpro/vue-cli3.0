import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
// 打印当前所处的环境
console.log(process.env.VUE_APP_URL);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
