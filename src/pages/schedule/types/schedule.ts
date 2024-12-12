import { ScheduleData } from "@/types";

export interface DetailItemProps {
	detailData: ScheduleData;
	onItemClick: (detailData: ScheduleData) => void;
}

export interface CalendarScheduleProps {
	schedules: ScheduleData[];
	onMonthChange: (newMonth: string) => void;
}

export interface ScheduleFormModalProps {
	mode: string;
	isOpen: boolean;
	onClose: () => void;
}

export interface ScheduleViewModalProps {
	isOpen: boolean;
	onClose: () => void;
	detailData: ScheduleData | null;
}
