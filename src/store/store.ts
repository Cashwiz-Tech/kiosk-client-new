// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import checkoutReducer from "./checkoutSlice";
import currencyReducer from "./currencySlice";
import navigationReducer from "./navigationSlice";
import partnerReducer from "./partnerSlice";
import paymentsReducer from "./paymentsSlice";
import registersReducer from "./registerSlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  navigation: navigationReducer,
  payments: paymentsReducer,
  register: registersReducer,
  partner: partnerReducer,
  checkout: checkoutReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
