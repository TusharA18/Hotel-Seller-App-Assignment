import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentTab: "ny",
   numRow: 1,
   data: {},
};

export const propertySlice = createSlice({
   name: "property",
   initialState,
   reducers: {
      setCurrentTab: (state, action) => {
         state.currentTab = action.payload;
      },
      setNumRow: (state, action) => {
         state.numRow = action.payload;
      },
      setData: (state, action) => {
         state.data = action.payload;
      },
   },
});

export const { setCurrentTab, setNumRow, setData } = propertySlice.actions;

export const selectCurrentTab = (state) => state.property.currentTab;
export const selectNumRow = (state) => state.property.numRow;
export const selectData = (state) => state.property.data;

export default propertySlice.reducer;
