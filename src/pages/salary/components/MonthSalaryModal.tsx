import { useState, useEffect } from "react";
import CustomSelect from "@/components/Select";
import Modal from "@/components/Modal";
import {
	ListContainer,
	ListItem,
	Month,
	Salary,
} from "./MonthSalaryModal.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { getYearlySalaryData } from "@/services/SalaryService";

const MonthlySalaryModal = ({ isOpen, onClose }: any) => {
	const userId = useSelector((state: RootState) => state.loginAuth.uid);

	const currentYear = new Date().getFullYear().toString();
	const [selectedYear, setSelectedYear] = useState(currentYear);
	const [yearlySalaryData, setYearlySalaryData] = useState<
		{ month: string; salary: number }[]
	>([]);

	const years = Array.from({ length: 5 }, (_, i) =>
		(Number(currentYear) - i).toString(),
	);

	useEffect(() => {
		if (userId && selectedYear) {
			fetchYearlySalaryData(userId, selectedYear);
		}
	}, [userId, selectedYear]);

	const fetchYearlySalaryData = async (userId: string, year: string) => {
		try {
			const data = await getYearlySalaryData(userId, parseInt(year));

			if (Array.isArray(data) && data.length > 0) {
				setYearlySalaryData(data);
			} else {
				setYearlySalaryData([]);
			}
		} catch (error) {
			setYearlySalaryData([]);
		}
	};

	return (
		<Modal isOpen={isOpen} title="월별 급여" onClose={onClose}>
			<CustomSelect
				options={years.map((year) => ({ value: year, label: year }))}
				value={selectedYear}
				onChange={(value) => setSelectedYear(value)}
			/>
			<ListContainer>
				{yearlySalaryData.length > 0 ? (
					yearlySalaryData.map((data, index) => (
						<ListItem key={index}>
							<Month>{data?.month || "월 정보 없음"}</Month>
							<Salary>
								{typeof data?.salary === "number"
									? `${data.salary.toLocaleString()}원`
									: "데이터 없음"}
							</Salary>
						</ListItem>
					))
				) : (
					<p>해당 연도의 데이터가 없습니다.</p>
				)}
			</ListContainer>
		</Modal>
	);
};

export default MonthlySalaryModal;
