import { Day, DaysRow } from "./calendar.styled";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Days = () => {
	return (
		<DaysRow>
			{daysOfWeek.map((day) => (
				<Day key={day}>{day}</Day>
			))}
		</DaysRow>
	);
};

export default Days;
