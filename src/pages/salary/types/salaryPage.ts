import { SalaryData } from "./salaryData";

export interface GraphProps {
	salaryData: SalaryData;
}
export interface HeaderProps {
	selectedDate: Date;
	setSelectedDate: (date: Date) => void;
	today: Date;
	isMonthlySalaryOpen: boolean;
	setIsMonthlySalaryOpen: (isOpen: boolean) => void;
}
export interface SalaryDetailsSectionProps {
	salaryData: SalaryData | null;
	formatNumber: any;
	totalDeductions: any;
}
export interface SalarySectionProps {
	actualPayment: number;
	isCorrectionModalOpen: boolean;
	setIsCorrectionModalOpen: (isOpen: boolean) => void;
	formatNumber: (value: number) => string;
	selectedDate: any;
}
