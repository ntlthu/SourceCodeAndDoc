//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  danhSachChat: [],
}

const chatReducer = createSlice({
  name: "chatReducer",
  initialState,
  reducers: {
    saveChat: (state, { type, payload }) => {
      // let danhSachChat = [...state.danhSachChat];
      const d = new Date();
      let id = d.getTime();

      state.danhSachChat.push({ ...payload, id });

      // chỉ tự động return đối với array và object
      //  return { ...state, danhSachChat };
    },
    deleteChat: (state, { type, payload }) => {
      state.danhSachChat = state.danhSachChat.filter(item => item.id != payload);
    }
  }
});

export const { saveChat, deleteChat } = chatReducer.actions

export default chatReducer.reducer