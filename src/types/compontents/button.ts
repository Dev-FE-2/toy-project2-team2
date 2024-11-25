export type ButtonType = "primary" | "secondary" | "danger"; // 타입 별칭으로 수정

export interface ButtonProps {
	children: React.ReactNode;
	buttonType?: ButtonType;
	onClick?: () => void;
	disabled?: boolean;
}
