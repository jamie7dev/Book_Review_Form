import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = [
  {
    id: 1,
    body: "어? 저도 이거 봤어요. 재밌더라구요.",
  }
];



export const commentSlice = createSlice({
  name : "comment",
  initialState,
  reducers: { // Reducer 안에 만든 함수 자체가 리듀서 로직이자, Action creator
    

  }
});


export const { 리듀서로직 } = commentSlice.actions;
export default commentSlice.reducer;