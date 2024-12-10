import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getYearlySalaryData = async (userId: string, year: number) => {
	try {
		const salariesRef = collection(db, `user/${userId}/salaries`);
		const q = query(
			salariesRef,
			where("payday", ">=", `${year}-01-01`),
			where("payday", "<=", `${year}-12-31`),
		);

		const snapshot = await getDocs(q);

		if (snapshot.empty) {
			console.warn(` ${year}년의 정보를 찾을 수 없습니다.`);
			return [];
		}

		return snapshot.docs.map((doc) => {
			const data = doc.data();
			const month = new Date(data.payday).getMonth() + 1; 
			return {
				month: `${month}월`,
				salary: data.actualPayment,
			};
		});
	} catch (error) {
		console.error("연간 급여 내역을 불러오는데 오류가 발생했습니다.", error);
		throw error;
	}
};
