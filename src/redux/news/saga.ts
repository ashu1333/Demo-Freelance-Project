import { takeLatest, call, put } from "redux-saga/effects";
import { DashboardAction } from "../common/actions";
import { NewsService } from "../news/service";
import { NewsActions } from "../common/actions";
import {
  dashboardEventList,
  skinhealthR,
  newsResponse,
  postResponse,
  mostPopularResponse,
  instaResponse,
  latestResponse,
  feedListResponse,
  feedCategoryResponse,
  feedDetailResponse,
} from "./reducer";
import { loader } from "../user/reducer";

export function* news(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let response = yield call(
      NewsService.getInstance().News_List,
      payload.data
    );
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    //   console.log(response);
    yield put(newsResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* mostpopular(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    console.log(payload);
    let response = yield call(NewsService.getInstance().Most_Popular, payload);
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    // console.log(response);
    yield put(mostPopularResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}
export function* latest(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    console.log(payload);
    let response = yield call(NewsService.getInstance().Latest, payload);
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii" + response);
    yield put(latestResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* feedlist(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let response = yield call(
      NewsService.getInstance().Most_Popular,
      payload.data
    );
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    //  console.log(response);
    yield put(feedListResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* feeddetail(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    console.log(payload);
    let response = yield call(NewsService.getInstance().Feed_Detail, payload);
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    // console.log(response);
    yield put(feedDetailResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* feedcategory(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let response = yield call(
      NewsService.getInstance().Feed_Category,
      payload.data
    );
    // yield put(showToast({ message: String("News List Fetched"), show: true, type: "success",duration:2000 }));
    // console.log(response);
    yield put(feedCategoryResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}
export function* post(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;

    // let response = yield call(GiftService.getInstance().giftCard, payload.data);
    const response = {
      title: "this is a  post_list",
      description: "this is descripton of post_list",
      category: "skin care",
    };
    //   console.log(JSON.stringify(response));
    yield put(postResponse(response));
    yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* news_post(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let { history } = payload;
    console.log(payload);
    // let response = yield call(UserService.getInstance().login, payload.data);
    // if(response.data.statusCode==200){
    //    history.push("/dashboard");
    // }else{
    //   yield put(showToast({ message: String(response.data.message), show: true, type: "error" }));
    //}
    // yield put(loader(false));
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* comment_post(data: any) {
  try {
    yield put(loader(true));
    let payload = data.payload;
    let { history } = payload;
    console.log(payload);
    let response = yield call(
      NewsService.getInstance().Comment_Post,
      payload.data
    );
    console.log("CommnetPOst" + response);
    if (response.data.statusCode == 200) {
      //yield put(showToast({ message: String("Comment Added"), show: true, type: "success",duration:5000 }));
      yield put(loader(false));
    } else {
      // yield put(showToast({ message: String(response.data.message), show: true, type: "error" }));
      //}
      // yield put(loader(false));
    }
  } catch (err) {
    yield put(loader(false));
    // yield put(showToast({ message: String(err), show: true, type: "error" }));
  }
}

export function* userEffects() {
  yield takeLatest(NewsActions.news_post.type, news_post);
  yield takeLatest(NewsActions.news.type, news);
  yield takeLatest(NewsActions.most_popular.type, mostpopular);
  yield takeLatest(NewsActions.feed_list.type, feedlist);
  yield takeLatest(NewsActions.feed_category.type, feedcategory);
  yield takeLatest(NewsActions.feed_detail.type, feeddetail);
  yield takeLatest(NewsActions.comment_post.type, comment_post);
  yield takeLatest(NewsActions.latest.type, latest);

  yield takeLatest(NewsActions.post.type, post);
}

const dashboardSagas = [call(userEffects)];

export default dashboardSagas;
