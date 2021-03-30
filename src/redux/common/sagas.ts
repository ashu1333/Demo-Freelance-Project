import { all } from "redux-saga/effects";

import userSagas from "../user/saga";
import dashboardSagas from "../dashboard/saga";
import newsSagas from "../news/saga";
import OtherSagas from "../aesthician/saga";
import ProviderSagas from "../provider/saga";

export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...dashboardSagas,
    ...newsSagas,
    ...OtherSagas,
    ...ProviderSagas,
  ]);
}
