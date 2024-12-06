import { useState, useRef, useEffect } from "react";
import DownArrow from "@/assets/img/down_arrow_icon.svg?react";
import type { SelectProps } from "@/types/components/select";
import {
	DownIcon,
	Label,
	Option,
	Options,
	SelectBox,
	SelectContainer,
	SelectedValue,
} from "./Select.styled";

const Select = ({
	label,
	options,
	value,
	width = "350px",
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(
		value || options[0]?.value,
	);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!value && options.length > 0) {
			setSelectedValue(options[0]?.value);
		}
	}, [value, options]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [selectRef]);

	const handleOptionClick = (value: string) => {
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<SelectContainer ref={selectRef} width={width}>
			{label && <Label>{label}</Label>}
			<SelectBox $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<SelectedValue>{selectedValue}</SelectedValue>
				<DownIcon $isOpen={isOpen}>
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
