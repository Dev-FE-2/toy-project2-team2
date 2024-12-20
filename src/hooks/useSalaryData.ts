import { useState, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-toastify";
import { SalaryData } from "@/pages/salary/types/salaryData";

export const useSalaryData = (uid: string | null) => {
	const [userName, setUserName] = useState<string | null>(null);
	const [salaryData, setSalaryData] = useState<SalaryData | null>(null);
	const [isLoading] = useState(false);

	const fetchUserData = useCallback(
		async (selectedDate: Date) => {
			if (!uid) return;

			const year = selectedDate.getFullYear();
			const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
			const salaryDocPath = `user/${uid}/salaries/salaries_${year}_${month}`;
			const userDocPath = `user/${uid}`;

			try {
				const [userDocSnap, salaryDocSnap] = await Promise.all([
					getDoc(doc(db, userDocPath)),
					getDoc(doc(db, salaryDocPath)),
				]);

				if (userDocSnap.exists()) {
					setUserName(userDocSnap.data().name || null);
				}

				if (salaryDocSnap.exists()) {
					setSalaryData(salaryDocSnap.data() as SalaryData);
				} else {
					setSalaryData(null);
				}
			} catch {
				toast.error("데이터를 불러오는데 실패했습니다.");
			}
		},
		[uid],
	);

	return { userName, salaryData, isLoading, fetchUserData };
};
