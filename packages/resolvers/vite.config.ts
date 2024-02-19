/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 11:36:35
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 12:01:40
 * @FilePath     : /fallen-zero-ui/packages/resolvers/vite.config.ts
 * @FileName     :
 */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    // 打包后文件目录
    outDir: 'es',
    // 压缩
    // minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: [],
      input: ['index.ts'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: 'dist',
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: 'dist',
        },
      ],
    },
    lib: {
      entry: './index.ts',
    },
  },
  plugins: [
    dts({
      entryRoot: './',
      outDir: ['dist'],
      tsconfigPath: '../../tsconfig.json',
      exclude: ['vite.config.ts'],
    }),
  ],
});
