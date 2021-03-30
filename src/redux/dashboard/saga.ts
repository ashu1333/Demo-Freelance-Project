import { takeLatest, call, put } from "redux-saga/effects";
import { DashboardAction } from "../common/actions";
import { DashboardService } from "../dashboard/service";
import { dashboardEventList, dashboardWelcomeMsg } from "./reducer";
import { loader, showToast } from "../user/reducer";

export function* dashboardEvent_List(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(
      DashboardService.getInstance().dashboardEvent_List
    );
    if (response.data.data.items) {
      yield put(dashboardEventList(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* dashboardWelcome_msg(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(
      DashboardService.getInstance().dashboardWelcome_msg
    );

    if (response.data.data.items) {
      yield put(dashboardWelcomeMsg(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* userEffects() {
  yield takeLatest(DashboardAction.dashboard.type, dashboardEvent_List);
  yield takeLatest(
    DashboardAction.dashboard_welcome_msg.type,
    dashboardWelcome_msg
  );
}

const dashboardSagas = [call(userEffects)];

export default dashboardSagas;
