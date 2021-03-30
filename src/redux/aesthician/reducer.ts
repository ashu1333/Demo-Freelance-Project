import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentDisplayState = {
  terms: any;
  privacy: any;
  eventList: any;
};

let initialState: CurrentDisplayState = {
  terms: {},
  privacy: {},
  eventList: [],
};

const countSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    dashboardEventList(state, action: PayloadAction<any>) {
      state.eventList = action.payload;
    },

    termsconditionResponse(state, action: PayloadAction<any>) {
      state.terms = action.payload;
    },

    privacyPolicyResponse(state, action: PayloadAction<any>) {
      state.privacy = action.payload;
    },
  },
});

export const {
  dashboardEventList,
  termsconditionResponse,
  privacyPolicyResponse,
} = countSlice.actions;

export default countSlice.reducer;
