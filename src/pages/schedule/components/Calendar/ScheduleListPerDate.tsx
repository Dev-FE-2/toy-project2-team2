import { ScheduleData } from "@/types";
import { ScheduleItem, ScheduleList, ScheduleTitle } from "./calendar.styled";

const ScheduleListPerDate = ({ schedules }: { schedules: ScheduleData[] }) => {
	return (
		<ScheduleList>
			{schedules.map((schedule) => (
				<ScheduleItem key={schedule.schedule_id} $color={schedule.color}>
					<ScheduleTitle $color={schedule.color}>
						{schedule.title}
					</ScheduleTitle>
				</ScheduleItem>
			))}
		</ScheduleList>
	);
};

export default ScheduleListPerDate;
