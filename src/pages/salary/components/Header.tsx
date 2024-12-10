import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import {
	ButtonGroup,
	DateContainer,
	HeaderContainer,
	MonthButton,
	MonthChangeButton,
	TimeButton,
	Title,
	TopButtons,
} from "../components/Header.styled";
import CustomDatePicker from "../CustomDatePicker";
import MonthlySalaryModal from "../components/MonthSalaryModal";
import { HeaderProps } from "../types/header";

const Header = ({
	selectedDate,
	setSelectedDate,
	today,
	isMonthlySalaryOpen,
	setIsMonthlySalaryOpen,
}: HeaderProps) => (
	<LocalizationProvider dateAdapter={AdapterDateFns}>
		<HeaderContainer>
			<DateContainer>
				<Title>{`${selectedDate.getFullYear()}.${String(
					selectedDate.getMonth() + 1,
				).padStart(2, "0")}`}</Title>
			</DateContainer>
			<ButtonGroup>
				<TopButtons>
					<MonthButton onClick={() => setSelectedDate(today)}>
						이번달
					</MonthButton>
					<MonthChangeButton
						onClick={() =>
							setSelectedDate(
								new Date(
									selectedDate.getFullYear(),
									selectedDate.getMonth() - 1,
								),
							)
						}
					>
						<LeftArrow width="8" height="10" />
					</MonthChangeButton>
					<CustomDatePicker
						selectedDate={selectedDate}
						onDateChange={setSelectedDate}
					/>
					<MonthChangeButton
						onClick={() =>
							setSelectedDate(
								new Date(
									selectedDate.getFullYear(),
									selectedDate.getMonth() + 1,
								),
							)
						}
					>
						<LeftArrow
							width="8"
							height="10"
							style={{ transform: "rotate(180deg)" }}
						/>
					</MonthChangeButton>
				</TopButtons>
				<TimeButton onClick={() => setIsMonthlySalaryOpen(true)}>
					월별 급여
				</TimeButton>
				<MonthlySalaryModal
					isOpen={isMonthlySalaryOpen}
					onClose={() => setIsMonthlySalaryOpen(false)}
				/>
			</ButtonGroup>
		</HeaderContainer>
	</LocalizationProvider>
);

export default Header;
