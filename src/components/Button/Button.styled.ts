import styled from "styled-components";
import { ButtonSize, ButtonType } from "@/types";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

const buttonStyles = {
	primary: {
		background: getColor("primary"),
		hoverBackground: getColor("primary_hover"),
		color: getColor("white"),
	},
	secondary: {
		background: getColor("secondary"),
		hoverBackground: getColor("white_hover"),
		color: getColor("white"),
	},
	danger: {
		background: getColor("danger"),
		hoverBackground: getColor("white_hover"),
		color: getColor("white"),
	},
	white: {
		background: getColor("white"),
		hoverBackground: getColor("white_hover"),
		color: getColor("secondaryDark"),
		border: "1px solid #DFE4EA",
	},
	disabled: {
		background: getColor("grayWhite"),
		color: getColor("grayDark"),
		cursor: "default",
	},
};
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
			? buttonStyles.disabled.background
			: buttonStyles[props.$buttonType]?.background || getColor("white")};
	color: ${(props) =>
		props.disabled
			? buttonStyles.disabled.color
			: buttonStyles[props.$buttonType]?.color || getColor("white")};

	&:hover {
		background-color: ${(props) =>
			props.disabled
				? buttonStyles.disabled.background
				: buttonStyles[props.$buttonType]?.hoverBackground ||
					buttonStyles[props.$buttonType]?.background};
		color: ${(props) =>
			props.disabled
				? buttonStyles.disabled.color
				: buttonStyles[props.$buttonType]?.color ||
					buttonStyles[props.$buttonType]?.color};
	}
`;
