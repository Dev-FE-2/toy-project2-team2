import { useCallback, useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import DetailItem from "./DetailItem";
import useCalendar from "@/hooks/useCalendar";
import { Panel, DateStr, DetailList, NoDataStr } from "./detail.styled";
import { InsertBtn } from "../../schedule.styled";
import InsertIcon from "@/assets/img/plus_icon.svg?react";
import ScheduleFormModal from "../Modal/ScheduleFormModal";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";
import { ScheduleData } from "@/types";
import { formModalMode } from "../../types/schedule";

const DetailPanel = () => {
	const { currentDateString, schedules } = useCalendar();

	// 현재 선택된 날짜의 일정 데이터들
	const [selectedSchedules, setSelectedSchedules] = useState<ScheduleData[]>(
		[],
	);

	// 현재 선택된 일정의 상세 데이터
	const [selectedDetail, setSelectedDetail] = useState<ScheduleData | null>(
		null,
	);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [formMode, setFormMode] = useState<formModalMode>("insert");

	// DetailItem 클릭 핸들러
	const handleDetailClick = (data: ScheduleData) => {
		setSelectedDetail(data); // 선택된 데이터 설정
		setIsDetailModalOpen(true); // 상세 모달 열기
	};

	const handleInsertBtnClick = () => {
		setFormMode("insert"); // mode를 insert로 설정
		setIsFormModalOpen(true); // Form Modal 열기
	};

	const closeDetailModal = () => {
		setSelectedDetail(null); // 선택된 일정의 상세 데이터 초기화
		setIsDetailModalOpen(false); // 상세 모달 닫기
	};

	const openUpdateModal = () => {
		if (selectedDetail) {
			setFormMode("update"); // mode를 update로 설정
			setIsFormModalOpen(true); // Form Modal 열기
			setIsDetailModalOpen(false); // 상세 모달 닫기
		}
	};

	const getSchedulesForDate = useCallback(
		(dateString: string) => {
			return (
				Object.entries(schedules)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					.filter(([_, { start_date }]) =>
						isSameDay(new Date(start_date), new Date(dateString)),
					)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					.map(([_, value]) => value)
			);
		},
		[schedules],
	);

	useEffect(() => {
		const schedules = getSchedulesForDate(currentDateString) || [];
		setSelectedSchedules(schedules);
	}, [currentDateString, getSchedulesForDate]);

	return (
		<Panel>
			<DateStr>{format(new Date(currentDateString), "yyyy-MM-dd (E)")}</DateStr>
			<DetailList>
				{selectedSchedules.length > 0 ? (
					selectedSchedules.map((schedule) => (
						<DetailItem
							key={schedule.schedule_id}
							detailData={schedule}
							onItemClick={() => handleDetailClick(schedule)}
						/>
					))
				) : (
					<NoDataStr>등록된 일정이 없습니다.</NoDataStr>
				)}
			</DetailList>
			<InsertBtn onClick={handleInsertBtnClick}>
				<InsertIcon width="23" height="23" fill="#ffffff" />
			</InsertBtn>
			<ScheduleFormModal
				mode={formMode}
				isOpen={isFormModalOpen}
				onClose={() => setIsFormModalOpen(false)}
				detailData={selectedDetail}
			/>
			<ScheduleDetailModal
				onClose={closeDetailModal}
				isOpen={isDetailModalOpen}
				onConfirm={openUpdateModal}
				detailData={selectedDetail}
			/>
		</Panel>
	);
};

export default DetailPanel;
