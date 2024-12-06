import DetailItem from "./DetailItem";
import { Panel, Date, DetailList } from "./detail.styled";
import { InsertBtn } from "../../schedule.styled";
import type { DetailPanelProps, ScheduleData } from "../../types/schedule";
import InsertIcon from "@/assets/img/plus_icon.svg?react";
import ScheduleFormModal from "../Modal/ScheduleFormModal";
import { useState } from "react";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";

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

	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

	return (
		<Panel>
			<Date>{date} (Thu)</Date>
			<DetailList>
				{datas.length > 0
					? datas.map((data) => (
							<DetailItem
								key={data.schedule_id}
								detailData={data}
								onItemClick={setIsDetailModalOpen}
							/>
						))
					: "등록된 일정이 없습니다."}
			</DetailList>
			<InsertBtn onClick={() => setIsFormModalOpen(true)}>
				<InsertIcon width="23" height="23" fill="#ffffff" />
			</InsertBtn>
			<ScheduleFormModal
				mode={"insert"}
				isOpen={isFormModalOpen}
				onClose={() => setIsFormModalOpen(false)}
			/>
			<ScheduleDetailModal
				isOpen={isDetailModalOpen}
				onClose={() => setIsDetailModalOpen(false)}
			/>
		</Panel>
	);
};

export default DetailPanel;
