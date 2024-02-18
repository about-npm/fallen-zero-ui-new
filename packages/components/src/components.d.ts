/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 13:46:44
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 13:48:18
 * @FilePath     : /fallen-zero-ui/packages/components/src/components.d.ts
 * @FileName     :
 */
import * as components from './';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FzButton: typeof components.Button;
  }
}

export {};
