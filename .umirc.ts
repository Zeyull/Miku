import { join } from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/request',
    '@umijs/max-plugin-openapi',
  ],
  routes: [
    { path: '/home', component: '@/pages/home/index.tsx' },
    {
      path: '/blog-detail/:id',
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
  title: '落雪如衣',
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: join(__dirname, 'openapi.json'),
      mock: false,
    },
  ],
});
