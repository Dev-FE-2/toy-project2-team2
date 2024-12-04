import { flexCenter } from "@/styles";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

const Panel = styled.section`
	position: relative;
	background-color: ${getColor("grayWhite")};
	margin-top: 52px;
	padding: 15px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Date = styled.div`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("bold")};
	margin-bottom: 20px;
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
`;

const Color = styled.div<{ color: string }>`
	flex: 0 0 10px;
	background-color: ${(props) => props.color};
`;

const ItemInfo = styled.div`
	padding: 16px;
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
`;

export {
	Panel,
	Date,
	DetailList,
	ItemBox,
	Color,
	ItemInfo,
	ItemTitle,
	ItemContent,
	DeleteBtn,
};
