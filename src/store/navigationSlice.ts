import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Screens } from "types/Screens";

interface NavigationState {
  currentScreen: Screens;
}

const initialState: NavigationState = {
  currentScreen: Screens.CHOOSE_CURRENCY,
};

export const navigationSlice = createSlice({
  name: "navigationSlice",
  initialState,
  reducers: {
    setCurrentScreen: (state, action: PayloadAction<Screens>) => {
      state.currentScreen = action.payload;
    },
  },
});

export const { setCurrentScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
