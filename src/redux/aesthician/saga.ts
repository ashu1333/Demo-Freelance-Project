import { takeLatest, call, put } from "redux-saga/effects";
import { OtherAction } from "../common/actions";
import { OtherService } from "./service";
import {
  dashboardEventList,
  termsconditionResponse,
  privacyPolicyResponse,
} from "./reducer";
import { loader, showToast } from "../user/reducer";

export function* termscondition(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(OtherService.getInstance().Terms_Condition);
    console.log(response);

    if (response.data.data.items) {
    }
    yield put(termsconditionResponse(response.data.data.items));
    yield put(
      showToast({
        message: String("Event List Fetched"),
        show: true,
        type: "success",
        duration: 3000,
      })
    );
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* privacy(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(OtherService.getInstance().Privacy_Policy);
    console.log(response);

    if (response.data.data.items) {
    }
    yield put(privacyPolicyResponse(response.data.data.items));
    yield put(
      showToast({
        message: String("Event List Fetched"),
        show: true,
        type: "success",
        duration: 3000,
      })
    );
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* Postapi1(dataPayload: any) {
  try {
    yield put(loader(true));
    let { data, history } = dataPayload.payload;
    delete data["confirm_password"];
    let response = yield call(OtherService.getInstance().Post, data);
    yield put(
      showToast({
        message: response.data.message,
        show: true,
        type: "success",
        duration: 5000,
      })
    );
    yield put(loader(false));
    history.push("/");
  } catch (err) {
    yield put(loader(false));
    yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* userEffects() {
  yield takeLatest(OtherAction.termscondition.type, termscondition);
  yield takeLatest(OtherAction.privacy.type, privacy);
}

const dashboardSagas = [call(userEffects)];

export default dashboardSagas;
