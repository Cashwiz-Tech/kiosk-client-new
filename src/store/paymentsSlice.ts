import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentsSlice {
  selectedPayments: number;
}

const initialState: PaymentsSlice = {
  selectedPayments: 0,
};

export const paymentsSlice = createSlice({
  name: "paymentsSlice",
  initialState,
  reducers: {
    setPayments: (state, action: PayloadAction<number>) => {
      state.selectedPayments = action.payload;
    },
  },
});

export const { setPayments } = paymentsSlice.actions;
export default paymentsSlice.reducer;
