import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    name: "",
    age: "",
    showChatBot: false
  },
  reducers: {
    addName(state, action) {
      const data = action.payload;
      state.name = data;
    },
    addAge(state, action) {
      const data = action.payload;
      state.age = data;
    },
    toggleChatBot(state, action) {
        const data = action.payload;
        state.showChatBot = data
      },
  },
});


export const { addName, addAge,toggleChatBot } = chatSlice.actions;

export default chatSlice.reducer;