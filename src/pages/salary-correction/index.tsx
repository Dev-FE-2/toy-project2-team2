import styled from "styled-components";
import StatusBadge from "./StatusBadge";
import { Modal, Select } from "@/components";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import { useState } from "react";

const SalaryCorrectionPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const salaryData = [
		{ month: "11월", date: "2024.11.25", status: "확인완료" },
		{ month: "10월", date: "2024.10.25", status: "검토중" },
		{ month: "9월", date: "2024.10.25", status: "반려" },
	];

	return (
		<>
			<Header>
				<Title>급여 정정 신청 내역</Title>
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
							<Date>{item.date}</Date>
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

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 10px;
	border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: bold;
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Card = styled.button`
	font-family: inherit;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	border: 1px solid #ddd;
	border-radius: 20px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;
`;

const CardLeft = styled.div`
	display: flex;
	flex-direction: row;
	gap: 60px;
	align-items: center;
`;

const Month = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const CardRight = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`;

const Date = styled.div`
	font-size: 18px;
	color: #666;
`;

const Arrow = styled.div`
	font-size: 16px;
	color: #333;
`;
