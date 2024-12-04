import { AuthState, UserInfoState } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
	user: null,
	isLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUserInfo: (state, action: PayloadAction<UserInfoState | null>) => {
			state.user = action.payload; //user 상태 업데이트
			state.isLoading = false; // 로딩 상태 false
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload; // 로딩 상태 업데이트
		},
	},
});

export const { setUserInfo, setLoading } = authSlice.actions;
export default authSlice.reducer;
