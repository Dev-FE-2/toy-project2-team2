import React, { useState } from "react";
import {
	Button,
	Dropdown,
	Row,
	SelectBox,
	Wrapper,
} from "./CustomDatePicker.styled";

interface CustomDatePickerProps {
	selectedDate: Date;
	onDateChange: any;
}

const CustomDatePicker = ({
	selectedDate,
	onDateChange,
}: CustomDatePickerProps) => {
	const today = new Date();
	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newYear = parseInt(event.target.value, 10);
		onDateChange(new Date(newYear, selectedDate.getMonth()));
	};

	const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newMonth = parseInt(event.target.value, 10);
		onDateChange(new Date(selectedDate.getFullYear(), newMonth));
	};

	return (
		<Wrapper>
			<Button onClick={() => setIsPickerOpen(!isPickerOpen)}>
				{`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월`}
			</Button>
			{isPickerOpen && (
				<Dropdown>
					<Row>
						<SelectBox
							id="year"
							value={selectedDate.getFullYear()}
							onChange={handleYearChange}
						>
							{Array.from(
								{ length: 10 },
								(_, i) => today.getFullYear() - i,
							).map((year) => (
								<option key={year} value={year}>
									{year}년
								</option>
							))}
						</SelectBox>
					</Row>

					<Row>
						<SelectBox
							id="month"
							value={selectedDate.getMonth()}
							onChange={handleMonthChange}
						>
							{Array.from({ length: 12 }, (_, i) => i).map((month) => (
								<option key={month} value={month}>
									{month + 1}월
								</option>
							))}
						</SelectBox>
					</Row>
				</Dropdown>
			)}
		</Wrapper>
	);
};

export default CustomDatePicker;
