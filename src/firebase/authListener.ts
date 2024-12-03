import { setLoading, setUserInfo } from "@/store/slices/userInfoSlice";
import { AppDispatch } from "@/types/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from ".";

export const listenAuthChanges = (dispatch: AppDispatch) => {
	dispatch(setLoading(true));
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(
				setUserInfo({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
				}),
			);
		} else {
			dispatch(setUserInfo(null));
		}
		dispatch(setLoading(false));
	});
};
