import { db } from "@/firebase";
import { uidType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateImageURL = async (uid: uidType, imgURL: string) => {
	const userID = String(uid);
	const docRef = doc(db, "user", `${userID}`);
	await updateDoc(docRef, { photoURL: imgURL });
};

export const updateUserInfoData = async (
	uid: string,
	userInfoData: {
		email: string;
		name: string;
		team: string;
		grade: string;
	},
) => {
	const docRef = doc(db, "user", uid);
	await updateDoc(docRef, {
		email: userInfoData.email,
		name: userInfoData.name,
		team: userInfoData.team,
		grade: userInfoData.grade,
	});
};
