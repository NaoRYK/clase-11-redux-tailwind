import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/TodoReducers";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const Reducer = combineReducers({ todoList: todoReducer });

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["todoList"],
};
const rootReducer = persistReducer(persistConfig, Reducer);
const middleware = [];

export const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
export const persistor = persistStore(store)