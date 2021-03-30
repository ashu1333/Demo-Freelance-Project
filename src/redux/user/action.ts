import { createAction } from "@reduxjs/toolkit";
import {
  LoginRequest,
  SignInRequest,
  ForgotRequest,
  ResetPasswordRequest,
  VerifyMail,
} from "./model";

export const login = createAction(
  "user/login",
  (data: LoginRequest, history: any) => ({ payload: { data, history } })
);
export const resetPassword = createAction(
  "user/resetPassword",
  (data: ResetPasswordRequest, history: any) => ({ payload: { data, history } })
);
export const verifyMail = createAction(
  "user/verifyMail",
  (data: VerifyMail, history: any) => ({ payload: { data, history } })
);
export const verifyMailResend = createAction(
  "user/verifyMailResend",
  (data: VerifyMail, history: any) => ({ payload: { data, history } })
);

export const register = createAction(
  "user/register",
  (data: SignInRequest, history: any) => ({ payload: { data, history } })
);
export const forgotPassword = createAction(
  "user/forgotPassword",
  (data: ForgotRequest, history: any) => ({ payload: { data, history } })
);
