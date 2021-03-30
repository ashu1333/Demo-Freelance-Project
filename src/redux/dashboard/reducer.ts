import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentDisplayState = {
  clicks: number;

  eventList: any;
  dashboardWelcome_msg: any;
};

let initialState: CurrentDisplayState = {
  clicks: 0,

  eventList: [],
  dashboardWelcome_msg: {},
};

const countSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },
    dashboardEventList(state, action: PayloadAction<any>) {
      state.eventList = action.payload;
    },
    dashboardWelcomeMsg(state, action: PayloadAction<any>) {
      state.dashboardWelcome_msg = action.payload;
    },

    minusCount(state, action: PayloadAction<number>) {
      state.clicks -= action.payload;
    },
  },
});

export const {
  addCount,
  minusCount,

  dashboardEventList,
  dashboardWelcomeMsg,
} = countSlice.actions;

export default countSlice.reducer;
