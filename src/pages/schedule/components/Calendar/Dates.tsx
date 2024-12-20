import { useEffect, useState } from "react";
import useCalendar from "@/hooks/useCalendar";
import { DateBox, DatesGrid, DateNum, TodayBadge } from "./calendar.styled";
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfWeek,
	format,
	isSaturday,
	isSunday,
	isSameDay,
} from "date-fns";
import ScheduleListPerDate from "./ScheduleListPerDate";

const Dates = () => {
	const today = new Date();
	const { currentDateString, setDate, schedules } = useCalendar();
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

	const onClickDate = (date: Date) => {
		setDate(date);
		setSelectedDate(date);
	};

	return (
		<DatesGrid>
			{dates.map((date) => (
				<DateBox
					key={date.toString()}
					$isThisMonth={isThisMonth(date)}
					$isSaturday={isSaturday(date)}
					$isSunday={isSunday(date)}
					onClick={() => onClickDate(date)}
					className={
						selectedDate &&
						format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
							? "selected"
							: ""
					}
				>
					<DateNum>{format(date, "d")}</DateNum>
					{isToday(date) && <TodayBadge>오늘</TodayBadge>}
					<ScheduleListPerDate
						schedules={schedules.filter((schedule) =>
							isSameDay(new Date(schedule.start_date), date),
						)}
					/>
				</DateBox>
			))}
		</DatesGrid>
	);
};

export default Dates;
