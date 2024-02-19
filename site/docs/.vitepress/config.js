/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 08:57:28
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 09:25:22
 * @FilePath     : /fallen-zero-ui/site/docs/.vitepress/config.js
 * @FileName     :
 */
export default {
  base: process.env.NODE_ENV === 'production' ? '/easyest/' : '/',
  themeConfig: {
    siteTitle: 'Fallen-Zero-UI',
    nav: [
      { text: '指南', link: '/guild/installation/' },
      { text: '组件', link: '/components/button/' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/about-npm/fallen-zero-ui-new',
      },
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation/',
            },
            {
              text: '快速上手',
              link: '/guild/quickstart/',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button/',
            },
          ],
        },
      ],
    },
  },
};
