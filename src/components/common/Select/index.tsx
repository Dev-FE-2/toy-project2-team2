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
import DownArrow from "@/assets/img/down_arrow_icon.svg?react";

interface SelectProps {
	label?: string;
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
	label,
	options,
	placeholder = "Select",
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value);

	const handleOptionClick = (value: string) => {
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<SelectContainer>
			{label && <Label>{label}</Label>}
			<SelectBox isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<SelectedValue>{selectedValue || placeholder}</SelectedValue>
				<DownIcon isOpen={isOpen}>
					<DownArrow width="16" height="16" fill="#000" />
				</DownIcon>
				{isOpen && (
					<Options>
						{options.map((option) => (
							<Option
								key={option.value}
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
