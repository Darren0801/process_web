import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/app.scss';
import '@/assets/css/base.css';
import '@/assets/css/common.scss';
import store from './store'; // 引入 store

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);


// 动态设置根元素的 font-size
function setRemUnit() {
  const baseSize = 20; // 基础字体大小
  const scale = document.documentElement.clientWidth / 1920; // 假设设计稿宽度为 1920px
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'; // 最大缩放比例为 2
}

setRemUnit();
window.addEventListener('resize', setRemUnit);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
