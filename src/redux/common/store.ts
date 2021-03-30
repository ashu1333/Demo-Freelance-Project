import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";

import createReducer from "./reducers";
import rootSaga from "./sagas";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const { run: runSaga } = sagaMiddleware;

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];

export default (preloadedState = {}) => {
  const store = configureStore({
    reducer: createReducer(),
    middleware,
    preloadedState: {},
    devTools: devMode,
    enhancers,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
