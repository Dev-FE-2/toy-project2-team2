import { setLoading, setUserInfo } from "@/store/slices/userInfoSlice";
import { AppDispatch } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const listenAuthChanges = async (dispatch: AppDispatch) => {
	dispatch(setLoading(true));
	onAuthStateChanged(auth, async (user) => {
		const userAuth = user;
		const userData = await getUserData(userAuth.uid);
		console.log(userData);
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
	});
	dispatch(setLoading(false));
};
