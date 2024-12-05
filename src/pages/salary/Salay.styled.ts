import styled from "styled-components";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";

export const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-top: 15px;
`;

export const Text = styled.p`
	margin-top: 5px;
	font-size: ${getFontSize("md")};
	color: ${getColor("secondary")};
`;

export const Section = styled.section`
	margin-top: 20px;
`;

export const SectionTitle = styled.h2`
	font-size: ${getFontSize("xl")};
	margin-bottom: 20px;
`;

export const ActualSalaryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const RightContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const ActualSalaryValue = styled.h1`
	font-size: ${getFontSize("xl")};
	color: #333;
	padding-right: 30px;
	font-weight: ${getFontWeight("medium")};
`;
export const SalaryButton = styled.button`
	font-family: inherit;
	padding: 8px 18px;
	font-size: ${getFontSize("sm")};
	color: white;
	background-color: ${getColor("primary")};
	border: none;
	border-radius: ${getBorderRadius("sm")};
	cursor: pointer;

	&:hover {
		background-color: ${getColor("primary_hover")};
	}
`;
export const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
`;

export const TimeButton = styled.button`
	font-family: inherit;
	padding: 8px 16px;
	font-size: ${getFontSize("sm")};
	background-color: transparent;
	color: black;
	border: 1px solid;
	border-radius: ${getBorderRadius("sm")};
	margin: 0 10px 0 0;
	cursor: pointer;

	&:hover {
		background-color: #dfe4ea;
	}
`;
export const Tooltip = styled.div`
	position: absolute;
	bottom: 110%;
	left: 50%;
	transform: translateX(-50%);
	background: white;
	border: 1px solid #ddd;
	border-radius: ${getBorderRadius("sm")};
	font-size: ${getFontSize("xs")};
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	padding: 8px 16px;
	width: 220px;
	z-index: 10;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	&::after {
		position: absolute;
		bottom: -5px;
		left: 50%;
		transform: translateX(-50%);
		border-width: 5px;
		border-style: solid;
		border-color: white transparent transparent transparent;
	}
`;
export const TooltipRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
`;

export const TooltipDivider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #ccc;
	margin: 10px 0;
`;

export const TimeButtonWrapper = styled.div`
	position: relative;

	&:hover ${Tooltip} {
		opacity: 1;
		visibility: visible;
	}
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
	font-size: ${getFontSize("md")};
	border-bottom: 2px solid transparent;

	&:last-child {
		font-weight: ${getFontWeight("bold")};
	}

	&:hover {
		border-bottom: 2px solid ${getColor("secondaryLight")};
	}
`;

export const Label = styled.p`
	margin: 0;
	font-size: ${getFontSize("md")};
	color: ${getColor("secondary")};
	padding-bottom: 5px;
`;

export const Value = styled.p`
	margin: 0;
	font-size: ${getFontSize("md")};
	margin-right: 10px;
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #ddd;
	margin: 15px 0;
`;
export const SectionRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	margin-top: 20px;
`;

export const SectionHalf = styled.div`
	flex: 1;
	max-width: 50%;
	display: flex;
	flex-direction: column;
`;