import { store } from "@/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface UserInfoState {
	uid: string | null;
	email: string | null;
	name: string | null;
	grade: string | null;
	team: string | null;
	photoURL: string | null;
}
export interface AuthState {
	uid: any;
	user: UserInfoState | null;
	isLoading: boolean;
}
export interface LoginState {
	uid: string | null;
	isLogined: boolean;
}
