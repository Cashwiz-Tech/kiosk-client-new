import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Screens } from "types/Screens";

interface NavigationState {
  currentScreen: Screens;
  phoneNum: string;
  OTP: string;
  UserExist: boolean;
}

const initialState: NavigationState = {
  // currentScreen: Screens.CHOOSE_CURRENCY,
  currentScreen: Screens.WELCOME_SCREEN,
  phoneNum: "",
  OTP: "",
  UserExist: false,
};

export const navigationSlice = createSlice({
  name: "navigationSlice",
  initialState,
  reducers: {
    setCurrentScreen: (state, action: PayloadAction<Screens>) => {
      state.currentScreen = action.payload;
    },
    setPhoneNum: (state, action: PayloadAction<string>) => {
      state.phoneNum = action.payload;
    },
    setOTP: (state, action: PayloadAction<string>) => {
      state.OTP = action.payload;
    },
    setUserExist: (state, action: PayloadAction<boolean>) => {
      state.UserExist = action.payload;
    },
  },
});

export const { setCurrentScreen, setPhoneNum, setOTP, setUserExist } =
  navigationSlice.actions;
export default navigationSlice.reducer;
