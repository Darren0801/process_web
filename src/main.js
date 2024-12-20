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

// main.js中引入以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
