import CalendarContext from "@/contexts/CalendarContext";
import type { CalendarProps } from "../../types/calendar";
import CalendarHeader from "./CalendarHeader";
import Days from "./Days";
import Dates from "./Dates";

const CalendarWrapper = ({
	currentDate,
	onPrevMonth,
	onNextMonth,
	children,
}: CalendarProps) => {
	const value = { currentDate, onPrevMonth, onNextMonth };

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
};

CalendarWrapper.Header = CalendarHeader;
CalendarWrapper.Days = Days;
CalendarWrapper.Dates = Dates;

export default CalendarWrapper;
