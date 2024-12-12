import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateImageURL = async (uid: string | null, imgURL: string) => {
	const docRef = doc(db, "user", `${uid}`);
	await updateDoc(docRef, { photoURL: imgURL });
};
