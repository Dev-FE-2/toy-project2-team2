import DetailItem from "./DetailItem";
import { Panel, Date, DetailList } from "./detail.styled";
import { InsertBtn } from "../../schedule.styled";
import type { DetailPanelProps, ScheduleData } from "../../types/schedule";
import InsertIcon from "@/assets/img/plus_icon.svg?react";

const DetailPanel = ({ date }: DetailPanelProps) => {
	const datas: ScheduleData[] = [
		{
			schedule_id: "schedule-1",
			title: "고객사 출장",
			content: "패캠 강남 강의장",
			start_date: "2024-12-12",
			end_date: null,
			color: "#FBBF24",
		},
		{
			schedule_id: "schedule-2",
			title: "TF팀 월간보고",
			content: "소회의실 3, 14:00 ~",
			start_date: "2024-12-12",
			end_date: null,
			color: "#F27430",
		},
	];

	return (
		<Panel>
			<Date>{date} (Thu)</Date>
			<DetailList>
				{datas.length > 0
					? datas.map((data) => (
							<DetailItem key={data.schedule_id} detailData={data} />
						))
					: "등록된 일정이 없습니다."}
			</DetailList>
			<InsertBtn>
				<InsertIcon width="23" height="23" fill="#ffffff" />
			</InsertBtn>
		</Panel>
	);
};

export default DetailPanel;
