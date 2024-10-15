declare namespace API {
  type addAnnouncementData = {
    content: string;
    announcement_time: string;
    icon: string;
  };

  type addAnnouncementResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: announcementData;
    };

  type addArticleData = {
    title: string;
    content: string;
    picture?: string;
  };

  type addArticleResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };

  type announcementData = {
    id?: Id;
    content?: string;
    announcement_time?: string;
    icon?: string;
  };

  type announcementListResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: announcementData[];
    };

  type articleData = {
    id: Id;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    picture?: string;
  };

  type articleListResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { pagination?: paginationData; data?: articleData };
    };

  type articleResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: articleData;
    };

  type CommonResponse = {
    code?: number;
    msg?: string;
    /** 公用的data字段 */
    data?: Record<string, any>;
  };

  type deleteAnnouncementParams = {
    /** The unique identifier of the announcement to delete */
    id: number;
  };

  type deleteAnnouncementResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };

  type ErrorResponse = {
    code?: number;
    msg?: string;
    /** 任意值 */
    data?: any;
  };

  type getArticleParams = {
    /** The unique identifier of the account */
    id: number;
  };

  type Id = number;

  type LoginResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { token?: string; id?: Id };
    };

  type paginationData = {
    count?: number;
  };

  type RegisterResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };

  type updateAnnouncementData = {
    content: string;
    announcement_time: string;
    icon: string;
  };

  type updateAnnouncementParams = {
    /** The unique identifier of the announcement to update */
    id: number;
  };

  type updateAnnouncementResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };

  type updateArticleData = {
    title: string;
    content: string;
    picture?: string;
  };

  type updateArticleParams = {
    /** The unique identifier of the account to update */
    id: number;
  };

  type updateArticleResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };

  type UserLogin = {
    username: string;
    password: string;
  };

  type UserRegister = {
    username: string;
    password: string;
  };

  type UserToken = {
    token: string;
  };
}
