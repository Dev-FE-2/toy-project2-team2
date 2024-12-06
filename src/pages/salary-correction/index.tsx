import StatusBadge from "./components/StatusBadge";
import { Select } from "@/components";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import { useState } from "react";
import { StyledTitle } from "@/components/Title/Title.styled";
import CorrectionRequestModaled from "./components/HistoryModal";
import {
	CardContainer,
	Header,
	Card,
	CardLeft,
	Month,
	CardRight,
	Arrow,
	DateTime,
} from "./salary-correction.styled";

const SalaryCorrectionPage = () => {
	const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
	const [selectedData, setSelectedData] = useState<any>(null);

	const ModalMockData = [
		{
			month: "11월",
			date: "2024.11.25",
			status: "반려",
			amount: "추가 근무 증빙 불가로 반려",
			correctionType: "공제 내역",
			reason: "공제 내역에서 ~",
		},
		{
			month: "10월",
			date: "2024.10.25",
			status: "검토중",
			amount: "2,150,000 원",
			correctionType: "공제 내역",
			reason: "공제 내역에서 ~",
		},
		{
			month: "9월",
			date: "2024.9.25",
			status: "확인완료",
			amount: "2,150,000 원",
			correctionType: "공제 내역",
			reason: "공제 내역에서 ~",
		},
		{
			month: "8월",
			date: "2024.8.25",
			status: "확인완료",
			amount: "2,150,000 원",
			correctionType: "공제 내역",
			reason: "공제 내역에서 ~",
		},
	];

	return (
		<>
			<Header>
				<StyledTitle>급여 정정 신청 내역</StyledTitle>
				<Select
					width="150px"
					options={[
						{ value: "2024", label: "2024" },
						{ value: "2023", label: "2023" },
						{ value: "2022", label: "2022" },
					]}
				/>
			</Header>
			<CardContainer>
				{ModalMockData.map((item, index) => (
					<Card
						key={index}
						onClick={() => {
							setSelectedData(item);
							setHistoryModalOpen(true);
						}}
					>
						<CardLeft>
							<StatusBadge status={item.status} />
							<Month>{item.month} 급여 내역</Month>
						</CardLeft>
						<CardRight>
							<DateTime>{item.date}</DateTime>
							<Arrow>
								<LeftArrow
									width="12"
									height="12"
									style={{ transform: "rotate(180deg)" }}
								/>
							</Arrow>
						</CardRight>
					</Card>
				))}

				{selectedData && (
					<CorrectionRequestModaled
						isOpen={isHistoryModalOpen}
						onClose={() => setHistoryModalOpen(false)}
						status={selectedData.status}
						amount={selectedData.amount}
						correctionType={selectedData.correctionType}
						reason={selectedData.reason}
					/>
				)}
			</CardContainer>
		</>
	);
};

export default SalaryCorrectionPage;
