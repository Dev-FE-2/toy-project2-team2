import { useState } from "react";
import { format } from "date-fns";
import DetailItem from "./DetailItem";
import useCalendar from "@/hooks/useCalendar";
import { Panel, DateStr, DetailList, NoDataStr } from "./detail.styled";
import { InsertBtn } from "../../schedule.styled";
import InsertIcon from "@/assets/img/plus_icon.svg?react";
import ScheduleFormModal from "../Modal/ScheduleFormModal";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";
import { ScheduleData } from "@/types";

const DetailPanel = () => {
	const { schedules, currentDate } = useCalendar();

	const [selectedDetail, setSelectedDetail] = useState<ScheduleData | null>(
		null,
	); // 현재 선택된 detailData
	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

	// DetailItem 클릭 핸들러
	const handleDetailClick = (data: ScheduleData) => {
		setSelectedDetail(data);
		setIsDetailModalOpen(true);
	};

	return (
		<Panel>
			<DateStr>{format(currentDate, "yyyy-MM-dd (E)")}</DateStr>
			<DetailList>
				{schedules.length > 0 ? (
					schedules.map((data) => (
						<DetailItem
							key={data.schedule_id}
							detailData={data}
							onItemClick={() => handleDetailClick(data)}
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
				detailData={selectedDetail}
			/>
		</Panel>
	);
};

export default DetailPanel;
