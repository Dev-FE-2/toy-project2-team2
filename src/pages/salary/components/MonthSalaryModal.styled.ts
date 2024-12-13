import { getBorderRadius, getColor, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const ListContainer = styled.ul`
	list-style: none;
	padding-left: 10px;
	margin-left: 8px;
	border-bottom: 1px solid ${getColor("grayLight")};
	border-radius: ${getBorderRadius("sm")};
	overflow: scroll;
	height: 280px;
	width: 400px;
	overflow-x: hidden;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 16px;
	border-bottom: 1px solid ${getColor("grayLight")};

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: ${getColor("grayWhite")};
	}
`;

export const Month = styled.div`
	font-size: 18px;
	font-weight: ${getFontWeight("bold")};
	padding-left: 20px;
`;

export const Salary = styled.div`
	font-size: 18px;
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("grayDark")};
	padding-right: 10px;
`;
