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

const Header = () => {
	return (
		<HeaderContainer>
			<DateContainer>
				<Title>2024.11</Title>
			</DateContainer>
			<ButtonGroup>
				<TopButtons>
					<MonthButton>이번달</MonthButton>
					<MonthChangeButton>&lt;</MonthChangeButton>
					<MonthDisplay>11월</MonthDisplay>
					<MonthChangeButton>&gt;</MonthChangeButton>
				</TopButtons>
				<TimeButton>월별 급여</TimeButton>
			</ButtonGroup>
		</HeaderContainer>
	);
};

export default Header;
