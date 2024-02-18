/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 11:47:09
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 13:35:56
 * @FilePath     : /fallen-zero-ui/packages/components/index.ts
 * @FileName     :
 */
export * from './src';
import * as components from './src';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c as keyof typeof components]);
    }
  },
};
