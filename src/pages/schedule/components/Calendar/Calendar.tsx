import CalendarWrapper from "./CalendarWrapper";
import useCalendar from "@/hooks/useCalendar";
import { CalendarContainer } from "./calendar.styled";

const Calendar = () => {
	const { currentDate, onPrevMonth, onNextMonth } = useCalendar();
	return (
		<CalendarWrapper
			currentDate={currentDate}
			onPrevMonth={onPrevMonth}
			onNextMonth={onNextMonth}
		>
			<CalendarContainer>
				<CalendarWrapper.Header />
				<CalendarWrapper.Days />
				<CalendarWrapper.Dates />
			</CalendarContainer>
		</CalendarWrapper>
	);
};

export default Calendar;
