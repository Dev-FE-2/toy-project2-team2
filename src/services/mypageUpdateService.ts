import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateImageURL = async (
	uid: { userId: string } | null,
	imgURL: string,
) => {
	const userID = String(uid?.userId);
	const docRef = doc(db, "user", `${userID}`);
	await updateDoc(docRef, { photoURL: imgURL });
};
