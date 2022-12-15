import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth/authSlice"

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
  stateReconciler: hardSet,
};

const reducer = combineReducers({
    auth: authReducer,
  });

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export default store;
  
  