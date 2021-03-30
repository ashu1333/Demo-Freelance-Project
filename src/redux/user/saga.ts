import { takeLatest, call, put } from "redux-saga/effects";
import { UserActions } from "../common/actions";
import { UserService } from "../user/service";
import {
  forgotPasswordResponse,
  loader,
  showToast,
  mailVerification,
  loginUser,
  loginResponse,
} from "./reducer";

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = async function (key) {
  return await this.getItem(key);
};

export function* login(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    console.log(payload.data.email);
    console.log(payload.data.password);
    let { history } = payload;

    let response = yield call(UserService.getInstance().login, payload.data);
    // console.log(response);
    if (payload.data.email == "abcd@gmail.com") {
      localStorage.setItem("user", "abcd");

      let user = localStorage.getItem("user");
      user = JSON.parse(String(user));
      // console.log("????????????????????????????????????????",JSON.stringify(user));

      yield put(loginResponse(data));
      localStorage.setItem("user_type", "asthetician");
      localStorage.setItem("token", "xzz");
      yield put(
        loginUser({
          loginAsCustomer:
            localStorage.getItem("user_type") == "AESTHETICIAN" ? false : true,
        })
      );
      yield put(
        showToast({
          message: String("Log in successfully"),
          show: true,
          type: "success",
          duration: 5000,
        })
      );
    } else {
      yield put(
        showToast({
          message: String("failed"),
          show: true,
          type: "error",
        })
      );
    }
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* register(dataPayload: any) {
  try {
    yield put(loader(true));
    let { data, history } = dataPayload.payload;
    delete data["confirm_password"];
    let response = yield call(UserService.getInstance().register, data);
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
export function* forgotPassword(dataPayload: any) {
  try {
    yield put(loader(true));
    let { data, history } = dataPayload.payload;
    let response = yield call(UserService.getInstance().forgotPassword, data);
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
    yield put(forgotPasswordResponse(1));
  } catch (err) {
    yield put(loader(false));
    yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* resetPassword(dataPayload: any) {
  try {
    yield put(loader(true));
    let { data, history } = dataPayload.payload;
    delete data["confirm_password"];
    let response = yield call(UserService.getInstance().resetPassword, data);
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

export function* verifyMail(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let response = yield call(
      UserService.getInstance().verifyMail,
      payload.data
    );
    yield put(mailVerification(response.data));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}
export function* verifyMailResend(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let response = yield call(
      UserService.getInstance().verifyMailResend,
      payload.data
    );
    yield put(mailVerification(response.data));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* userEffects() {
  yield takeLatest(UserActions.login.type, login);
  yield takeLatest(UserActions.register.type, register);
  yield takeLatest(UserActions.forgotPassword.type, forgotPassword);
  yield takeLatest(UserActions.resetPassword.type, resetPassword);
  yield takeLatest(UserActions.verifyMail.type, verifyMail);
  yield takeLatest(UserActions.verifyMailResend.type, verifyMailResend);
}

const userSagas = [call(userEffects)];

export default userSagas;
