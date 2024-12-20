import { flexCenter } from "@/styles";
import styled from "styled-components";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@styles/theme";

const CalendarContainer = styled.section`
	position: relative;
`;

const CalHeader = styled.div`
	${flexCenter}
	margin-bottom: 30px;
`;

const CalButton = styled.button`
	${flexCenter}
	background: none;

	&:hover > svg {
		fill: ${getColor("primary_hover")};
	}
`;

const MonthLabel = styled.div`
	font-size: ${getFontSize("lg")};
	font-weight: ${getFontWeight("bold")};
	margin: 0 15px;
`;

const DaysRow = styled.div`
	display: grid;
	grid-template-columns: repeat(7, minmax(50px, 1fr));
`;

const Day = styled.div`
	flex: 1 0 auto;
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("bold")};
	color: ${getColor("white")};
	background-color: ${getColor("primary")};
	text-align: center;
	padding: 12px 0;

	&:first-child {
		border-top-left-radius: 10px;
	}
	&:last-child {
		border-top-right-radius: 10px;
	}
`;

const DatesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(7, minmax(50px, 1fr));
`;

const getDateBoxColor = (
	$isSaturday: boolean,
	$isSunday: boolean,
	$isThisMonth: boolean,
) => {
	if (!$isThisMonth) return getColor("grayLight");
	if ($isSaturday) return getColor("saturday");
	if ($isSunday) return getColor("sunday");
	return getColor("secondaryDark");
};

const DateBox = styled.div<{
	$isSaturday: boolean;
	$isSunday: boolean;
	$isThisMonth: boolean;
}>`
	position: relative;
	height: 0;
	padding-top: 100%;
	border: 1px solid ${getColor("secondaryLight")};
	color: ${({ $isSaturday, $isSunday, $isThisMonth }) =>
		getDateBoxColor($isSaturday, $isSunday, $isThisMonth)};
	font-weight: ${getFontWeight("regular")};
	overflow-y: auto;
	cursor: pointer;
	transition: 0.2s;

	pointer-events: ${({ $isThisMonth }) => ($isThisMonth ? "auto" : "none")};

	&:hover {
		border-color: ${({ $isThisMonth }) =>
			$isThisMonth ? getColor("primary") : getColor("secondaryLight")};
	}

	&.selected {
		border-color: ${getColor("primary")};
		color: ${getColor("primary")};
		font-weight: ${getFontWeight("bold")};
	}

	&:last-child {
		border-bottom-right-radius: 10px;
	}

	&:nth-last-child(7) {
		border-bottom-left-radius: 10px;
	}
`;

const DateNum = styled.span`
	position: absolute;
	top: 10px;
	left: 10px;
`;

const ScheduleList = styled.ul`
	position: absolute;
	top: 40px;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	padding: 0 5px;
`;

const ScheduleItem = styled.li<{ $color: string }>`
	position: relative;
	background-color: ${({ $color }) => $color};
	border: 1px solid ${getColor("grayWhite")};

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${getColor("white")};
		opacity: 0.7;
	}
`;

const ScheduleTitle = styled.div<{ $color: string }>`
	position: relative;
	font-size: ${getFontSize("sm")};
	font-weight: ${getFontWeight("regular")};
	color: ${getColor("secondaryDark")};
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	border-left: 4px solid ${({ $color }) => $color};
	padding: 4px;
	z-index: 1;
`;

const TodayBadge = styled.span`
	position: absolute;
	top: 6px;
	right: 10px;
	font-size: ${getFontSize("xs")};
	font-weight: ${getFontWeight("medium")};
	color: ${getColor("white")};
	background-color: ${getColor("primary")};
	padding: 5px;
	border-radius: ${getBorderRadius("md")};
`;

const UtilBtnBox = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const UtilBtn = styled.button`
	font-size: ${getFontSize("xs")};
	font-weight: ${getFontWeight("regular")};
	color: ${getColor("white")};
	background-color: ${getColor("primary")};
	padding-top: 5px;
	padding-bottom: 4px;
	width: 50px;
	border-radius: ${getBorderRadius("sm")};
	overflow: hidden;
	transition: 0.2s;

	&:hover {
		background-color: ${getColor("primary_hover")};
	}
`;

export {
	CalendarContainer,
	CalHeader,
	CalButton,
	MonthLabel,
	DaysRow,
	Day,
	DatesGrid,
	DateBox,
	DateNum,
	ScheduleList,
	ScheduleItem,
	ScheduleTitle,
	TodayBadge,
	UtilBtnBox,
	UtilBtn,
};
