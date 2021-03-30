import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "../dashboard/reducer";
import userReducer from "../user/reducer";
import newsReducer from "../news/reducer";
import OtherReducer from "../aesthician/reducer";
import ProviderReducer from "../provider/reducer";

const reducers = {
  dashboard: dashboardReducer,
  user: userReducer,
  news: newsReducer,
  other: OtherReducer,
  Provider: ProviderReducer,
};

export let rootReducer = combineReducers({
  ...reducers,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...reducers,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
