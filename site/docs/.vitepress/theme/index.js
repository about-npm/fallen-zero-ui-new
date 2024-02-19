/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 09:13:48
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 09:15:30
 * @FilePath     : /fallen-zero-ui/site/docs/theme/index.js
 * @FileName     :
 */
import DefaultTheme from 'vitepress/theme';
import FzUi from '@fallen-zero/ui';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(FzUi);
  },
};
