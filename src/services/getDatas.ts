//user 컬렉션 user1 doc 데이터 가져오기
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getUserData = async (uid) => {
	const docRef = doc(db, "user", uid);
	const docSnap = await getDoc(docRef);
	const userData = docSnap.data();
	if (docSnap.exists()) {
		return userData;
	} else {
		// doc.data()가 undefined일 경우
		console.log("No such document!");
	}
};

export const getScheduleData = async () => {
	const docRef = doc(db, "user", "user1", "schedule", "rUsdwhdmhzbtcvO4iRsI");
	const docSnap = await getDoc(docRef);
	const scheduleData = docSnap.data();
	if (docSnap.exists()) {
		return scheduleData;
	} else {
		// doc.data()가 undefined일 경우
		console.log("No such document!");
	}
};

export const getSalariesData = async () => {
	const docRef = doc(db, "user", "user1", "salaries", "8WtOEWQak2wun80XvWOr");
	const docSnap = await getDoc(docRef);
	const salariesData = docSnap.data();
	if (docSnap.exists()) {
		return salariesData;
	} else {
		// doc.data()가 undefined일 경우
		console.log("No such document!");
	}
};
