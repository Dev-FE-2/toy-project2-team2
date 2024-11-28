import React, { useState } from "react";
import {
	DownIcon,
	Label,
	Option,
	Options,
	SelectBox,
	SelectContainer,
	SelectedValue,
} from "./Select.styled";

interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	readOnly?: boolean;
}

const Select: React.FC<SelectProps> = ({
	label,
	options,
	placeholder = "Select",
	value,
	readOnly,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value);

	const handleOptionClick = (value: string) => {
		if (readOnly) return;
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<SelectContainer>
			{label && <Label>{label}</Label>}
			<SelectBox
				isOpen={isOpen}
				readOnly={readOnly}
				onClick={() => !readOnly && setIsOpen(!isOpen)}
			>
				<SelectedValue>{selectedValue || placeholder}</SelectedValue>
				<DownIcon isOpen={isOpen}>∨</DownIcon>
				{isOpen && (
					<Options>
						{options.map((option) => (
							<Option
								key={option.value}
								readOnly={readOnly}
								onClick={() => handleOptionClick(option.value)}
							>
								{option.label}
							</Option>
						))}
					</Options>
				)}
			</SelectBox>
		</SelectContainer>
	);
};

export default Select;
