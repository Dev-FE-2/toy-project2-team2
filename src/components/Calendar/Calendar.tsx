import CalendarWrapper from "./CalendarWrapper";
import useCalendar from "@/hooks/useCalendar";

const Calendar = () => {
	const { currentDate, onPrevMonth, onNextMonth } = useCalendar();
	return (
		<CalendarWrapper
			currentDate={currentDate}
			onPrevMonth={onPrevMonth}
			onNextMonth={onNextMonth}
		>
			<CalendarWrapper.Header />
			<CalendarWrapper.Days />
			<CalendarWrapper.Dates />
		</CalendarWrapper>
	);
};

export default Calendar;
