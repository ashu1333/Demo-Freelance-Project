import { createAction } from "@reduxjs/toolkit";
import { NewsPostRequest, CommentPostRequest } from "./model";

export const news = createAction("news/news", (data: any) => ({
  payload: data,
}));
export const news_post = createAction(
  "news/news_post",
  (data: NewsPostRequest) => ({ payload: { data } })
);
export const comment_post = createAction(
  "news/comment_post",
  (data: CommentPostRequest) => ({ payload: { data } })
);

export const post = createAction("news/post", (data: any) => ({
  payload: data,
}));
export const most_popular = createAction("news/most_popular", (data: any) => ({
  payload: data,
}));

export const latest = createAction("news/latest", (data: any) => ({
  payload: data,
}));
export const insta = createAction("news/insta", (data: any) => ({
  payload: data,
}));

export const feed_category = createAction(
  "news/feed_category",
  (data: any) => ({ payload: data })
);
export const feed_detail = createAction("news/feed_detail", (data: any) => ({
  payload: data,
}));

export const feed_list = createAction("news/feed_list", (data: any) => ({
  payload: data,
}));
