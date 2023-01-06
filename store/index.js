import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import cartReducer from "./cartSlice";
import thunk from "redux-thunk";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

  const reducers = combineReducers({cart:cartReducer})

  const config ={
      key:'root',
      storage
  }

  const reducer = persistReducer(config,reducers);

  const store = configureStore({
      reducer:reducer,
      devTools:process.env.NODE_ENV !== "production",
      middleware:[thunk]
  })

  export default store;