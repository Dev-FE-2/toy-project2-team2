import { ButtonSize, ButtonType } from "./button";

export interface ModalProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
	confirmLabel?: string;
	onConfirm?: () => void;
	buttons?: ModalButton[];
}
export interface ModalButton {
	label: string;
	onClick: () => void;
	buttonType?: ButtonType; 
	size?: ButtonSize;
}
