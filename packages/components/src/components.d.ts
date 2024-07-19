/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 13:46:44
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-07-19 17:11:53
 * @FilePath     : /fallen-zero-ui-new/packages/components/src/components.d.ts
 * @FileName     :
 */
import * as components from './';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FzButton: typeof components.Button;
    FzCountTo: typeof components.CountTo;
    FzScroll: typeof components.Scroll;
    FzEcharts: typeof components.Echarts;
  }
}

export {};
