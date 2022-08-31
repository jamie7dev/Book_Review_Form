import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "../modules/comment";
import formSlice from "../modules/form";

const store = configureStore({
  reducer: {
		comment: commentSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;