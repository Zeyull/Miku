import { message } from 'antd';
import { RequestConfig, RequestOptions, formatMessage } from 'umi';

/**
 * @name 错误处理
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误接收及处理，可以根据自己的请求来选择是否抛出自定义Error
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // todo 待测试
      if (error.response) {
        message.error(error.response.msg);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        message.error(formatMessage({ id: 'api_error_none_response' }));
      } else {
        // 发送请求时出了点问题
        message.error(formatMessage({ id: 'api_error_request' }));
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      return response;
    },
  ],
};
