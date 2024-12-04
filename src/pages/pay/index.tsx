import { Modal } from "@/components/common";
import { useState } from "react";
import DeductionItem from "./Deduction";
import {
	Container,
	UserInfo,
	Text,
	Section,
	SectionTitle,
	SectionHeader,
	ActualPayContainer,
	LeftContainer,
	RightContainer,
	ActualPayValue,
	PayButton,
	Tooltip,
	TooltipRow,
	TooltipDivider,
	TimeButtonWrapper,
	List,
	ListItem,
	Label,
	Value,
	TimeButton,
	Divider,
} from "./Pay.styled";
import Graph from "./Graph";
import Dot from "../../assets/img/dot_icon.svg?react";
import Header from "./Header";

const PayPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const deductionItems = [
		{ label: " 국민연금", value: "157,500 원" },
		{ label: " 건강보험", value: "124,100 원" },
		{ label: " 장기요양보험", value: "15,800 원" },
		{ label: " 고용보험", value: "31,500 원" },
		{ label: " 소득세", value: "142,220 원" },
		{ label: " 지방소득세", value: "14,220 원" },
		{ label: " 총 공제액", value: "485,400 원" },
	];

	return (
		<Container>
			<Header />
			<UserInfo>
				<Text>성명 : 홍길동</Text>
				<Text>급여 지급일 : 2024-11-15</Text>
			</UserInfo>
			<Divider />

			<Section>
				<SectionTitle>급여</SectionTitle>
				<ActualPayContainer>
					<LeftContainer>
						<Text>
							<Dot style={{ margin: "0 4px 3px 4px" }} /> 실 지급액
						</Text>
					</LeftContainer>
					<RightContainer>
						<ActualPayValue>3,014,600 원</ActualPayValue>
						<PayButton onClick={() => setIsModalOpen(true)}>
							정정 신청
						</PayButton>
						<Modal
							isOpen={isModalOpen}
							title="정정 신청"
							onClose={() => setIsModalOpen(false)}
						>
							<p>여기에 원하는 내용을 추가</p>
						</Modal>
					</RightContainer>
				</ActualPayContainer>
				<Graph payPercent={85} deductionPercent={15} />
			</Section>

			<Section>
				<SectionHeader>
					<SectionTitle>지급 내역</SectionTitle>
					<TimeButtonWrapper>
						<TimeButton>근무시간</TimeButton>
						<Tooltip>
							<TooltipRow>
								<span>이번달 고정 근무시간</span>
								<span>40 시간</span>
							</TooltipRow>
							<TooltipRow>
								<span>+ 연장 근무시간</span>
								<span>3시간 30분</span>
							</TooltipRow>
							<TooltipDivider />
							<TooltipRow>
								<strong>총 근무시간</strong>
								<strong>43시간 30분</strong>
							</TooltipRow>
						</Tooltip>
					</TimeButtonWrapper>
				</SectionHeader>
				<List>
					<ListItem>
						<Label>
							<Dot style={{ margin: "0 4px 3px 4px" }} />
							기본급
						</Label>
						<Value>3,500,000 원</Value>
					</ListItem>
					<ListItem>
						<Label>
							<Dot style={{ margin: "0 4px 3px 4px" }} /> 총 지급액
						</Label>
						<Value>3,500,000 원</Value>
					</ListItem>
				</List>
			</Section>

			<Section>
				<SectionTitle>공제 내역</SectionTitle>
				<List>
					{deductionItems.map((item, index) => (
						<DeductionItem key={index} label={item.label} value={item.value} />
					))}
				</List>
			</Section>
		</Container>
	);
};

export default PayPage;
