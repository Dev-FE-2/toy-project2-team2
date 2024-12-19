import type { GraphProps } from "../types/salaryPage";
import {
	GraphContainer,
	GraphDeduction,
	GraphLabel,
	GraphSalary,
	GraphWrapper,
} from "./Graph.styled";
import {
	calculateActualPayment,
	calculateGrossPayment,
	calculateTotalDeductions,
} from "@/utils/calculateSalary";

const Graph = ({ salaryData }: GraphProps) => {
	const totalDeductions = calculateTotalDeductions(salaryData);
	const actualPayment = calculateActualPayment(salaryData);
	const grossPayment = calculateGrossPayment(salaryData);

	const salaryPercent = ((actualPayment / grossPayment) * 100).toFixed(1);
	const deductionPercent = ((totalDeductions / grossPayment) * 100).toFixed(1);

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
