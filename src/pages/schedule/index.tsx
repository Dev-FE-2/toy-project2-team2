import Title from "@/components/Title";
import { Calendar } from "./components/Calendar";
import { Container } from "./schedule.styled";
import DetailPanel from "./components/Detail/DetailPanel";

const Schedule = () => {
	return (
		<>
			<Title title={"내 일정"} />
			<Container>
				<Calendar />
				<DetailPanel date={"2024-12-12"} />
			</Container>
		</>
	);
};

export default Schedule;
