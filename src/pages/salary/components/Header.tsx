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

const Header = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");

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
				<TimeButton>월별 급여</TimeButton>
			</ButtonGroup>
		</HeaderContainer>
	);
};

export default Header;
