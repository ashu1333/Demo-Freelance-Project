import Api from "../common/api";
import { LogEntryObject } from "redux-logger";
import { HttpResponse, BaseResponse } from "../common/models";
import { Url } from "../common/url";

export class OtherService {
  private static instance: OtherService;
  private constructor() {}

  public static getInstance(): OtherService {
    if (!OtherService.instance) {
      OtherService.instance = new OtherService();
    }
    return OtherService.instance;
  }
  public dashboardEvent_List = async (): Promise<
    HttpResponse<BaseResponse>
  > => {
    return await Api.get(Url.dashboardEventList);
  };

  public Terms_Condition = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.privacy);
  };
  public Privacy_Policy = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.terms);
  };
  public Post = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.dashboardEventList);
  };
}
