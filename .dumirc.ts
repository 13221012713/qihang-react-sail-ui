import { defineConfig } from 'dumi';

export default defineConfig({
  // ...
  styles: [
   `.dumi-default-header-left {
      width: 220px !important;
   }`,
 ],
  themeConfig: {
    name: 'sail-ui',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Foo' }, // components会默认自动对应到src文件夹
    ],
  },
  // ...
});
