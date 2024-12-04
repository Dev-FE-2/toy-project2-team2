import { Modal } from "@/components/common";
import Dot from "@/assets/img/dot_icon.svg?react";
import { SalarySectionProps } from "../types/SalarySection";
import {
	Section,
	SectionTitle,
	ActualSalaryContainer,
	LeftContainer,
	RightContainer,
	ActualSalaryValue,
	SalaryButton,
} from "../Salay.styled";

const SalarySection = ({ isModalOpen, setIsModalOpen }: SalarySectionProps) => (
	<Section>
		<SectionTitle>급여</SectionTitle>
		<ActualSalaryContainer>
			<LeftContainer>
				<p>
					<Dot style={{ margin: "0 4px 3px 4px" }} /> 실 지급액
				</p>
			</LeftContainer>
			<RightContainer>
				<ActualSalaryValue>3,014,600 원</ActualSalaryValue>
				<SalaryButton onClick={() => setIsModalOpen(true)}>
					정정 신청
				</SalaryButton>
				<Modal
					isOpen={isModalOpen}
					title="정정 신청"
					onClose={() => setIsModalOpen(false)}
				>
					<p>여기에 원하는 내용을 추가</p>
				</Modal>
			</RightContainer>
		</ActualSalaryContainer>
	</Section>
);

export default SalarySection;
