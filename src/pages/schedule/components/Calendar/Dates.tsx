import useCalendar from "@/hooks/useCalendar";
import { DateBox, DatesGrid, DateNum } from "./calendar.styled";
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfWeek,
	format,
} from "date-fns";

const Dates = () => {
	const { currentDate } = useCalendar();

	const start = startOfWeek(startOfMonth(currentDate));
	const end = endOfWeek(endOfMonth(currentDate));
	const dates = eachDayOfInterval({ start, end });

	const isToday = (date: Date) =>
		format(date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

	const isThisMonth = (date: Date) =>
		format(date, "MM") === format(currentDate, "MM");

	return (
		<DatesGrid>
			{dates.map((date) => (
				<DateBox
					key={date.toString()}
					$isToday={isToday(date)}
					$isThisMonth={isThisMonth(date)}
				>
					<DateNum>{format(date, "d")}</DateNum>
				</DateBox>
			))}
		</DatesGrid>
	);
};

export default Dates;
