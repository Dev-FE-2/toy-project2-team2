export type ButtonType = "primary" | "secondary" | "danger" | "white"; // 타입 별칭으로 수정
export type ButtonSize = "regular" | "small";

export interface ButtonProps {
	children: React.ReactNode;
	buttonType?: ButtonType | undefined; 
	size?: ButtonSize | undefined; 
	onClick?: () => void;
	disabled?: boolean;
}
