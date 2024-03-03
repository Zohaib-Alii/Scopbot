import { createSlice } from "@reduxjs/toolkit";
const name = "user";
const initialState = {
  inputValue: "",
  selectedNode: "",
};
export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInputValue: (state, actions) => {
      state.inputValue = actions.payload;
    },
    setSelectedNode: (state, actions) => {
      state.selectedNode = actions.payload;
    },
  },
});

export const { setInputValue, setSelectedNode } = userSlice.actions;

export default userSlice.reducer;
