import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PossibleCurrencies } from "types/Currencies";

interface PartnerState {
  partnerData: {
    pinpadId: string;
  } | null;
}

const initialState: PartnerState = {
  partnerData: null,
};

export const partnerSlice = createSlice({
  name: "partnerSlice",
  initialState,
  reducers: {
    setPartnerData: (
      state,
      action: PayloadAction<PartnerState["partnerData"]>
    ) => {
      state.partnerData = action.payload;
    },
  },
});

export const { setPartnerData } = partnerSlice.actions;
export default partnerSlice.reducer;
