// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取公告列表 GET /miku/announcements-list */
export async function getAnnouncementsList(options?: { [key: string]: any }) {
  return request<API.AnnouncementListResponse>('/miku/announcements-list', {
    method: 'GET',
    ...(options || {}),
  });
}
