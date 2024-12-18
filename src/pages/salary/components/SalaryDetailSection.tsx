import Dot from "@/types/components/Dot";
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
								<ListItem>
									<Label>
										<Dot />
										국민연금
									</Label>
									<Value>{formatNumber(salaryData.nationalPension)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />
										건강보험
									</Label>
									<Value>{formatNumber(salaryData.healthInsurance)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />
										장기요양보험
									</Label>
									<Value>
										{formatNumber(salaryData.longTermCareInsurance)} 원
									</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />
										고용보험
									</Label>
									<Value>
										{formatNumber(salaryData.employmentInsurance)} 원
									</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />
										소득세
									</Label>
									<Value>{formatNumber(salaryData.incomeTax)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />
										지방소득세
									</Label>
									<Value>{formatNumber(salaryData.localIncomeTax)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot />총 공제액
									</Label>
									<Value> {formatNumber(totalDeductions)} 원</Value>
								</ListItem>
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
