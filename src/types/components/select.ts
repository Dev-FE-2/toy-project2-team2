export interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
}
