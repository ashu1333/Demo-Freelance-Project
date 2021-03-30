import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast } from "../user/model";

type UserState = {
  data: any;
  clicks: number;
  loader: boolean;
  toast: Toast;
  mailVerification: any;
  loginUser: any;
};

let initialState: UserState = {
  data: {},
  clicks: 0,
  loader: false,
  toast: { show: false, message: "", duration: 3000 },
  mailVerification: {},
  loginUser: { loginAsCustomer: null },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<Toast>) {
      state.toast = action.payload;
    },
    addCount(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },
    loader(state, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    },

    loginResponse(state, action: PayloadAction<number>) {
      console.log(action.payload);
      state.data = action.payload;
    },

    registerResponse(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },

    forgotPasswordResponse(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },
    minusCount(state, action: PayloadAction<number>) {
      state.clicks -= action.payload;
    },
    mailVerification(state, action: PayloadAction<number>) {
      state.mailVerification = action.payload;
    },

    loginUser(state, action: PayloadAction<any>) {
      state.loginUser = action.payload;
    },
  },
});

export const {
  showToast,
  addCount,
  loader,
  minusCount,
  loginResponse,
  registerResponse,
  forgotPasswordResponse,
  mailVerification,
  loginUser,
} = userSlice.actions;

export default userSlice.reducer;
