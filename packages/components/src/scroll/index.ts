/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 11:11:39
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-21 09:51:58
 * @FilePath     : /fallen-zero-ui/packages/components/src/scroll/index.ts
 * @FileName     :
 */
import _Scroll from './index.vue';
import type { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const Scroll = withInstall(_Scroll);

export default Scroll;
