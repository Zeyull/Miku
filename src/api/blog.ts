import { request } from 'umi';

// 获取所有文章的请求
export async function getArticlesList() {
  return request('/miku/articles-list');
}
