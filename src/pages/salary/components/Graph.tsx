import type { GraphProps } from "../types/Graph";
import {
	GraphContainer,
	GraphDeduction,
	GraphLabel,
	GraphSalary,
	GraphWrapper,
} from "./Graph.styled";

const Graph = ({ salaryPercent, deductionPercent }: GraphProps) => {
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
