import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Input, Modal, TextArea } from "@/components";
import useCalendar from "@/hooks/useCalendar";
import { insertSchedule } from "@/services";
import { getColor } from "@/styles/theme";
import { useTheme } from "styled-components";
import type { ScheduleFormModalProps } from "../../types/schedule";
import { convertDateToLocaleString } from "@/utils/date";
import { addSchedule } from "@/store/slices/scheduleSlice";
import { useAppDispatch } from "@/hooks";

const ScheduleFormModal = ({
	mode,
	isOpen,
	onClose,
}: ScheduleFormModalProps) => {
	const theme = useTheme();
	const { currentDateString } = useCalendar();
	const dispatch = useAppDispatch();

	const [title, setTitle] = useState("");
	const [date, setDate] = useState(
		format(new Date(currentDateString), "yyyy-MM-dd"),
	);
	const [colorLabel, setColorLabel] = useState(getColor("primary")({ theme }));
	const [content, setContent] = useState("");

	useEffect(() => {
		if (isOpen) {
			setTitle("");
			setDate(format(new Date(currentDateString), "yyyy-MM-dd"));
			setColorLabel(getColor("primary")({ theme }));
			setContent("");
		}
		setDate(currentDateString);
	}, [isOpen, currentDateString, theme]);

	const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColorLabel(e.target.value);
	};

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);

	const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) =>
		setDate(e.target.value);

	const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value);

	const handleApply = async () => {
		if (!title || !date) {
			alert("제목과 날짜를 입력해주세요.");
			return;
		}

		const scheduleData = {
			title,
			start_date: convertDateToLocaleString(new Date(date)),
			color: colorLabel,
			content,
		};

		try {
			const scheduleId = await insertSchedule(scheduleData);
			dispatch(addSchedule({ ...scheduleData, schedule_id: scheduleId }));
			alert("일정이 등록되었습니다.");
			onClose();
		} catch (error) {
			alert("일정 등록 중 오류가 발생했습니다.");
			console.error(error);
		}
	};

	const modalTitle = mode === "insert" ? "일정 등록" : "일정 수정";
	const confirmLabel = mode === "insert" ? "등록" : "수정";

	return (
		<Modal
			isOpen={isOpen}
			title={modalTitle}
			onClose={onClose}
			confirmLabel={confirmLabel}
			onConfirm={handleApply}
		>
			<Input
				type="text"
				label="제목 *"
				placeholder="일정 제목을 입력해주세요"
				value={title}
				onChange={onChangeTitle}
			/>
			<Input
				type="date"
				label="날짜 *"
				placeholder="날짜를 선택해주세요"
				value={
					isNaN(Date.parse(date)) ? "" : format(new Date(date), "yyyy-MM-dd")
				}
				onChange={onChangeDate}
			/>
			<Input
				type="color"
				label="컬러 라벨"
				value={colorLabel}
				onChange={onChangeColor}
			/>
			<TextArea
				label="메모"
				placeholder="일정 메모를 입력하세요"
				value={content}
				onChange={onChangeContent}
			/>
		</Modal>
	);
};

export default ScheduleFormModal;
