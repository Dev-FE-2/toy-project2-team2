import { useState, useEffect, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Divider, UserInfo, Text } from "./Salay.styled";
import Graph from "./components/Graph";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import Header from "./components/Header";
import SalarySection from "./components/SalarySection";
import SalaryDetailsSection from "./components/SalaryDetailSection";
import { SalaryData } from "./types/Salary";

const SalaryPage = () => {
	const today = new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	const [salaryData, setSalaryData] = useState<SalaryData | null>(null);
	const [, setIsLoading] = useState(false);
	const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
	const [isMonthlySalaryOpen, setIsMonthlySalaryOpen] = useState(false);
	const [userName, setUserName] = useState<string | null>(null);

	const formatNumber = (value?: number): string => {
		return value !== undefined ? value.toLocaleString() : "0";
	};

	const getTotalDeductions = (data: SalaryData): number => {
		return (
			data.nationalPension +
			data.healthInsurance +
			data.longTermCareInsurance +
			data.employmentInsurance +
			data.incomeTax +
			data.localIncomeTax
		);
	};

	const getPercentage = (value: number, data: SalaryData): number => {
		const total = data.actualPayment + getTotalDeductions(data);
		return total > 0 ? Math.round((value / total) * 100) : 0;
	};
	const uid = useSelector((state: RootState) => state.loginAuth.uid?.userId);
	console.log("UID:", uid);
	const fetchUserData = useCallback(
		async (date: Date) => {
			if (!uid) return;

			setIsLoading(true);

			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const salaryDocPath = `user/${uid}/salaries/salaries_${year}_${month}`;
			const userDocPath = `user/${uid}`;

			try {
				const userDocRef = doc(db, userDocPath);
				const userDocSnap = await getDoc(userDocRef);
				if (userDocSnap.exists()) {
					setUserName(userDocSnap.data().name || null);
				} else {
					setUserName(null);
				}

				const salaryDocRef = doc(db, salaryDocPath);
				const salaryDocSnap = await getDoc(salaryDocRef);
				if (salaryDocSnap.exists()) {
					setSalaryData(salaryDocSnap.data() as SalaryData);
				} else {
					setSalaryData(null);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		},
		[uid],
	);

	useEffect(() => {
		if (uid && selectedDate) {
			fetchUserData(selectedDate);
		}
	}, [uid, selectedDate, fetchUserData]);

	return (
		<>
			<Header
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				today={today}
				isMonthlySalaryOpen={isMonthlySalaryOpen}
				setIsMonthlySalaryOpen={setIsMonthlySalaryOpen}
			/>
			<UserInfo>
				<Text>성명 : {userName || "사용자 이름을 불러올 수 없습니다."}</Text>
				<Text>
					급여 지급일 : {salaryData?.payday || "급여 데이터가 없습니다."}
				</Text>
			</UserInfo>
			<Divider />
			{salaryData ? (
				<>
					<SalarySection
						actualPayment={salaryData.actualPayment}
						isCorrectionModalOpen={isCorrectionModalOpen}
						setIsCorrectionModalOpen={setIsCorrectionModalOpen}
						formatNumber={formatNumber}
						selectedDate={selectedDate}
					/>

					<Graph
						salaryPercent={getPercentage(salaryData.actualPayment, salaryData)}
						deductionPercent={getPercentage(
							getTotalDeductions(salaryData),
							salaryData,
						)}
					/>
					<SalaryDetailsSection
						salaryData={salaryData}
						formatNumber={formatNumber}
					/>
				</>
			) : (
				<p>해당 월의 급여 데이터가 없습니다.</p>
			)}
		</>
	);
};

export default SalaryPage;
