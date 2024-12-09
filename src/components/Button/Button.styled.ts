import styled from "styled-components";
import { ButtonSize, ButtonType } from "@/types";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

// 버튼의 기본 스타일
export const StyledButton = styled.button<{
	$buttonType: ButtonType;
	size: ButtonSize;
}>`
	padding: 13px 28px;
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("bold")};
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	width: ${(props) => (props.size === "regular" ? "400px" : "190px")};
	border: ${(props) =>
		props.$buttonType === "white" ? "1px solid #DFE4EA" : "none"};
	border-radius: ${getBorderRadius("sm")};
	background-color: ${(props) =>
		props.disabled
			? getColor("grayWhite")
			: props.$buttonType === "primary"
				? getColor("primary")
				: props.$buttonType === "secondary"
					? getColor("secondary")
					: props.$buttonType === "danger"
						? getColor("danger")
						: getColor("white")};
	color: ${(props) =>
		props.disabled
			? getColor("grayDark")
			: props.$buttonType === "white"
				? getColor("secondaryDark")
				: getColor("white")};

	&:hover {
		background-color: ${(props) =>
			props.disabled
				? "grayWhite"
				: props.$buttonType === "primary"
					? getColor("primary_hover")
					: getColor("white_hover")};
		color: ${(props) =>
			props.disabled
				? "grayDark"
				: props.$buttonType === "primary"
					? getColor("white")
					: getColor("secondaryDark")};
	}
`;
