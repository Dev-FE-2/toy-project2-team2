import Dot from "@/components/Dot";
import {
	Section,
	SectionRow,
	SectionHalf,
	SectionHeader,
	SectionTitle,
	List,
	ListItem,
	Label,
	Value,
} from "../Salay.styled";
import type { SalaryDetailsSectionProps } from "../types/salaryPage";
import SalaryListItem from "@/components/SalaryListItem";

const SalaryDetailsSection = ({
	salaryData,
	formatNumber,
	totalDeductions,
}: SalaryDetailsSectionProps) => (
	<Section>
		<SectionRow>
			<SectionHalf>
				<Section>
					<SectionHeader>
						<SectionTitle>지급 내역</SectionTitle>
					</SectionHeader>
					<List>
						<ListItem>
							<Label>
								<Dot />
								기본급
							</Label>
							<Value>
								{salaryData ? formatNumber(salaryData.baseSalary) : "0"} 원
							</Value>
						</ListItem>
						<ListItem>
							<Label>
								<Dot />총 지급액
							</Label>
							<Value>
								{salaryData ? formatNumber(salaryData.baseSalary) : "0"} 원
							</Value>
						</ListItem>
					</List>
				</Section>
			</SectionHalf>

			<SectionHalf>
				<Section>
					<SectionTitle>공제 내역</SectionTitle>
					<List>
						{salaryData ? (
							<>
								<SalaryListItem
									label="국민연금"
									value={`${formatNumber(salaryData.nationalPension)} 원`}
								/>
								<SalaryListItem
									label="건강보험"
									value={`${formatNumber(salaryData.healthInsurance)} 원`}
								/>
								<SalaryListItem
									label="장기요양보험"
									value={`${formatNumber(salaryData.longTermCareInsurance)} 원`}
								/>
								<SalaryListItem
									label="고용보험"
									value={`${formatNumber(salaryData.employmentInsurance)} 원`}
								/>
								<SalaryListItem
									label="소득세"
									value={`${formatNumber(salaryData.incomeTax)} 원`}
								/>
								<SalaryListItem
									label="지방소득세"
									value={`${formatNumber(salaryData.localIncomeTax)} 원`}
								/>
								<SalaryListItem
									label="총 공제액"
									value={`${formatNumber(totalDeductions)} 원`}
								/>
							</>
						) : (
							<p>공제 내역 데이터가 없습니다.</p>
						)}
					</List>
				</Section>
			</SectionHalf>
		</SectionRow>
	</Section>
);

export default SalaryDetailsSection;
