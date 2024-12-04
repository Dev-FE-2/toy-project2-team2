import { getColor } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

const GraphWrapper = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 20px;
	margin: 20px 0;
`;

const GraphContainer = styled.div`
	margin-top: 10px;
	height: 10px;
	position: relative;
`;

const GraphPay = styled.div`
	width: 85%;
	background: ${getColor("primary")};
	height: 100%;
	position: absolute;
	left: 0;
`;

const GraphDeduction = styled.div`
	width: 15%;
	background: #e57373;
	height: 100%;
	position: absolute;
	right: 0;
`;

const GraphLabel = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
	color: #888;
	margin-top: 5px;
`;

interface GraphProps {
	payPercent: number;
	deductionPercent: number;
}

const Graph: React.FC<GraphProps> = ({ payPercent, deductionPercent }) => {
	return (
		<GraphWrapper>
			<GraphContainer>
				<GraphPay style={{ width: `${payPercent}%` }} />
				<GraphDeduction style={{ width: `${deductionPercent}%` }} />
			</GraphContainer>
			<GraphLabel>
				<span>실 지급: {payPercent}%</span>
				<span>공제액: {deductionPercent}%</span>
			</GraphLabel>
		</GraphWrapper>
	);
};

export default Graph;
