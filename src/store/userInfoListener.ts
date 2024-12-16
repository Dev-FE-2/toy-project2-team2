import { setLoading, setUserInfo } from "@/store/slices/userInfoSlice";
import { AppDispatch } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUid } from "./slices/loginAuthSlice";

export const listenAuthChanges = async (dispatch: AppDispatch) => {
	dispatch(setLoading(true));
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			dispatch(setUid(user.uid));

			// user가 null이 아닐 때만 getUserData 호출
			const userData = await getUserData(user.uid);
			if (userData) {
				dispatch(
					setUserInfo({
						email: userData.email,
						name: userData.name,
						team: userData.team,
						grade: userData.grade,
						photoURL: userData.photoURL,
					}),
				);
			} else {
				dispatch(setUserInfo(null));
			}
		} else {
			dispatch(setUserInfo(null));
			dispatch(setUid(null));
		}
	});
	dispatch(setLoading(false));
};
