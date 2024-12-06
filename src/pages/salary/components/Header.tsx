import { useState } from "react";
import {
	HeaderContainer,
	DateContainer,
	ButtonGroup,
	TopButtons,
	Title,
	MonthButton,
	TimeButton,
	MonthDisplay,
	MonthChangeButton,
} from "./Header.styled";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import MonthlySalaryModal from "./MonthSalaryModal";

const Header = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const [isMonthlySalaryOpen, setIsMonthlySalaryOpen] = useState(false);

	return (
		<HeaderContainer>
			<DateContainer>
				<Title>{`${year}.${month}`}</Title>
			</DateContainer>
			<ButtonGroup>
				<TopButtons>
					<MonthButton>이번달</MonthButton>
					<MonthChangeButton>
						<LeftArrow width="8" height="10" />
					</MonthChangeButton>
					<MonthDisplay>11월</MonthDisplay>
					<MonthChangeButton>
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
	);
};

export default Header;
