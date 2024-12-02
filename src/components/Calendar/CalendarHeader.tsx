import { useTheme } from "styled-components";
import { getColor } from "@/styles/theme";
import { format } from "date-fns";
import useCalendar from "@/hooks/useCalendar";
import { CalHeader, CalButton, MonthLabel } from "./calendar.styled";
import ArrowIcon from "@/assets/img/left_arrow_icon.svg?react";

const CalendarHeader = () => {
	const theme = useTheme();
	const { currentDate, onPrevMonth, onNextMonth } = useCalendar();
	return (
		<CalHeader>
			<CalButton onClick={onPrevMonth}>
				<ArrowIcon
					width="12"
					height="20"
					fill={getColor("primary")({ theme })}
				/>
			</CalButton>
			<MonthLabel>{format(currentDate, "yyyy-MM")}</MonthLabel>
			<CalButton onClick={onNextMonth}>
				<ArrowIcon
					width="12"
					height="20"
					fill={getColor("primary")({ theme })}
					style={{ transform: "rotate(180deg)" }}
				/>
			</CalButton>
		</CalHeader>
	);
};

export default CalendarHeader;
