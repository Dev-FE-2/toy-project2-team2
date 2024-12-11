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
import { SalarySectionProps } from "../types/SalarySection";
import Dot from "@/assets/img/dot_icon.svg?react";

const SalarySection = ({
	actualPayment,
	isCorrectionModalOpen,
	setIsCorrectionModalOpen,
	formatNumber,
}: SalarySectionProps) => {
	const today = new Date();
	const salaryId = `salaries_${today.getFullYear()}_${String(
		today.getMonth() + 1,
	).padStart(2, "0")}`;

	return (
		<Section>
			<SectionTitle>급여</SectionTitle>
			<ActualSalaryContainer>
				<LeftContainer>
					<Dot style={{ margin: "0 4px 3px 4px" }} />
					<p>실 지급액</p>
				</LeftContainer>
				<RightContainer>
					<ActualSalaryValue>
						{formatNumber(actualPayment)} 원
					</ActualSalaryValue>
					<SalaryButton onClick={() => setIsCorrectionModalOpen(true)}>
						정정 신청
					</SalaryButton>
					<CorrectionRequestModal
						isOpen={isCorrectionModalOpen}
						onClose={() => setIsCorrectionModalOpen(false)}
						salaryId={salaryId}
					/>
				</RightContainer>
			</ActualSalaryContainer>
		</Section>
	);
};

export default SalarySection;
