import React, { useState } from "react";
import styled from "styled-components";

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
			<Trigger onClick={() => setIsPickerOpen(!isPickerOpen)}>
				{`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월`}
			</Trigger>
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

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const Trigger = styled.div`
	cursor: pointer;
	display: inline-block;
	padding: 10px 15px;
	background-color: #f1f1f1;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	padding: 10px;
	margin-top: 5px;
	z-index: 10;
`;

const Row = styled.div`
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}
`;


const SelectBox = styled.select`
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100px;
`;
