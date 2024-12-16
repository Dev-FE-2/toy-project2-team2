import type { GraphProps } from "../types/salaryPage";
import type { SalaryData } from "../types/salaryData";
import {
	GraphContainer,
	GraphDeduction,
	GraphLabel,
	GraphSalary,
	GraphWrapper,
} from "./Graph.styled";

const Graph = ({ salaryData }: GraphProps) => {
	const calculatePercentages = (data: SalaryData) => {
		const totalDeductions =
			data.nationalPension +
			data.healthInsurance +
			data.longTermCareInsurance +
			data.employmentInsurance +
			data.incomeTax +
			data.localIncomeTax;

		const actualPayment = data.baseSalary - totalDeductions;
		const total = data.baseSalary;

		const salaryPercent = ((actualPayment / total) * 100).toFixed(1);
		const deductionPercent = ((totalDeductions / total) * 100).toFixed(1);

		return {
			salaryPercent: parseFloat(salaryPercent),
			deductionPercent: parseFloat(deductionPercent),
		};
	};

	const { salaryPercent, deductionPercent } = calculatePercentages(salaryData);
	return (
		<GraphWrapper>
			<GraphContainer>
				<GraphSalary style={{ width: `${salaryPercent}%` }} />
				<GraphDeduction style={{ width: `${deductionPercent}%` }} />
			</GraphContainer>
			<GraphLabel>
				<span>실 지급: {salaryPercent}%</span>
				<span>공제액: {deductionPercent}%</span>
			</GraphLabel>
		</GraphWrapper>
	);
};

export default Graph;
