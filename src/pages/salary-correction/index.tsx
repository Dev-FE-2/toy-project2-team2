import StatusBadge from "./components/StatusBadge";
import { Modal, Select } from "@/components";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import { useState } from "react";
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
import { StyledTitle } from "@/components/Title/Title.styled";

const SalaryCorrectionPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const salaryData = [
		{ month: "11월", date: "2024.11.25", status: "반려" },
		{ month: "10월", date: "2024.10.25", status: "검토중" },
		{ month: "9월", date: "2024.9.25", status: "확인완료" },
		{ month: "8월", date: "2024.8.25", status: "확인완료" },
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
				{salaryData.map((item, index) => (
					<Card
						key={index}
						onClick={() => {
							setIsModalOpen(true);
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
				<Modal
					isOpen={isModalOpen}
					title="정정 신청"
					onClose={() => setIsModalOpen(false)}
				>
					<p>여기에 원하는 내용을 추가</p>
				</Modal>
			</CardContainer>
		</>
	);
};

export default SalaryCorrectionPage;