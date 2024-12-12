import { ScheduleData } from "@/types";

export interface DetailItemProps {
	detailData: ScheduleData;
	onItemClick: (detailData: ScheduleData) => void;
}

export interface CalendarScheduleProps {
	schedules: ScheduleData[];
	onMonthChange: (newMonth: string) => void;
}

export type formModalMode = "insert" | "update";

export interface ScheduleFormModalProps {
	mode: formModalMode;
	isOpen: boolean;
	onClose: () => void;
	detailData: ScheduleData | null;
}

export interface ScheduleViewModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	detailData: ScheduleData | null;
}
