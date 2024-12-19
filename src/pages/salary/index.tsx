import { useState, useMemo, useEffect } from "react";
import { Divider, UserInfo, Text, NoDataMessage } from "./Salay.styled";
import Graph from "./components/Graph";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import Header from "./components/Header";
import SalarySection from "./components/SalarySection";
import SalaryDetailsSection from "./components/SalaryDetailSection";
import {
	calculateActualPayment,
	calculateTotalDeductions,
} from "@/utils/calculateSalary";
import { useSalaryData } from "@/hooks/useSalaryData";

const SalaryPage = () => {
	const today = new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
	const [isMonthlySalaryOpen, setIsMonthlySalaryOpen] = useState(false);

	const uid = useSelector((state: RootState) => state.loginAuth.uid);
	const { userName, salaryData, fetchUserData } = useSalaryData(uid);

	const formatNumber = (value?: number): string => {
		return value !== undefined ? value.toLocaleString() : "0";
	};

	const actualPayment = useMemo(
		() => (salaryData ? calculateActualPayment(salaryData) : 0),
		[salaryData],
	);

	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
		fetchUserData(date);
	};
	useEffect(() => {
		fetchUserData(selectedDate);
	}, []);

	return (
		<div>
			<Header
				selectedDate={selectedDate}
				setSelectedDate={handleDateChange}
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
						totalDeductions={calculateTotalDeductions(salaryData)}
					/>
				</>
			) : (
				<NoDataMessage>해당 월의 급여 데이터가 없습니다.</NoDataMessage>
			)}
		</div>
	);
};

export default SalaryPage;
