import useCalendar from "@/hooks/useCalendar";
import { UtilBtn, UtilBtnBox } from "./calendar.styled";

const CalendarUtilBtn = () => {
	const { setDate } = useCalendar();

	return (
		<UtilBtnBox>
			<UtilBtn onClick={() => setDate(new Date())}>오늘</UtilBtn>
		</UtilBtnBox>
	);
};

export default CalendarUtilBtn;
