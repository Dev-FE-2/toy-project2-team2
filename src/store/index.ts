import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userInfoSlice";

// Redux 스토어 설정
export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
