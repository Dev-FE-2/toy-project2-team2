import { ScheduleData } from "@/types";

export interface DetailItemProps {
	detailData: ScheduleData;
	onItemClick: (isOpen: boolean) => void;
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
