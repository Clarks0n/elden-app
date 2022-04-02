import { configureStore } from "@reduxjs/toolkit";
import NightCavalryReducer from "./actions/NightCavalry";

const store = configureStore({
  reducer: {
    nightCavalry: NightCavalryReducer
  },
});

export default store;