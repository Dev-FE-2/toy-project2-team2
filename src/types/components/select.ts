export interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
	width?: string;
	onChange?: (value: string) => void;
}
