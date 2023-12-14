// packages/shared/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    // outDir: 'dist',

    // 排除不想打进库里的依赖包
    rollupOptions: {
      external: [/lodash.*/],
      output: {
        // umd模式需要全局变量
        globals: {
          lodash: 'lodash',
        },
      },
    },

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './index.ts',

      // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
      // formats: ['es', 'umd'],

      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'AymfxUi',
      // 产物文件名称
      fileName: 'aymfx-ui',
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false,
  },
});
