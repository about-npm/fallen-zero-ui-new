/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 10:55:03
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 10:57:03
 * @FilePath     : /fallen-zero-ui/packages/components/utils/install.ts
 * @FileName     :
 */

import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
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
