import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 초기값

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};
export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const formSlice = createSlice({
  name : "form",
  initialState,
  reducers: { // Reducer 안에 만든 함수 자체가 리듀서 로직이자, Action creator
    addPost: (state, action) => {
      const addPost = [...state, action.payload];
      return addPost;     
    },

  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state)  // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;  // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    },
   },
  },
);


export const { addPost } = formSlice.actions;
export default formSlice.reducer;