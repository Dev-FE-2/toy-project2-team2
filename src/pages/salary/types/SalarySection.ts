export interface SalarySectionProps {
	actualPayment: number;
	isCorrectionModalOpen: boolean;
	setIsCorrectionModalOpen: (isOpen: boolean) => void;
	formatNumber: (value: number) => string;
}
