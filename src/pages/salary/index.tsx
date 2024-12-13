import { useState, useEffect, useCallback, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Divider, UserInfo, Text, NoDataMessage } from "./Salay.styled";
import Graph from "./components/Graph";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import Header from "./components/Header";
import SalarySection from "./components/SalarySection";
import SalaryDetailsSection from "./components/SalaryDetailSection";
import type { SalaryData } from "./types/salaryData";
import { calculateActualPayment } from "@/utils/calculateSalary";
import { toast } from "react-toastify";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";

const SalaryPage = () => {
	const today = new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	const [salaryData, setSalaryData] = useState<SalaryData | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
	const [isMonthlySalaryOpen, setIsMonthlySalaryOpen] = useState(false);
	const [userName, setUserName] = useState<string | null>(null);

	const formatNumber = (value?: number): string => {
		return value !== undefined ? value.toLocaleString() : "0";
	};

	const getTotalDeductions = useCallback((data: SalaryData): number => {
		return (
			data.nationalPension +
			data.healthInsurance +
			data.longTermCareInsurance +
			data.employmentInsurance +
			data.incomeTax +
			data.localIncomeTax
		);
	}, []);
	const actualPayment = useMemo(
		() => (salaryData ? calculateActualPayment(salaryData) : 0),
		[salaryData],
	);

	const uid = useSelector((state: RootState) => state.loginAuth.uid);

	const fetchUserData = useCallback(
		async (date: Date) => {
			if (!uid) return;

			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0");
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
			} catch (error) {
				toast.error("데이터를 불러오는데 실패했습니다.");
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
		<LoaderWrapper isLoading={isLoading}>
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
						actualPayment={actualPayment}
						isCorrectionModalOpen={isCorrectionModalOpen}
						setIsCorrectionModalOpen={setIsCorrectionModalOpen}
						formatNumber={formatNumber}
						selectedDate={selectedDate}
					/>

					<Graph salaryData={salaryData} />

					<SalaryDetailsSection
						salaryData={salaryData}
						formatNumber={formatNumber}
						totalDeductions={getTotalDeductions(salaryData)}
					/>
				</>
			) : (
				<NoDataMessage>해당 월의 급여 데이터가 없습니다.</NoDataMessage>
			)}
		</LoaderWrapper>
	);
};

export default SalaryPage;
