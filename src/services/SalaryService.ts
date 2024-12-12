import { db } from "@/firebase";
import {
	doc,
	setDoc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";

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

export const saveSalaryCorrection = async ({
	uid,
	salaryId,
	correctionData,
}: {
	uid: any;
	salaryId: string;
	correctionData: {
		correctionType: string;
		reason: string;
		amount: number;
		status: string;
		date: any;
	};
}) => {
	try {
		const correctionRef = doc(
			db,
			`user/${uid}/salaries/${salaryId}/salaryCorrection/${salaryId}`,
		);

		await setDoc(correctionRef, {
			...correctionData,
		});

		console.log("정정 요청이 성공적으로 저장되었습니다.");
	} catch (error) {
		console.error("정정 요청 저장 중 오류 발생:", error);
		throw error;
	}
};
