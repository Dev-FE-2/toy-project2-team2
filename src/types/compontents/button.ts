export type ButtonType = "primary" | "secondary" | "danger" | "white"; // 타입 별칭으로 수정
export type ButtonSize = "regular" | "small";

export interface ButtonProps {
	children: React.ReactNode;
	buttonType?: ButtonType;
	size?: ButtonSize;
	onClick?: () => void;
	disabled?: boolean;
}
