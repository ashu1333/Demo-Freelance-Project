import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentDisplayState = {
  terms: any;
  trainingEducation: any;
  currentStatus: any;
  partners: any;
  rewards: any;
  feeds: any;
  partnersList: any;
};

let initialState: CurrentDisplayState = {
  terms: {},
  trainingEducation: [],
  partnersList: [],
  currentStatus: {},
  partners: {},
  rewards: {},
  feeds: {},
};

const countSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    partnersListResponse(state, action: PayloadAction<any>) {
      state.partnersList = action.payload;
    },
    partnerResponse(state, action: PayloadAction<any>) {
      state.partners = action.payload;
      console.log(state.partners);
    },
    termsconditionResponse(state, action: PayloadAction<any>) {
      state.terms = action.payload;
    },

    trainingEducationResponse(state, action: PayloadAction<any>) {
      state.trainingEducation = action.payload;
    },

    currentStatusResponse(state, action: PayloadAction<any>) {
      console.log(state);
      state.currentStatus = action.payload;
    },

    rewardsResponse(state, action: PayloadAction<any>) {
      state.rewards = action.payload;
    },
    feedsResponse(state, action: PayloadAction<any>) {
      state.feeds = action.payload;
    },
  },
});

export const {
  partnersListResponse,
  termsconditionResponse,
  trainingEducationResponse,
  currentStatusResponse,
  partnerResponse,
  rewardsResponse,
  feedsResponse,
} = countSlice.actions;

export default countSlice.reducer;
