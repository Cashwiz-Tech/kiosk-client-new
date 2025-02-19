import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Screens } from "types/Screens";
import { Services } from "types/Services";

interface NavigationState {
  currentScreen: Screens;
  phoneNum: string;
  OTP: string;
  UserExist: boolean;
  service: Services | null;
}

const initialState: NavigationState = {
  currentScreen: Screens.WELCOME_SCREEN,
  phoneNum: "",
  OTP: "",
  UserExist: false,
  service: null,
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
    setService: (state, action: PayloadAction<Services | null>) => {
      state.service = action.payload;
    },
  },
});

export const { setCurrentScreen, setPhoneNum, setOTP, setUserExist, setService } = navigationSlice.actions;
export default navigationSlice.reducer;
