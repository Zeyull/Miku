declare namespace API {
  type AddAnnouncementData = {
    content: string;
    announcement_time: string;
    icon: string;
  };

  type AddAnnouncementResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: AnnouncementData;
    };

  type AnnouncementData = {
    id?: Id;
    content?: string;
    announcement_time?: string;
    icon?: string;
  };

  type AnnouncementListResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: AnnouncementData[];
    };

  type ArticleData = {
    id: Id;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    picture?: string;
  };

  type ArticleListResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { pagination?: PaginationData; data?: ArticleData[] };
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

  type DeleteAnnouncementResponse =
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

  type Id = number;

  type PaginationData = {
    count?: number;
  };

  type UpdateAnnouncementData = {
    content: string;
    announcement_time: string;
    icon: string;
  };

  type updateAnnouncementParams = {
    /** The unique identifier of the announcement to update */
    id: number;
  };

  type UpdateAnnouncementResponse =
    // #/components/schemas/CommonResponse
    CommonResponse & {
      data?: { id?: Id };
    };
}
