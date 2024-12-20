//user 컬렉션 user1 doc 데이터 가져오기
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getUserData = async (uid: string) => {
	const docRef = doc(db, "user", `${uid}`);
	const docSnap = await getDoc(docRef);
	const userData = docSnap.data();
	if (docSnap.exists()) {
		return userData;
	} else {
		// doc.data()가 undefined일 경우
		console.log("No such document!");
	}
};
