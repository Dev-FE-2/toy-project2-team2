import { TextAreaProps } from "@/types/components/textarea";
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
	readOnly,
}: TextAreaProps) => {
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
