// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取文章列表 GET /miku/articles-list */
export async function getArticleList(options?: { [key: string]: any }) {
  return request<API.ArticleListResponse>('/miku/articles-list', {
    method: 'GET',
    ...(options || {}),
  });
}
