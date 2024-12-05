import { useState } from "react";
import CustomSelect from "@/components/common/Select";
import Modal from "@/components/common/Modal";
import { Button, TextArea } from "@/components/common";
import { yearlySalaryData } from "./mockdata";
import {
	Container,
	ListContainer,
	ListItem,
	ModalContent,
	Month,
	Salary,
} from "./monthSalary.styled";

const data = yearlySalaryData;

const MyPage = () => {
	const correctionOptions = [
		{ value: "지급 내역", label: "지급 내역" },
		{ value: "공제 내역", label: "공제 내역" },
		{ value: "근무 시간", label: "근무 시간" },
		{ value: "기타", label: "기타" },
	];
	const years = Object.keys(data);
	const [selectedYear, setSelectedYear] = useState(years[0]);
	const [selectedCorrection, setSelectedCorrection] = useState(
		correctionOptions[0].value,
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModal2Open, setIsModal2Open] = useState(false);
	const selectedYearData = data[selectedYear];

	return (
		<Container>
			<Button onClick={() => setIsModalOpen(true)}>월별급여</Button>
			<Modal
				isOpen={isModalOpen}
				title="월별 급여"
				onClose={() => setIsModalOpen(false)}
			>
				<ModalContent>
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
				</ModalContent>
			</Modal>
			<Button onClick={() => setIsModal2Open(true)}>정정 신청</Button>
			<Modal
				isOpen={isModal2Open}
				title="정정신청"
				onClose={() => setIsModal2Open(false)}
			>
				<ModalContent>
					<CustomSelect
						label="정정 사항 선택 * "
						options={correctionOptions}
						value={selectedCorrection}
						onChange={(value) => setSelectedCorrection(value)}
					/>
					<TextArea
						label="정정 사유를 입력하세요 *"
						placeholder="Enter your description here"
					/>
				</ModalContent>
			</Modal>
		</Container>
	);
};

export default MyPage;
