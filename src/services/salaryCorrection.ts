import { db } from "@/firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export const saveSalaryCorrection = async ({
	userId,
	salaryId,
	correctionData,
}: {
	userId: string;
	salaryId: string;
	correctionData: {
		type: string;
		reason: string;
		amount: number;
		status: string;
	};
}) => {
	try {
		const correctionRef = doc(
			db,
			`user/${userId}/salaries/${salaryId}/salaryCorrection/${salaryId}`,
		);

		await setDoc(correctionRef, {
			...correctionData,
			createdAt: Timestamp.now(),
		});

		console.log("정정 요청이 성공적으로 저장되었습니다.");
	} catch (error) {
		console.error("정정 요청 저장 중 오류 발생:", error);
		throw error;
	}
};
