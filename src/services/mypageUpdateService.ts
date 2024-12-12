import { db } from "@/firebase";
import { uidType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateImageURL = async (uid: uidType, imgURL: string) => {
	const userID = String(uid);
	const docRef = doc(db, "user", `${userID}`);
	await updateDoc(docRef, { photoURL: imgURL });
};
