import styled from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";

export const SelectContainer = styled.div`
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
export const SelectBox = styled.div<{ isOpen: boolean; readOnly?: boolean }>`
	position: relative;
	padding: 10px;
	font-size: ${getFontSize("md")};
	border: 2px solid
		${({ isOpen, readOnly }) =>
			getColor(readOnly ? "grayLight" : isOpen ? "primary" : "grayLight")};
	border-radius: 4px;

	&:hover {
		border-color: ${({ readOnly }) =>
			getColor(readOnly ? "grayLight" : "primary")};
	}
`;
export const SelectedValue = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("regular")};
`;

export const DownIcon = styled.span<{ isOpen: boolean }>`
	position: absolute;
	right: 10px;
	top: 30%;
`;

export const Options = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: ${getColor("white")};
	border: 1px solid ${getColor("grayLight")};
	border-radius: 4px;
	margin: 4px 0 0;
	list-style: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
`;

export const Option = styled.li<{ readOnly?: boolean }>`
	padding: 10px;
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("regular")};

	&:hover {
		background-color: ${({ readOnly }) =>
			getColor(readOnly ? "grayLight" : "grayLight")};
	}
`;
