import styled from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";

export const TextAreaContainer = styled.div`
	width: 350px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: ${getFontSize("sm")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondary")};
`;

export const TextAreaBox = styled.textarea<{ isError?: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	font-family: inherit;
	border: 1px solid
		${({ isError }) => getColor(isError ? "danger" : "grayLight")};
	border-radius: 4px;
	outline: none;
	background-color: ${({ readOnly }) =>
		getColor(readOnly ? "grayLight" : "white")};

	color: ${({ readOnly }) => getColor(readOnly ? "grayDark" : "secondaryDark")};
	cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "text")};
	resize: vertical;
	min-height: 100px;

	&:focus {
		border: 2px solid ${getColor("primary")};
	}
`;

export const ErrorMessage = styled.span`
	font-size: ${getFontSize("xs")};
	color: ${getColor("danger")};
`;
