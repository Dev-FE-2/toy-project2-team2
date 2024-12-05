import { getBorderRadius, getColor, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const ListContainer = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	border-bottom: 1px solid ${getColor("grayLight")};
	border-radius: ${getBorderRadius("sm")};
	overflow: scroll;
	height: 250px;
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
	padding-left: 30px;
	cursor: pointer;
`;

export const Salary = styled.div`
	font-size: 18px;
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("grayDark")};
	padding-right: 10px;
	cursor: pointer;
`;
