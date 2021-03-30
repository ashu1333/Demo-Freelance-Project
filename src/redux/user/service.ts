import Api from "../common/api";
import {
  LoginRequest,
  SignInRequest,
  ForgotRequest,
  ResetPasswordRequest,
  VerifyMail,
} from "./model";
import { HttpResponse, BaseResponse } from "../common/models";
import { Url } from "../../redux/common/url";

export class UserService {
  private static instance: UserService;
  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public login = async (
    data: LoginRequest
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.post(Url.login, data);
  };
  public register = async (
    data: SignInRequest
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.post(Url.signIn, data);
  };
  public forgotPassword = async (
    data: ForgotRequest
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.post(Url.forgot, data);
  };
  public resetPassword = async (
    data: ResetPasswordRequest
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.put(Url.resetPassword, data);
  };
  public verifyMail = async (
    data: VerifyMail
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.put(Url.verifyMail, data);
  };
  public verifyMailResend = async (
    data: VerifyMail
  ): Promise<HttpResponse<BaseResponse>> => {
    return await Api.get(Url.verifyMailResend + data.token);
  };
}
