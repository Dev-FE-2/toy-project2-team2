import { useAppDispatch, useAppSelector } from "./useRedux";
import {
	fetchSchedules,
	selectCurrentDateString,
	selectSchedules,
	setCurrentDate,
} from "@/store/slices/scheduleSlice";
import { convertDateToLocaleString } from "@/utils";
import { addMonths, startOfMonth, subMonths } from "date-fns";

const useCalendar = () => {
	const dispatch = useAppDispatch();
	const schedules = useAppSelector(selectSchedules);
	const currentDateString = useAppSelector(selectCurrentDateString);

	const currentDate = new Date(currentDateString);

	const onPrevMonth = () => {
		const newDate = startOfMonth(subMonths(currentDate, 1));
		dispatch(setCurrentDate(convertDateToLocaleString(newDate)));
		dispatch(fetchSchedules({ startDate: newDate }));
	};

	const onNextMonth = () => {
		const newDate = startOfMonth(addMonths(currentDate, 1));
		dispatch(setCurrentDate(convertDateToLocaleString(newDate)));
		dispatch(fetchSchedules({ startDate: newDate }));
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
