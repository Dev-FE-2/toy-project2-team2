export interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: any;
	width?: string;
	onChange?: (value: string) => void;
}
