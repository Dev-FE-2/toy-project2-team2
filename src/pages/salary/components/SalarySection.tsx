import Dot from "@/assets/img/dot_icon.svg?react";
import {
	Section,
	SectionTitle,
	ActualSalaryContainer,
	LeftContainer,
	RightContainer,
	ActualSalaryValue,
	SalaryButton,
} from "../Salay.styled";
import { useState } from "react";
import CorrectionRequestModal from "./CorrectionModal";

const SalarySection = () => {
	const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
	return (
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
};

export default SalarySection;
