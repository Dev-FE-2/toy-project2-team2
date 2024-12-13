import { CalendarContainer } from "./calendar.styled";
import CalendarHeader from "./CalendarHeader";
import Days from "./Days";
import Dates from "./Dates";
import CalendarUtilBtn from "./CalendarUtilBtn";

const Calendar = () => {
	return (
		<CalendarContainer>
			<CalendarUtilBtn />
			<CalendarHeader />
			<Days />
			<Dates />
		</CalendarContainer>
	);
};

export default Calendar;
