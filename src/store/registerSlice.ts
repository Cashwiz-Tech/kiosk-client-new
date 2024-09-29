import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterSlice {
  fullName: string;
  email: string;
  IDNum: string;
  DarkonNum: string;
  DBirth: string;
  documentType: string;
  DocImage: string;
  UserImage: string;
  UserDoc: string;
}

const initialState: RegisterSlice = {

  fullName: "",
  email: "", 
  IDNum: "",
  DarkonNum:"",
  DBirth: "",
  documentType: "",
  DocImage: "",
  UserImage: "",
  UserDoc: ""
};

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    setIDNum: (state, action: PayloadAction<string>) => {
      state.IDNum = action.payload;
    },

    setDarkonNum: (state, action: PayloadAction<string>) => {
      state.DarkonNum = action.payload;
    },
    
    setDBirth: (state, action: PayloadAction<string>) => {
      state.DBirth = action.payload;
    },

    setdocumentType: (state, action: PayloadAction<string>) => {
      state.documentType = action.payload;
    },
    
    setDocImage: (state, action: PayloadAction<string>) => {
      state.DocImage = action.payload;
    },

    setUserImage: (state, action: PayloadAction<string>) => {
      state.UserImage = action.payload;
    },
    setUserDoc: (state, action: PayloadAction<string>) => {
      state.UserDoc = action.payload;
    },
  },
});

export const { setFullName ,setEmail,setIDNum,setDarkonNum,setDBirth,setdocumentType,setDocImage,setUserImage,setUserDoc} = registerSlice.actions;
export default registerSlice.reducer;
