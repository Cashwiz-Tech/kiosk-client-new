import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentsSlice {
  selectedPayments: number;
  percentageProfit: number;
  rateProfit: number;
}

const initialState: PaymentsSlice = {
  selectedPayments: 0,
  percentageProfit: 0,
  rateProfit: 0,
};

export const paymentsSlice = createSlice({
  name: "paymentsSlice",
  initialState,
  reducers: {
    setPayments: (state, action: PayloadAction<number>) => {
      state.selectedPayments = action.payload;
    },
    setPercentageProfit: (state, action: PayloadAction<number>) => {
      state.percentageProfit = action.payload;
    },
    setRateProfit: (state, action: PayloadAction<number>) => {
      state.rateProfit = action.payload;
    },
  },
});

export const { setPayments, setPercentageProfit, setRateProfit } =
  paymentsSlice.actions;
export default paymentsSlice.reducer;
