import { useEffect, useState } from "react";
import useCalendar from "@/hooks/useCalendar";
import { DateBox, DatesGrid, DateNum } from "./calendar.styled";
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfWeek,
	format,
	set,
} from "date-fns";

const Dates = () => {
	const today = new Date();
	const { currentDateString, setDate } = useCalendar();
	const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 선택된 날짜 상태 추가

	const currentDate = new Date(currentDateString);

	useEffect(() => {
		setSelectedDate(currentDate);
	}, [currentDateString]);

	const start = startOfWeek(startOfMonth(currentDate));
	const end = endOfWeek(endOfMonth(currentDate));
	const dates = eachDayOfInterval({ start, end });

	const isToday = (date: Date) =>
		format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

	const isThisMonth = (date: Date) =>
		format(date, "MM") === format(currentDate, "MM");

	const onClickDate = (e: React.MouseEvent, date: Date) => {
		setDate(
			set(currentDate, {
				date: parseInt(e.currentTarget.textContent as string),
			}),
		);
		setSelectedDate(date);
	};

	return (
		<DatesGrid>
			{dates.map((date) => (
				<DateBox
					key={date.toString()}
					$isToday={isToday(date)}
					$isThisMonth={isThisMonth(date)}
					onClick={(e) => onClickDate(e, date)}
					className={
						selectedDate &&
						format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
							? "selected"
							: ""
					}
				>
					<DateNum>{format(date, "d")}</DateNum>
				</DateBox>
			))}
		</DatesGrid>
	);
};

export default Dates;
