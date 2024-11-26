import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutStatus } from "types/CheckoutStatus";

interface CheckoutState {
  checkoutStatus: CheckoutStatus | null;
}

const initialState: CheckoutState = {
  checkoutStatus: null,
};

export const currencySlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    setCheckoutStatus: (state, action: PayloadAction<CheckoutStatus | null>) => {
      state.checkoutStatus = action.payload;
    },
  },
});

export const { setCheckoutStatus } = currencySlice.actions;
export default currencySlice.reducer;
