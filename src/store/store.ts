// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import currencyReducer from "./currencySlice";
import navigationReducer from "./navigationSlice";
import paymentsReducer from "./paymentsSlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  navigation: navigationReducer,
  payments: paymentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
