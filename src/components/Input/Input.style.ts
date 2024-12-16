import styled from "styled-components";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

export const InputContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("secondaryDark")};
	text-align: left;
`;

export const InputBox = styled.input<{
	$isError: boolean;
	readOnly: boolean | undefined;
}>`
	font-family: inherit;
	padding: 10px;
	font-size: ${getFontSize("md")};
	border: 1px solid
		${({ $isError }) => getColor($isError ? "danger" : "grayLight")};
	border-radius: ${getBorderRadius("sm")};
	outline: none;
	background-color: ${getColor("white")};
	color: ${getColor("secondaryDark")};
	cursor: text;

	&:focus {
		border: ${({ readOnly }) =>
			readOnly ? "none" : `2px solid ${getColor("primary")}`};
	}

	&[type="color"] {
		padding: 0;
		width: 34px;
		height: 38px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: transparent;
		border: none;

		cursor: pointer;

		&::-webkit-color-swatch {
			border-radius: 50%;
			border: 1px solid ${getColor("grayLight")};
		}
	}
`;

export const ErrorMessage = styled.span`
	font-size: ${getFontSize("xs")};
	color: ${getColor("danger")};
`;
