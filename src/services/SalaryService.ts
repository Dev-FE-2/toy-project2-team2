import { db } from "@/firebase";
import { calculateActualPayment } from "@/utils/calculateSalary";
import {
	doc,
	setDoc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const getSalaryAmount = async (userId: string, salaryId: string) => {
	try {
		const salaryRef = doc(db, `user/${userId}/salaries/${salaryId}`);
		const salarySnap = await getDoc(salaryRef);

		if (salarySnap.exists()) {
			const data = salarySnap.data();
			return data.actualPayment || 0;
		} else {
			toast.error("해당 월의 급여 데이터를 찾을 수 없습니다.");
		}
	} catch (error) {
		toast.error("급여 정보를 불러오는데 실패했습니다.");

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
			return [];
		}

		return snapshot.docs.map((doc) => {
			const data = doc.data();

			const month = new Date(data.payday).getMonth() + 1;

			const actualPayment = calculateActualPayment({
				baseSalary: data.baseSalary || 0,
				nationalPension: data.nationalPension || 0,
				healthInsurance: data.healthInsurance || 0,
				longTermCareInsurance: data.longTermCareInsurance || 0,
				employmentInsurance: data.employmentInsurance || 0,
				incomeTax: data.incomeTax || 0,
				localIncomeTax: data.localIncomeTax || 0,
			});

			return {
				month: `${month}월`,
				salary: actualPayment,
			};
		});
	} catch (error) {
		toast.error("연간 급여 내역을 불러오는데 실패했습니다.");
		throw error;
	}
};

export const saveSalaryCorrection = async ({
	uid,
	salaryId,
	correctionData,
}: {
	uid: string;
	salaryId: string;
	correctionData: {
		correctionType: string;
		reason: string;
		history: number | string;
		status: string;
		date: string;
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
	} catch (error) {
		toast.error("정정 요청을 보내는데 실패했습니다.");
		throw error;
	}
};
