import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/request',
  ],
  routes: [
    { path: '/home', component: '@/pages/home/index.tsx' },
    {
      path: '/blog-detail',
      component: '@/pages/blog/blog-detail/index.tsx',
    },
    { path: '/', redirect: '/home' },
  ],
  npmClient: 'pnpm',
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
  proxy: {
    '/miku': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
  antd: {},
  request: {},
});
