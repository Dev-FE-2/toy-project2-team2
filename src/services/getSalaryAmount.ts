import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getSalaryAmount = async (userId: string, salaryId: string) => {
	try {
		const salaryRef = doc(db, `user/${userId}/salaries/${salaryId}`);
		const salarySnap = await getDoc(salaryRef);

		if (salarySnap.exists()) {
			const data = salarySnap.data();
			return data.actualPayment || 0;
		} else {
			throw new Error("해당 월의 급여 데이터를 찾을 수 없습니다.");
		}
	} catch (error) {
		console.error("급여 금액 가져오기 중 오류:", error);
		throw error;
	}
};
