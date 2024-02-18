/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 11:31:33
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 11:32:29
 * @FilePath     : /fallen-zero-ui/play/vite.config.ts
 * @FileName     :
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    plugins: [vue()],
  };
});
