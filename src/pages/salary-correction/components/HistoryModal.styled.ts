import { getColor, getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px;
	padding-bottom: 5px;
`;

export const Label = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondaryDark")};
	text-align: left;
	padding-bottom: 8px;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	padding-bottom: 8px;
	border-bottom: 1px solid ${getColor("grayLight")};
`;

export const Amount = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("grayDark")};
`;
export const Reason = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("grayDark")};
	text-align: left;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	width: 100%;
	max-width: 300px;
	min-height: 120px;
`;
