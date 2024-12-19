import styled from "styled-components";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

export const TextAreaContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondaryDark")};
	text-align: start;
`;

export const TextAreaBox = styled.textarea<{ $isError?: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	font-family: inherit;
	border: 1px solid
		${({ $isError }) => getColor($isError ? "danger" : "grayLight")};
	border-radius: ${getBorderRadius("sm")};
	outline: none;
	resize: vertical;
	min-height: 180px;
	background-color: transparent;
	color: ${getColor("secondaryDark")};
	&:focus {
		border: 2px solid ${getColor("primary")};
	}
`;

export const ErrorMessage = styled.span`
	font-size: ${getFontSize("xs")};
	color: ${getColor("danger")};
`;
