export interface ModalProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
	confirmLabel?: string;
	onConfirm?: () => void;
}
