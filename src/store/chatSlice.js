import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    name: "",
    age: "",
  },
  reducers: {
    addName(state, action) {
      const data = action.payload;
      console.log("addname", data);
      state.name = data;
    },
    addAge(state, action) {
      const data = action.payload;
      console.log(data);
      state.age = data;
    },
  },
});


export const { addName, addAge } = chatSlice.actions;

export default chatSlice.reducer;