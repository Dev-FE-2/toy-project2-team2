import { useEffect } from "react";
import { addMonths, startOfMonth } from "date-fns";
import { Title } from "@/components";
import { Calendar } from "./components/Calendar";
import { Container } from "./schedule.styled";
import DetailPanel from "./components/Detail/DetailPanel";
import { fetchSchedules } from "@/store/slices/scheduleSlice";
import { useAppDispatch } from "@/hooks";
import { convertTimeZone } from "@/utils";

const Schedule = () => {
	const firstOfMonth = convertTimeZone(startOfMonth(new Date()));
	const dispatch = useAppDispatch();

	// 기본적으로 현재 월 데이터를 로드
	useEffect(() => {
		dispatch(
			fetchSchedules({
				startDate: firstOfMonth,
				endDate: addMonths(firstOfMonth, 1),
			}),
		);
	}, [dispatch]);

	return (
		<>
			<Title title={"내 일정"} />
			<Container>
				<Calendar />
				<DetailPanel />
			</Container>
		</>
	);
};

export default Schedule;
