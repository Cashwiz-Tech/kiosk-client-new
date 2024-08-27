import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Screens } from "types/Screens";

interface NavigationState {
  currentScreen: Screens;
  phoneNum: string;
}

const initialState: NavigationState = {
 // currentScreen: Screens.CHOOSE_CURRENCY,
   currentScreen: Screens.WELCOME_SCREEN,
   phoneNum: ""

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

  },
});

export const { setCurrentScreen ,setPhoneNum} = navigationSlice.actions;
export default navigationSlice.reducer;
