import Api from "../common/api";
import { LogEntryObject } from "redux-logger";
import { CommentPostRequest } from "./model";
import { HttpResponse, BaseResponse } from "../common/models";
import { Url } from "../common/url";

export class NewsService {
  private static instance: NewsService;
  private constructor() {}

  public static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }
  public News_List = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.news);
  };
  public Most_Popular = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feed + data);
  };
  public Latest = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feed + data);
  };
  public Insta = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feed + data);
  };
  public Feed_List = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feedlist);
  };
  public Comment_Post = async (
    data: CommentPostRequest
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.post(Url.commentpost, data);
  };
  public Feed_Category = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feedcategory);
  };
  public Feed_Detail = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.feeddetail + data);
  };
}
