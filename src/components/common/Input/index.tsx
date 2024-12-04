import { InputContainer, Label, InputBox, ErrorMessage } from "./Input.style";
import { InputProps } from "@/types/components/input";

const Input = ({
	label,
	error,
	placeholder,
	value,
	onChange,
	type,
	readOnly,
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
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</InputContainer>
	);
};
export default Input;
