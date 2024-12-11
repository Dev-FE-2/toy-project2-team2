export interface HeaderProps {
	selectedDate: Date;
	setSelectedDate: (date: Date) => void;
	today: Date;
	isMonthlySalaryOpen: boolean;
	setIsMonthlySalaryOpen: (isOpen: boolean) => void;
}
