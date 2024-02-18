/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 11:48:00
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 11:55:46
 * @FilePath     : /fallen-zero-ui/packages/components/src/button/index.ts
 * @FileName     :
 */
import _Button from './button.vue';
import type { Plugin, App } from 'vue';

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    app.component(name, comp as SFCWithInstall<T>);
  };

  return comp as SFCWithInstall<T>;
};

export const Button = withInstall(_Button);

export default Button;
