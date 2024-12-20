import { useEffect, useState, useCallback } from "react";
import { format } from "date-fns";
import { Input, Modal, TextArea } from "@/components";
import useCalendar from "@/hooks/useCalendar";
import { insertSchedule, updateSchedule } from "@/services";
import { getColor } from "@/styles/theme";
import { useTheme } from "styled-components";
import type { ScheduleFormModalProps } from "../../types/schedule";
import { convertDateToLocaleString } from "@/utils/date";
import { upsertSchedule } from "@/store/slices/scheduleSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toast } from "react-toastify";

const ScheduleFormModal = ({
	mode,
	isOpen,
	onClose,
	detailData,
}: ScheduleFormModalProps) => {
	const theme = useTheme();
	const { currentDateString } = useCalendar();
	const uid = useAppSelector((state) => state.loginAuth.uid) as string;
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		title: "",
		date: format(new Date(currentDateString), "yyyy-MM-dd"),
		colorLabel: getColor("primary")({ theme }),
		content: "",
	});

	const resetForm = useCallback(() => {
		if (mode === "insert") {
			setFormData({
				title: "",
				date: format(new Date(currentDateString), "yyyy-MM-dd"),
				colorLabel: getColor("primary")({ theme }),
				content: "",
			});
		} else if (mode === "update" && detailData) {
			setFormData({
				title: detailData.title,
				date: detailData.start_date,
				colorLabel: detailData.color,
				content: detailData.content,
			});
		}
	}, [mode, currentDateString, theme, detailData]);

	useEffect(() => {
		if (isOpen) resetForm();
	}, [isOpen, resetForm]);

	const handleChange = (key: keyof typeof formData, value: string) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const handleApply = async () => {
		const { title, date, colorLabel, content } = formData;

		if (!title || !date) {
			toast.warning("제목과 날짜를 입력해주세요.");
			return;
		}

		const scheduleData = {
			title,
			start_date: convertDateToLocaleString(new Date(date)),
			color: colorLabel,
			content,
		};

		try {
			let scheduleId;

			if (mode === "insert") {
				scheduleId = await insertSchedule(uid, scheduleData);
			} else if (mode === "update" && detailData) {
				scheduleId = await updateSchedule(uid, {
					...scheduleData,
					schedule_id: detailData.schedule_id,
				});
			}

			dispatch(
				upsertSchedule({ ...scheduleData, schedule_id: scheduleId as string }),
			);
			toast.success(
				mode === "insert" ? "일정이 등록되었습니다." : "일정이 수정되었습니다.",
			);
			onClose();
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "알 수 없는 오류가 발생했습니다.";
			toast.error(errorMessage);
		}
	};

	const modalTitle = mode === "insert" ? "일정 등록" : "일정 수정";
	const confirmLabel = mode === "insert" ? "등록" : "수정";

	return (
		<Modal
			isOpen={isOpen}
			title={modalTitle}
			onClose={onClose}
			buttons={[
				{
					label: "취소",
					onClick: onClose,
					buttonType: "white",
					size: "small",
				},
				{
					label: confirmLabel,
					onClick: handleApply,
					buttonType: "primary",
					size: "small",
				},
			]}
		>
			<Input
				type="text"
				label="제목 *"
				placeholder="일정 제목을 입력해주세요"
				value={formData.title}
				onChange={(e) => handleChange("title", e.target.value)}
			/>
			<Input
				type="date"
				label="날짜 *"
				placeholder="날짜를 선택해주세요"
				value={
					isNaN(Date.parse(formData.date))
						? ""
						: format(new Date(formData.date), "yyyy-MM-dd")
				}
				onChange={(e) => handleChange("date", e.target.value)}
			/>
			<Input
				type="color"
				label="컬러 라벨"
				value={formData.colorLabel}
				onChange={(e) => handleChange("colorLabel", e.target.value)}
			/>
			<TextArea
				label="메모"
				placeholder="일정 메모를 입력하세요"
				value={formData.content}
				onChange={(e) => handleChange("content", e.target.value)}
			/>
		</Modal>
	);
};

export default ScheduleFormModal;
