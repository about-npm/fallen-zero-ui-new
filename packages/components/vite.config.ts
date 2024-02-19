/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 14:07:43
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 14:43:39
 * @FilePath     : /fallen-zero-ui/packages/components/vite.config.ts
 * @FileName     :
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    // 打包后文件目录
    outDir: 'es',
    // 压缩
    // minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue', /\.scss/],
      input: ['index.ts'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: (chunkInfo) => {
            return `${chunkInfo.name.replace('packages/components/', '')}.mjs`;
          },
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: '../fallen-zero-ui/es',
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: (chunkInfo) => {
            return `${chunkInfo.name.replace('packages/components/', '')}.js`;
          },
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: '../fallen-zero-ui/lib',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      name: 'fallen-zero-ui',
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outDir: ['../fallen-zero-ui/es/src', '../fallen-zero-ui/lib/src'],
      tsconfigPath: '../../tsconfig.json',
    }),
    {
      name: 'style',
      generateBundle(_, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key];

          // rollup 内置方法, 将所有输出文件code中的.scss换成.css, 因为我们当时没有打包scss文件
          this.emitFile({
            type: 'asset',
            fileName: key, // 文件名名不变
            source: bundler.code
              .replace(/\.scss/g, '.css')
              .replace(
                /\.\.\/\.\.\/packages\/components\/src\/.*\/style/g,
                './style'
              ), // 文件内容处理成.css内容
          });
        }
      },
    },
  ],
});
