import styled from "styled-components";
import { getFontSize, getFontWeight, getBorderRadius } from "@/styles/theme";

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

export const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 10px;
`;

export const TopButtons = styled.div`
	display: flex;
	gap: 10px;
`;

export const Title = styled.h1`
	font-size: 2.8rem;
	font-weight: ${getFontWeight("bold")};
	margin-top: 15px;
`;

export const MonthButton = styled.button`
	font-family: inherit;
	padding: 8px 16px;
	font-size: ${getFontSize("sm")};
	background-color: transparent;
	color: black;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #dfe4ea;
	}
`;

export const TimeButton = styled.button`
	font-family: inherit;
	padding: 8px 16px;
	font-size: ${getFontSize("sm")};
	background-color: #f3f4f6;
	color: black;
	border: 1px solid;
	border-radius: ${getBorderRadius("sm")};
	cursor: pointer;

	&:hover {
		background-color: #dfe4ea;
	}
`;

export const MonthDisplay = styled.div`
	font-size: 16px;
	font-weight: bold;
	align-content: center;
`;

export const MonthChangeButton = styled.button`
	background-color: transparent;
	border: none;
	&:hover {
		color: gray;
	}
`;
