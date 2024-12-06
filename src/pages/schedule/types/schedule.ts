export interface ScheduleData {
	schedule_id: string;
	title: string;
	content: string;
	start_date: string;
	end_date: string | null;
	color: string;
}

export interface DetailPanelProps {
	date: string;
}

export interface DetailItemProps {
	detailData: ScheduleData;
	onItemClick: (isOpen: boolean) => void;
}
