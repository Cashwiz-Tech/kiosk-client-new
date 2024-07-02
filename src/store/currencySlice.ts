import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PossibleCurrencies } from "types/Currencies";

interface CurrencyState {
  selectedCurrency: PossibleCurrencies | null;
  selectedCurrencyAmount: number;
  selectedCurrencyRate: number;
}

const initialState: CurrencyState = {
  selectedCurrency: null,
  selectedCurrencyAmount: 0,
  selectedCurrencyRate: 0,
};

export const currencySlice = createSlice({
  name: "currencySlice",
  initialState,
  reducers: {
    setSelectedCurrency: (
      state,
      action: PayloadAction<PossibleCurrencies | null>
    ) => {
      state.selectedCurrency = action.payload;
    },
    setSelectedCurrencyAmount: (state, action: PayloadAction<number>) => {
      state.selectedCurrencyAmount = action.payload;
    },
    setSelectedCurrencyRate: (state, action: PayloadAction<number>) => {
      state.selectedCurrencyRate = action.payload;
    },
  },
});

export const {
  setSelectedCurrency,
  setSelectedCurrencyAmount,
  setSelectedCurrencyRate,
} = currencySlice.actions;
export default currencySlice.reducer;
