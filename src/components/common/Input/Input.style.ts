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
	font-size: ${getFontSize("sm")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondary")};
`;

export const InputBox = styled.input<{ isError: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	border: 1px solid
		${({ isError }) => (isError ? getColor("danger") : getColor("grayLight"))};
	border-radius: 4px;
	outline: none;
	background-color: ${({ readOnly }) =>
		readOnly ? getColor("grayLight") : getColor("white")};
	color: ${({ readOnly }) =>
		readOnly ? getColor("grayDark") : getColor("secondaryDark")};
	cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "text")};

	&:focus {
		border: 2px solid ${getColor("primary")};
	}
`;

export const ErrorMessage = styled.span`
	font-size: ${getFontSize("xs")};
	color: ${getColor("danger")};
`;
