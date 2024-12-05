import styled from "styled-components";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

export const SelectContainer = styled.div`
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
export const SelectBox = styled.div<{ $isOpen: boolean }>`
	position: relative;
	padding: 10px;
	font-size: ${getFontSize("md")};
	border: 2px solid
		${({ $isOpen }) => getColor($isOpen ? "primary" : "grayLight")};
	border-radius: ${getBorderRadius("sm")};

	&:hover {
		border-color: ${getColor("primary")};
	}
`;
export const SelectedValue = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("regular")};

	text-align: left;
`;

export const DownIcon = styled.span<{ $isOpen: boolean }>`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%)
		rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0")});
	transition: transform 0.2s ease;
`;

export const Options = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: ${getColor("white")};
	border: 1px solid ${getColor("grayLight")};
	border-radius: ${getBorderRadius("sm")};
	margin: 2px 0 0;
	list-style: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	text-align: left;
`;

export const Option = styled.li<{ readOnly?: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("regular")};
	cursor: pointer;

	&:hover {
		background-color: ${getColor("grayLight")};
	}
`;
