import { InputContainer, Label, InputBox, ErrorMessage } from "./Input.style";
import type { InputProps } from "@/types/components/input";

const Input = ({
	label,
	error,
	placeholder,
	value,
	onChange,
	type,
	name,
}: InputProps) => {
	return (
		<InputContainer>
			{label && <Label>{label}</Label>}
			<InputBox
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				type={type}
				$isError={!!error}
				name={name}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</InputContainer>
	);
};

export default Input;
