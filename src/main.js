// src/main.js
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 导入 index.scss 样式文件
import '@/styles/index.scss';
// 导入 pinia 实例
import pinia from '@/stores';

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
app.mount('#app');

