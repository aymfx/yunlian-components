import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        dir: 'dist',
      },
    },
    lib: {
      entry: './index.ts',
      name: 'easyest',
      fileName: 'easyest',
      formats: ['es', 'umd', 'cjs'],
    },
  },
  plugins: [vue()],
});
