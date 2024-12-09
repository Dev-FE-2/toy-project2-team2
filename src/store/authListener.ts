import { setLoading, setUserInfo } from "@/store/slices/userInfoSlice";
import { AppDispatch } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { auth } from "@/firebase";

export const listenAuthChanges = async (dispatch: AppDispatch) => {
	dispatch(setLoading(true));
	const userUid = auth.currentUser.uid;
	const userData = await getUserData(userUid);
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
