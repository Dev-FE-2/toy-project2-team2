import { getBorderRadius, getColor, getFontSize } from "@/styles/theme";
import styled from "styled-components";

export const GraphWrapper = styled.div`
	border: 1px solid ${getColor("grayLight")};
	border-radius: ${getBorderRadius("md")};
	padding: 25px;
	margin: 20px 0;
`;

export const GraphContainer = styled.div`
	margin-top: 10px;
	height: 10px;
	position: relative;
`;

export const GraphSalary = styled.div`
	width: 85%;
	background: ${getColor("primary")};
	height: 100%;
	position: absolute;
	left: 0;
`;

export const GraphDeduction = styled.div`
	width: 15%;
	background: #e57373;
	height: 100%;
	position: absolute;
	right: 0;
`;

export const GraphLabel = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: ${getFontSize("sm")};
	margin-top: 10px;
`;
