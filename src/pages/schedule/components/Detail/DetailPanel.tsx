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
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeSchedule } from "@/store/slices/scheduleSlice";
import { deleteSchedule } from "@/services";
import { toast } from "react-toastify";

const DetailPanel = () => {
	const { currentDateString, schedules } = useCalendar();
	const uid = useAppSelector((state) => state.loginAuth.uid) as string;
	const dispatch = useAppDispatch();

	const [selectedSchedules, setSelectedSchedules] = useState<ScheduleData[]>(
		[],
	); // 현재 선택된 날짜의 일정 데이터들

	const [selectedDetail, setSelectedDetail] = useState<ScheduleData | null>(
		null,
	); // 현재 선택된 일정의 상세 데이터

	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 상세 모달 여닫는 상태
	const [isFormModalOpen, setIsFormModalOpen] = useState(false); // 등록,수정 모달 여닫는 상태
	const [formMode, setFormMode] = useState<formModalMode>("insert"); // 등록,수정 모드 상태

	// DetailItem 클릭 핸들러
	const handleDetailClick = useCallback((data: ScheduleData) => {
		setSelectedDetail(data); // 선택된 데이터 설정
		setIsDetailModalOpen(true); // 상세 모달 열기
	}, []);

	// 등록 버튼 클릭 핸들러
	const handleInsertClick = () => {
		setFormMode("insert"); // mode를 insert로 설정
		setIsFormModalOpen(true); // Form Modal 열기
	};

	// 삭제 버튼 클릭 핸들러
	const handleDeleteClick = useCallback(
		async (e: React.MouseEvent, scheduleId: string) => {
			e.stopPropagation();
			if (confirm("해당 일정을 삭제하시겠습니까?")) {
				try {
					const deletedId = await deleteSchedule(uid, scheduleId);
					dispatch(removeSchedule(deletedId));
					toast.success("일정이 삭제되었습니다.");

					// 선택된 날짜의 일정 데이터들에서 삭제
					setSelectedSchedules((prev) =>
						prev.filter((schedule) => schedule.schedule_id !== scheduleId),
					);
				} catch (error) {
					const errorMessage =
						error instanceof Error
							? error.message
							: "알 수 없는 오류가 발생했습니다.";
					toast.error(errorMessage);
				}
			}
		},
		[dispatch, uid],
	);

	// 상세 모달 닫기 핸들러
	const closeDetailModal = () => {
		setSelectedDetail(null); // 선택된 일정의 상세 데이터 초기화
		setIsDetailModalOpen(false); // 상세 모달 닫기
	};

	// 수정 모달 열기 핸들러
	const openUpdateModal = () => {
		if (selectedDetail) {
			setFormMode("update"); // mode를 update로 설정
			setIsFormModalOpen(true); // Form Modal 열기
			setIsDetailModalOpen(false); // 상세 모달 닫기
		}
	};

	const getSchedulesForDate = useCallback(
		(dateString: string) => {
			return schedules.filter(({ start_date }) =>
				isSameDay(new Date(start_date), new Date(dateString)),
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
							onClickItem={handleDetailClick}
							onClickDelete={handleDeleteClick}
						/>
					))
				) : (
					<NoDataStr>등록된 일정이 없습니다.</NoDataStr>
				)}
			</DetailList>
			<InsertBtn onClick={handleInsertClick}>
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
