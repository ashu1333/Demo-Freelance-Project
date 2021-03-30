import { takeLatest, call, put } from "redux-saga/effects";
import { ProviderAction } from "../common/actions";
import { ProviderService } from "./service";
import {
  partnersListResponse,
  termsconditionResponse,
  trainingEducationResponse,
  currentStatusResponse,
  partnerResponse,
  rewardsResponse,
  feedsResponse,
} from "./reducer";
import { loader, showToast } from "../user/reducer";

export function* partnersList(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().partnersList);
    if (response.data.data.items) {
    }
    yield put(partnersListResponse(response.data.data));
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* trainingEducation(data: any) {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().trainingEducation);
    if (response.data.data.items) {
    }
    yield put(trainingEducationResponse(response.data.data));
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* currentStatus_msg() {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().Message);

    console.log(response);
    if (response.data.data.items) {
      yield put(currentStatusResponse(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* partner_msg() {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().Message);

    if (response.data.data.items) {
      yield put(partnerResponse(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}
export function* rewards_msg() {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().Message);

    if (response.data.data.items) {
      yield put(rewardsResponse(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* feed_msg() {
  yield put(loader(false));
  try {
    let response = yield call(ProviderService.getInstance().Message);

    if (response.data.data.items) {
      yield put(feedsResponse(response.data.data.items));
    }
    yield put(loader(false));
  } catch (err) {
    yield put(showToast({ message: String(err), show: true, type: "error" }));
    yield put(loader(false));
  }
}

export function* support(payload) {
  yield put(loader(false));
  try {
    console.log("payload paylod +++++++++++++++++++++", payload.data);
    let response = yield call(
      ProviderService.getInstance().support,
      payload.data
    );
    console.log("support response", response);

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
    let response = yield call(ProviderService.getInstance().Post, data);
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
  yield takeLatest(ProviderAction.partnersList.type, partnersList);
  yield takeLatest(ProviderAction.trainingEducation.type, trainingEducation);
  yield takeLatest(ProviderAction.current_status_msg.type, currentStatus_msg);
  yield takeLatest(ProviderAction.partners_msg.type, partner_msg);
  yield takeLatest(ProviderAction.rewards_msg.type, rewards_msg);
  yield takeLatest(ProviderAction.feeds_msg.type, feed_msg);
  yield takeLatest(ProviderAction.support.type, support);
}

const dashboardSagas = [call(userEffects)];

export default dashboardSagas;
