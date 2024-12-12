import { flexCenter } from "@/styles";
import styled from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@styles/theme";

const CalendarContainer = styled.section``;

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

const getDateBoxColor = ($isToday: boolean, $isThisMonth: boolean) => {
	if ($isToday) return getColor("primary");
	if (!$isThisMonth) return getColor("grayLight");
	return getColor("secondaryDark");
};

const DateBox = styled.div<{ $isToday: boolean; $isThisMonth: boolean }>`
	position: relative;
	height: 0;
	padding-top: 100%;
	border: 1px solid ${getColor("secondaryLight")};
	color: ${({ $isToday, $isThisMonth }) =>
		getDateBoxColor($isToday, $isThisMonth)};
	font-weight: ${({ $isToday }) =>
		getFontWeight($isToday ? "bold" : "regular")};
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		border-color: ${({ $isThisMonth }) =>
			$isThisMonth ? getColor("primary") : getColor("secondaryLight")};
	}

	&.selected {
		border-color: ${getColor("primary")};
	}
`;

const DateNum = styled.span`
	position: absolute;
	top: 10px;
	left: 10px;
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
};
