export interface HistoryModalProps {
	isOpen: boolean;
	onClose: () => void;
	status: string;
	correctionType: string;
	reason: string;
	history: number | string;
}
