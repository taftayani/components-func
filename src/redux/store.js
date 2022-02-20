import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { TodoReducer } from "./reducers";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["reducersTodoList"],
};

const persistReducers = persistReducer(
  persistConfig,
  combineReducers({
    reducersTodoList: TodoReducer,
  })
);

export const store = createStore(
  persistReducers,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);

export const persistor = persistStore(store);
