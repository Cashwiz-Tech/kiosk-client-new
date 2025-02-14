import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<AuthState["token"]>
    ) => {
      state.token = action.payload;
    },
  },
});

export const { setAuthData } = authSlice.actions;
export default authSlice.reducer;
