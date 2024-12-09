import { getColor, getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px;
	padding-bottom: 5px;
	border-bottom: 1px solid ${getColor("grayLight")};
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
`;

export const Amount = styled.div`
	font-size: 17px;
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("grayDark")};
`;
