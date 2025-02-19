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
      action: PayloadAction<AuthState["token"]>
    ) => {
      state.token = action.payload;
    },
    setAdminAuthToken: (
      state,
      action: PayloadAction<AuthState["adminToken"]>
    ) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAuthToken, setAdminAuthToken } = authSlice.actions;
export default authSlice.reducer;
