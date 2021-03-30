import { createAction } from "@reduxjs/toolkit";
import { ApiRequest } from "./model";

export const post = createAction("news/news_post", (data: ApiRequest) => ({
  payload: { data },
}));
export const termscondition = createAction(
  "aesthician/termscondition",
  (data: any) => ({ payload: data })
);
export const privacy = createAction("aesthician/privacy", (data: any) => ({
  payload: data,
}));
