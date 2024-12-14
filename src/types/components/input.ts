export interface InputProps {
	label?: string;
	error?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	name?: string;
	autoComplete?: string;
}
