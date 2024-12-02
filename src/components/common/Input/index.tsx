import React from "react";
import { InputContainer, Label, InputBox, ErrorMessage } from "./Input.style";

interface InputProps {
	label?: string;
	error?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	readOnly?: boolean;
}
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
