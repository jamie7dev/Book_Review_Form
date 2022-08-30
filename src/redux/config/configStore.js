import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import  { formSlice } from "../modules/form";

const store = configureStore({
  reducer: {
		comment,
    form: formSlice.reducer,
  },
});

export default store;