import { useState } from "react";
import { format } from "date-fns";
import DetailItem from "./DetailItem";
import useCalendar from "@/hooks/useCalendar";
import { Panel, DateStr, DetailList, NoDataStr } from "./detail.styled";
import { InsertBtn } from "../../schedule.styled";
import InsertIcon from "@/assets/img/plus_icon.svg?react";
import ScheduleFormModal from "../Modal/ScheduleFormModal";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";

const DetailPanel = () => {
	const { schedules, currentDate } = useCalendar();

	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

	return (
		<Panel>
			<DateStr>{format(currentDate, "yyyy-MM-dd (E)")}</DateStr>
			<DetailList>
				{schedules.length > 0 ? (
					schedules.map((data) => (
						<DetailItem
							key={data.schedule_id}
							detailData={data}
							onItemClick={setIsDetailModalOpen}
						/>
					))
				) : (
					<NoDataStr>등록된 일정이 없습니다.</NoDataStr>
				)}
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
