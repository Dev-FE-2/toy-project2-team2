import Dot from "@/assets/img/dot_icon.svg?react";
import DeductionItem from "./Deduction";
import { SalaryDetailsSectionProps } from "../types/SalaryDetailSection";
import {
	Section,
	SectionHeader,
	SectionTitle,
	TimeButton,
	Tooltip,
	TooltipRow,
	TooltipDivider,
	List,
	ListItem,
	Label,
	Value,
	SectionRow,
	SectionHalf,
	TimeButtonWrapper,
} from "../Salay.styled";

const SalaryDetailsSection = ({
	deductionItems,
}: SalaryDetailsSectionProps) => (
	<>
		<SectionRow>
			<SectionHalf>
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
								<Dot style={{ margin: "0 4px 3px 4px" }} /> 기본급
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
			</SectionHalf>

			<SectionHalf>
				<Section>
					<SectionTitle>공제 내역</SectionTitle>
					<List>
						{deductionItems.map((item, index) => (
							<DeductionItem
								key={index}
								label={item.label}
								value={item.value}
							/>
						))}
					</List>
				</Section>
			</SectionHalf>
		</SectionRow>
	</>
);

export default SalaryDetailsSection;
