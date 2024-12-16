import { flexCenter } from "@/styles";
import {
	getBreakPoints,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";
import styled from "styled-components";

const Panel = styled.section`
	position: relative;
	background-color: ${getColor("grayWhite")};
	margin-top: 52px;
	padding: 15px;
	border-radius: 10px;
	border-radius: 10px;

	@media (max-width: ${getBreakPoints("md")}) {
		margin-top: 0;
	}
`;

const DateStr = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("bold")};
	margin-bottom: 20px;
`;

const NoDataStr = styled.p`
	font-size: ${getFontSize("sm")};
	font-weight: ${getFontWeight("regular")};
	color: ${getColor("grayDark")};
`;

const DetailList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ItemBox = styled.li`
	position: relative;
	display: flex;
	background-color: ${getColor("white")};
	border: 1px solid transparent;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		border-color: ${getColor("gray")};
	}

	&:hover > button {
		visibility: visible;
	}
`;

const Color = styled.div<{ $color: string }>`
	flex: 0 0 10px;
	background-color: ${({ $color }) => $color};
`;

const ItemInfo = styled.div`
	padding: 16px;
	border-left: 1px dashed ${getColor("grayLight")};
`;

const ItemTitle = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("regular")};
	margin-bottom: 8px;
`;

const ItemContent = styled.p`
	font-size: ${getFontSize("sm")};
	font-weight: ${getFontWeight("regular")};
	color: ${getColor("grayDark")};
	display: -webkit-box;
	max-height: 28px;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
`;

const DeleteBtn = styled.button`
	position: absolute;
	top: 4px;
	right: 4px;
	z-index: 1;
	${flexCenter}
	width: 20px;
	height: 20px;
	padding: 0;
	background: transparent;
	visibility: hidden;
`;

export {
	Panel,
	DateStr,
	NoDataStr,
	DetailList,
	ItemBox,
	Color,
	ItemInfo,
	ItemTitle,
	ItemContent,
	DeleteBtn,
};
