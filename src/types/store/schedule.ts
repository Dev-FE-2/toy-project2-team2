export interface ScheduleData {
	schedule_id: string;
	title: string;
	content: string;
	start_date: string;
	end_date?: string | null;
	color: string;
}

export interface ScheduleState {
	schedules: ScheduleData[];
	currentDate: string;
	loading: boolean;
	error: string | null;
}
