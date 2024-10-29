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
  publicPath: '/app/miku/',
  base: '/app/miku/',
  favicons: ['./favicon.ico'],
  outputPath: '/var/www/html',
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
  title: 'Miku',
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: join(__dirname, 'openapi.json'),
      mock: false,
    },
  ],
});
