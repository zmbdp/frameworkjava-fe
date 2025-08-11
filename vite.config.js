import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //通过配置 alias 来定义路径的别名
    alias: {
      // __dirname: 当前文件所在目录的绝对路径
      '@': path.resolve(__dirname, 'src')
    }
  }
});
