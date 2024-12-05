import { useState } from "react";
import CustomSelect from "@/components/Select";
import Modal from "@/components/Modal";
import { yearlySalaryData } from "./mockdata";
import {
	ListContainer,
	ListItem,
	Month,
	Salary,
} from "./MonthSalaryModal.styled";

const MonthlySalaryModal = ({ isOpen, onClose }: any) => {
	const data = yearlySalaryData;
	const years = Object.keys(data);
	const [selectedYear, setSelectedYear] = useState(years[0]);
	const selectedYearData = data[selectedYear];

	return (
		<Modal isOpen={isOpen} title="월별 급여" onClose={onClose}>
			<CustomSelect
				options={years.map((year) => ({ value: year, label: year }))}
				value={selectedYear}
				onChange={(value) => setSelectedYear(value)}
			/>
			<ListContainer>
				{selectedYearData.map((data) => (
					<ListItem key={data.month}>
						<Month>{data.month}</Month>
						<Salary>{data.salary.toLocaleString()}원</Salary>
					</ListItem>
				))}
			</ListContainer>
		</Modal>
	);
};

export default MonthlySalaryModal;
