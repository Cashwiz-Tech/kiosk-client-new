import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  adminToken: string | null;
}

const initialState: AuthState = {
  token: null,
  adminToken: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthToken: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.token = action.payload;
    },
    setAdminAuthToken: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAuthToken, setAdminAuthToken } = authSlice.actions;
export default authSlice.reducer;
