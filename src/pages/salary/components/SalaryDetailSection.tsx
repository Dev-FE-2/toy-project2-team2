import {
	Section,
	SectionRow,
	SectionHalf,
	SectionHeader,
	SectionTitle,
	TimeButtonWrapper,
	TimeButton,
	Tooltip,
	TooltipRow,
	TooltipDivider,
	List,
	ListItem,
	Label,
	Value,
} from "../Salay.styled";
import Dot from "@/assets/img/dot_icon.svg?react";
import { SalaryDetailsSectionProps } from "../types/SalaryDetailSection";

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
						{/* <TimeButtonWrapper>
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
						</TimeButtonWrapper> */}
					</SectionHeader>
					<List>
						<ListItem>
							<Label>
								<Dot style={{ margin: "0 4px 3px 4px" }} />
								기본급
							</Label>
							<Value>
								{salaryData ? formatNumber(salaryData.baseSalary) : "0"} 원
							</Value>
						</ListItem>
						<ListItem>
							<Label>
								<Dot style={{ margin: "0 4px 3px 4px" }} />총 지급액
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
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										국민연금
									</Label>
									<Value>{formatNumber(salaryData.nationalPension)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										건강보험
									</Label>
									<Value>{formatNumber(salaryData.healthInsurance)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										장기요양보험
									</Label>
									<Value>
										{formatNumber(salaryData.longTermCareInsurance)} 원
									</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										고용보험
									</Label>
									<Value>
										{formatNumber(salaryData.employmentInsurance)} 원
									</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										소득세
									</Label>
									<Value>{formatNumber(salaryData.incomeTax)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />
										지방소득세
									</Label>
									<Value>{formatNumber(salaryData.localIncomeTax)} 원</Value>
								</ListItem>
								<ListItem>
									<Label>
										<Dot style={{ margin: "0 4px 3px 4px" }} />총 공제액
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
