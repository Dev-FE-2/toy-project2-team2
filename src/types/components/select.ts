export interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
<<<<<<< HEAD
	width?: string;
=======
	onChange?: (value: string) => void;
>>>>>>> bfd34c7390e0a33ff55e9d96941374d92bdb1f59
}
