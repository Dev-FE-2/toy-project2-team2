import { setLoading, setUserInfo } from "@/store/slices/userInfoSlice";
import { AppDispatch } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { auth } from "@/firebase";

export const listenAuthChanges = async (dispatch: AppDispatch) => {
	dispatch(setLoading(true));
	const userAuth = auth.currentUser;
	const userData = await getUserData(userAuth);
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
	dispatch(setLoading(false));
};
