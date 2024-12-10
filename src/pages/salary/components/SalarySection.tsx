import React from "react";
import {
	Section,
	SectionTitle,
	ActualSalaryContainer,
	LeftContainer,
	RightContainer,
	ActualSalaryValue,
	SalaryButton,
} from "../Salay.styled";
import CorrectionRequestModal from "../components/CorrectionModal";

interface SalarySectionProps {
	actualPayment: number;
	isCorrectionModalOpen: boolean;
	setIsCorrectionModalOpen: (isOpen: boolean) => void;
	formatNumber: (value: number) => string;
}

const SalarySection = ({
	actualPayment,
	isCorrectionModalOpen,
	setIsCorrectionModalOpen,
	formatNumber,
}: SalarySectionProps) => (
	<Section>
		<SectionTitle>급여</SectionTitle>
		<ActualSalaryContainer>
			<LeftContainer>
				<p>실 지급액</p>
			</LeftContainer>
			<RightContainer>
				<ActualSalaryValue>{formatNumber(actualPayment)} 원</ActualSalaryValue>
				<SalaryButton onClick={() => setIsCorrectionModalOpen(true)}>
					정정 신청
				</SalaryButton>
				<CorrectionRequestModal
					isOpen={isCorrectionModalOpen}
					onClose={() => setIsCorrectionModalOpen(false)}
				/>
			</RightContainer>
		</ActualSalaryContainer>
	</Section>
);

export default SalarySection;
