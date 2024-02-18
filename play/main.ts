/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 11:36:40
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 13:42:23
 * @FilePath     : /fallen-zero-ui/play/main.ts
 * @FileName     :
 */
import { createApp } from 'vue';
import App from './app.vue';
import fzUi from '@fallen-zero-ui/components';

const app = createApp(App);

app.use(fzUi);

app.mount('#app');
