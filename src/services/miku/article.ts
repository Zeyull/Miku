// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取文章 GET /miku/article */
export async function getArticle(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getArticleParams,
  options?: { [key: string]: any },
) {
  return request<API.ArticleResponse>('/miku/article', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文章列表 GET /miku/articles-list */
export async function getArticleList(options?: { [key: string]: any }) {
  return request<API.ArticleListResponse>('/miku/articles-list', {
    method: 'GET',
    ...(options || {}),
  });
}
