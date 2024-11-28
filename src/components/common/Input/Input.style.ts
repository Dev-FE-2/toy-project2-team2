import styled from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";

export const InputContainer = styled.div`
	width: 350px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondaryDark")};
`;

export const InputBox = styled.input<{ isError: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	border: 1px solid
		${({ isError }) => getColor(isError ? "danger" : "grayLight")};
	border-radius: 4px;
	outline: none;
	background-color: ${({ readOnly }) =>
		getColor(readOnly ? "grayLight" : "white")};
	color: ${({ readOnly }) => getColor(readOnly ? "grayDark" : "secondaryDark")};
	cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "text")};

	&:focus {
		border: 2px solid ${getColor("primary")};
	}
`;

export const ErrorMessage = styled.span`
	font-size: ${getFontSize("xs")};
	color: ${getColor("danger")};
`;
