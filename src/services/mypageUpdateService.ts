import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateUserInfoData = async (
	uid: string,
	userInfoData: {
		email: string;
		name: string;
		team: string;
		grade: string;
		photoURL: string;
	},
) => {
	const docRef = doc(db, "user", uid);
	await updateDoc(docRef, {
		email: userInfoData.email,
		name: userInfoData.name,
		team: userInfoData.team,
		grade: userInfoData.grade,
		photoURL: userInfoData.photoURL,
	});
};
