import { LoginState, uidType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginState = {
	uid: null,
	isLogined: false,
};

const loginAuthSlice = createSlice({
	name: "loginAuth",
	initialState,
	reducers: {
		setUid: (state, action: PayloadAction<uidType>) => {
			state.uid = action.payload;
		},
		clearUid: (state) => {
			state.uid = null;
		},
		setIsLogined: (state, action: PayloadAction<boolean>) => {
			state.isLogined = action.payload;
		},
	},
});
export const { setUid, clearUid, setIsLogined } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
