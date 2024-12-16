import { useAppDispatch, useAppSelector } from "./useRedux";
import {
	fetchSchedules,
	selectCurrentDateString,
	selectSchedules,
	setCurrentDate,
} from "@/store/slices/scheduleSlice";
import { convertDateToLocaleString, convertTimeZone } from "@/utils";
import { addMonths, startOfMonth, subMonths } from "date-fns";

const useCalendar = () => {
	const dispatch = useAppDispatch();
	const schedules = useAppSelector(selectSchedules);
	const currentDateString = useAppSelector(selectCurrentDateString);

	const currentDate = new Date(currentDateString);

	const dispatchForNewDate = (newDate: Date) => {
		const firstOfNewDate = convertTimeZone(startOfMonth(newDate));
		dispatch(setCurrentDate(convertDateToLocaleString(newDate)));
		dispatch(
			fetchSchedules({
				startDate: firstOfNewDate,
				endDate: addMonths(firstOfNewDate, 1),
			}),
		);
	};

	const onPrevMonth = () => {
		const newDate = subMonths(currentDate, 1);
		dispatchForNewDate(newDate);
	};

	const onNextMonth = () => {
		const newDate = addMonths(currentDate, 1);
		dispatchForNewDate(newDate);
	};

	const setDate = (date: Date) => {
		dispatch(setCurrentDate(convertDateToLocaleString(date)));
		dispatch(fetchSchedules({ startDate: date }));
	};

	return {
		currentDateString,
		setDate,
		onPrevMonth,
		onNextMonth,
		schedules,
	};
};

export default useCalendar;
