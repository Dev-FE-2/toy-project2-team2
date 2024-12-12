import { CalendarContainer } from "./calendar.styled";
import CalendarHeader from "./CalendarHeader";
import Days from "./Days";
import Dates from "./Dates";

const Calendar = () => {
	return (
		<CalendarContainer>
			<CalendarHeader />
			<Days />
			<Dates />
		</CalendarContainer>
	);
};

export default Calendar;
