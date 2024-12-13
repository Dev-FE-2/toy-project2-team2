import { InputContainer, Label, InputBox, ErrorMessage } from "./Input.style";
import type { InputProps } from "@/types/components/input";

const Input = ({
	label,
	error,
	placeholder,
	value,
	onChange,
	type,
	readOnly,
	name,
	autoComplete,
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
				readOnly={readOnly}
				name={name}
				autoComplete={autoComplete}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</InputContainer>
	);
};
export default Input;
