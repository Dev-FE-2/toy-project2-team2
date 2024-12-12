import { store } from "@/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface UserInfoState {
	email: string | null;
	name: string | null;
	grade: string | null;
	team: string | null;
	photoURL: string | null;
}
export interface AuthState {
	user: UserInfoState | null;
	isLoading: boolean;
}
export interface LoginState {
	uid: { userId: string } | null;
	isLogined: boolean;
}
