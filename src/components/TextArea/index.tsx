import type { TextAreaProps } from "@/types/components/textarea";
import {
	TextAreaContainer,
	Label,
	ErrorMessage,
	TextAreaBox,
} from "./TextArea.styled";

const TextArea = ({
	label,
	error,
	placeholder,
	value,
	onChange,
}: TextAreaProps) => {
	return (
		<TextAreaContainer>
			{label && <Label>{label}</Label>}
			<TextAreaBox
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				$isError={!!error}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</TextAreaContainer>
	);
};

export default TextArea;
