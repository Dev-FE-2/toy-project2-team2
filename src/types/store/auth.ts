import { UserInfoState } from "./user";

export type uidType = string | null;

export interface AuthState {
	user: UserInfoState | null;
	isLoading: boolean;
}

export interface LoginState {
	uid: uidType;
	isLogined: boolean;
}
