import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Services } from "types/Services";

interface ServiceState {
  service: Services | null;
}

const initialState: ServiceState = {
  service: null,
};

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    setService: (
      state,
      action: PayloadAction<Services | null>
    ) => {
      state.service = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;
