// src/main.js
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'

// 导入 index.scss 样式文件
import '@/styles/index.scss';
// 导入 pinia 实例
import pinia from '@/stores';
// 导入路由实例
import router from '@/router';


const app = createApp(App);

for (const [key, component] of Object.entries(
  ElementPlusIconsVue
)) {
  // 注册 Element Plus 图标
  app.component(key, component);
}

app.use(ElementPlus);

// 注册 pinia 实例
app.use(pinia);
app.use(router);
app.mount('#app');
app.component(SvgIcon.name, SvgIcon)
