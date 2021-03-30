import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentDisplayState = {
  clicks: number;
  skinhealth: any;
  eventList: any;
  most_popular: any;
  feed_detail: any;
  feed_list: any;
  feed_category: any;
  news: any;
  post: any;
  latest: any;
  insta: any;
};

let initialState: CurrentDisplayState = {
  clicks: 0,
  skinhealth: {},
  feed_detail: {},
  most_popular: {},
  feed_list: {},
  feed_category: {},
  latest: {},
  insta: {},
  eventList: [],
  news: {},
  post: {},
};

const countSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    newsResponse(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      state.news = action.payload;
    },

    mostPopularResponse(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      state.most_popular = action.payload;
    },

    latestResponse(state, action: PayloadAction<any>) {
      state.latest = action.payload;
    },

    instaResponse(state, action: PayloadAction<any>) {
      state.insta = action.payload;
    },

    feedListResponse(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      state.feed_list = action.payload;
    },
    feedCategoryResponse(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      state.feed_category = action.payload;
    },

    feedDetailResponse(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      state.feed_detail = action.payload;
    },

    postResponse(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state.post = action.payload;
    },

    addCount(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },
    dashboardEventList(state, action: PayloadAction<any>) {
      state.eventList = action.payload;
    },
    skinhealthR(state, action: PayloadAction<any>) {
      state.skinhealth = action.payload;
    },

    minusCount(state, action: PayloadAction<number>) {
      state.clicks -= action.payload;
    },
  },
});

export const {
  addCount,
  minusCount,
  skinhealthR,
  dashboardEventList,
  newsResponse,
  postResponse,
  mostPopularResponse,
  feedListResponse,
  feedCategoryResponse,
  feedDetailResponse,
  latestResponse,
  instaResponse,
} = countSlice.actions;

export default countSlice.reducer;
