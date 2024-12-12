import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice";
import loginAuthReducer from "./slices/loginAuthSlice";
import scheduleReducer from "./slices/scheduleSlice";

// Redux 스토어 설정
export const store = configureStore({
	reducer: {
		loginAuth: loginAuthReducer,
		userInfo: userInfoReducer,
		schedule: scheduleReducer,
	},
});
