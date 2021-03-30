import { createAction } from "@reduxjs/toolkit";

export const partnersList = createAction("partners/List", (data: any) => ({
  payload: { data },
}));
export const trainingEducation = createAction(
  "training/education",
  (data: any) => ({ payload: data })
);
export const privacy = createAction("aesthician/privacy", (data: any) => ({
  payload: data,
}));

export const current_status_msg = createAction("provider/current_status");
export const partners_msg = createAction("provider/partner");
export const rewards_msg = createAction("provider/rewards");
export const feeds_msg = createAction("provider/feeds");
export const support = createAction("provider/support", (data: any) => ({
  payload: data,
}));
