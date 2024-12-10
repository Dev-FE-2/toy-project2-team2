import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import Dot from "@/assets/img/dot_icon.svg?react";
import {
	TimeButton,
	Section,
	SectionTitle,
	ActualSalaryContainer,
	LeftContainer,
	RightContainer,
	ActualSalaryValue,
	SalaryButton,
	SectionHeader,
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
	Divider,
	UserInfo,
	Text,
} from "./Salay.styled";
import {
	ButtonGroup,
	DateContainer,
	HeaderContainer,
	MonthButton,
	MonthChangeButton,
	Title,
	TopButtons,
} from "./components/Header.styled";
import CorrectionRequestModal from "./components/CorrectionModal";
import Graph from "./components/Graph";
import MonthlySalaryModal from "./components/MonthSalaryModal";
import CustomDatePicker from "./CustomDatePicker";

type SalaryData = {
	payday: string;
	actualPayment: number;
	baseSalary: number;
	nationalPension: number;
	healthInsurance: number;
	longTermCareInsurance: number;
	employmentInsurance: number;
	incomeTax: number;
	localIncomeTax: number;
};

const SalaryPage = () => {
	const today = new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	const [salaryData, setSalaryData] = useState<SalaryData | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
	const [isMonthlySalaryOpen, setIsMonthlySalaryOpen] = useState(false);
	const [userName, setUserName] = useState<string | null>(null);

	const formatNumber = (value: number): string => {
		return value.toLocaleString();
	};

	const getTotalDeductions = (data: SalaryData): number => {
		return (
			data.nationalPension +
			data.healthInsurance +
			data.longTermCareInsurance +
			data.employmentInsurance +
			data.incomeTax +
			data.localIncomeTax
		);
	};

	const getPercentage = (value: number, data: SalaryData): number => {
		const total = data.actualPayment + getTotalDeductions(data);
		return total > 0 ? Math.round((value / total) * 100) : 0;
	};

	const fetchUserData = async (date: Date) => {
		setIsLoading(true);
		const userId = "kd7KYRFVOXRSJCVNePxq8vemsyD2";

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const salaryDocPath = `user/${userId}/salaries/salaries_${year}_${month}`;
		const userDocPath = `user/${userId}`;

		try {
			const userDocRef = doc(db, userDocPath);
			const userDocSnap = await getDoc(userDocRef);
			if (userDocSnap.exists()) {
				setUserName(userDocSnap.data().name || null);
			} else {
				setUserName(null);
			}

			// 급여 데이터 가져오기
			const salaryDocRef = doc(db, salaryDocPath);
			const salaryDocSnap = await getDoc(salaryDocRef);
			if (salaryDocSnap.exists()) {
				setSalaryData(salaryDocSnap.data() as SalaryData);
			} else {
				setSalaryData(null);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUserData(selectedDate);
	}, [selectedDate]);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			{/* Header */}
			<HeaderContainer>
				<DateContainer>
					<Title>{`${selectedDate.getFullYear()}.${String(
						selectedDate.getMonth() + 1,
					).padStart(2, "0")}`}</Title>
				</DateContainer>
				<ButtonGroup>
					<TopButtons>
						<MonthButton onClick={() => setSelectedDate(today)}>
							이번달
						</MonthButton>
						<MonthChangeButton
							onClick={() =>
								setSelectedDate(
									new Date(
										selectedDate.getFullYear(),
										selectedDate.getMonth() - 1,
									),
								)
							}
						>
							<LeftArrow width="8" height="10" />
						</MonthChangeButton>

						<div style={{ position: "relative", display: "inline-block" }}>
							<CustomDatePicker
								selectedDate={selectedDate}
								onDateChange={setSelectedDate}
							/>
						</div>

						<MonthChangeButton
							onClick={() =>
								setSelectedDate(
									new Date(
										selectedDate.getFullYear(),
										selectedDate.getMonth() + 1,
									),
								)
							}
						>
							<LeftArrow
								width="8"
								height="10"
								style={{ transform: "rotate(180deg)" }}
							/>
						</MonthChangeButton>
					</TopButtons>
					<TimeButton onClick={() => setIsMonthlySalaryOpen(true)}>
						월별 급여
					</TimeButton>
					<MonthlySalaryModal
						isOpen={isMonthlySalaryOpen}
						onClose={() => setIsMonthlySalaryOpen(false)}
					/>
				</ButtonGroup>
			</HeaderContainer>

			{/* Salary Data */}
			<UserInfo>
				<Text>
					성명 : {userName ? userName : "사용자 이름을 불러올 수 없습니다."}
				</Text>
				<Text>
					급여 지급일 :{" "}
					{salaryData ? salaryData.payday : "급여 데이터가 없습니다."}
				</Text>
			</UserInfo>
			<Divider />

			{/* Salary Section */}
			{isLoading ? (
				<p>로딩 중...</p>
			) : salaryData ? (
				<Section>
					<SectionTitle>급여</SectionTitle>
					<ActualSalaryContainer>
						<LeftContainer>
							<p>
								<Dot style={{ margin: "0 4px 3px 4px" }} /> 실 지급액
							</p>
						</LeftContainer>
						<RightContainer>
							<ActualSalaryValue>
								{formatNumber(salaryData.actualPayment)} 원
							</ActualSalaryValue>
							<SalaryButton onClick={() => setIsCorrectionModalOpen(true)}>
								정정 신청
							</SalaryButton>
							<CorrectionRequestModal
								isOpen={isCorrectionModalOpen}
								onClose={() => setIsCorrectionModalOpen(false)}
							/>
						</RightContainer>
					</ActualSalaryContainer>
					<Graph
						salaryPercent={getPercentage(salaryData.actualPayment, salaryData)}
						deductionPercent={getPercentage(
							getTotalDeductions(salaryData),
							salaryData,
						)}
					/>

					{/* Salary Details Section */}
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
											<Dot style={{ margin: "0 4px 3px 4px" }} />
											기본급
										</Label>
										<Value>{formatNumber(salaryData.baseSalary)} 원</Value>
									</ListItem>
									<ListItem>
										<Label>
											<Dot style={{ margin: "0 4px 3px 4px" }} />
											국민연금
										</Label>
										<Value>{formatNumber(salaryData.nationalPension)} 원</Value>
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
												<Value>
													{formatNumber(salaryData.nationalPension)} 원
												</Value>
											</ListItem>
											<ListItem>
												<Label>
													<Dot style={{ margin: "0 4px 3px 4px" }} />
													건강보험
												</Label>
												<Value>
													{formatNumber(salaryData.healthInsurance)} 원
												</Value>
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
												<Value>
													{formatNumber(salaryData.localIncomeTax)} 원
												</Value>
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
			) : (
				<p>해당 월의 급여 데이터가 없습니다.</p>
			)}
		</LocalizationProvider>
	);
};

export default SalaryPage;
