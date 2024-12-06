import { useState } from "react";
import Graph from "./components/Graph";
import Header from "./components/Header";
import SalarySection from "./components/SalarySection";
import SalaryDetailsSection from "./components/SalaryDetailSection";
import { UserInfo, Text, Divider } from "./Salay.styled";

const SalaryPage = () => {
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
		<>
			<Header />
			<UserInfo>
				<Text>성명 : 홍길동</Text>
				<Text>급여 지급일 : 2024-11-15</Text>
			</UserInfo>
			<Divider />
			<SalarySection />
			<Graph salaryPercent={85} deductionPercent={15} />
			<SalaryDetailsSection deductionItems={deductionItems} />
		</>
	);
};

export default SalaryPage;
