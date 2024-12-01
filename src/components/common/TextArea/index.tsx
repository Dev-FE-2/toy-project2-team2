import React from "react";
import {
	TextAreaContainer,
	Label,
	ErrorMessage,
	TextAreaBox,
} from "./TextArea.styled";

interface TextAreaProps {
	label?: string;
	error?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	readOnly?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
	label,
	error,
	placeholder,
	value,
	onChange,
	readOnly,
}) => {
	return (
		<TextAreaContainer>
			{label && <Label>{label}</Label>}
			<TextAreaBox
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				$isError={!!error}
				readOnly={readOnly}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</TextAreaContainer>
	);
};

export default TextArea;
