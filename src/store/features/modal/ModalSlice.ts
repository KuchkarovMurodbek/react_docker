import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IModal {
  open: {
    [key: string]: boolean;
  };
}

const initialState: IModal = {
  open: {
    category: false,
    group: false,
    food: false,
    ingredients: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ key: string }>) => {
      state.open[action.payload.key] =!state.open[action.payload.key];
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
