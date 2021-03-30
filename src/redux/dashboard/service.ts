import Api from "../common/api";
import { HttpResponse, BaseResponse } from "../common/models";
import { Url } from "../../redux/common/url";

export class DashboardService {
  private static instance: DashboardService;
  private constructor() {}

  public static getInstance(): DashboardService {
    if (!DashboardService.instance) {
      DashboardService.instance = new DashboardService();
    }
    return DashboardService.instance;
  }
  public dashboardEvent_List = async (): Promise<
    HttpResponse<BaseResponse>
  > => {
    return await Api.get(Url.dashboardEventList);
  };

  public dashboardWelcome_msg = async (): Promise<
    HttpResponse<BaseResponse>
  > => {
    return await Api.get(Url.dashboardWelcome_msg);
  };
}
