import Api from "../common/api";
import { LogEntryObject } from "redux-logger";
import { HttpResponse, BaseResponse } from "../common/models";
import { Url } from "../common/url";

export class ProviderService {
  private static instance: ProviderService;
  private constructor() {}

  public static getInstance(): ProviderService {
    if (!ProviderService.instance) {
      ProviderService.instance = new ProviderService();
    }
    return ProviderService.instance;
  }
  public partnersList = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.partnersList);
  };

  public Terms_Condition = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.privacy);
  };

  public Message = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.dashboardWelcome_msg);
  };

  public trainingEducation = async (): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.trainingEducation);
  };

  public support = async (data: any): Promise<HttpResponse<BaseResponse>> => {
    return await Api.post(Url.support, data);
  };

  public Post = async (data): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.dashboardEventList);
  };
}
