import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import { ScheduleWrapper, Main, ScheduleContainer } from "./schedule.styled";

const ScheduleLayout = () => {
	return (
		<ScheduleWrapper>
			<Header />
			<Main>
				<ScheduleContainer>
					<Outlet />
				</ScheduleContainer>
			</Main>
		</ScheduleWrapper>
	);
};

export default ScheduleLayout;
