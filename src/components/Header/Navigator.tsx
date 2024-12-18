import { Nav, NavLink } from "./Header.styled";

const Navigator = () => {
	return (
		<Nav>
			<NavLink to="/">내 일정</NavLink>
			<NavLink to="/salary">급여 내역 조회</NavLink>
			<NavLink to="/salary-correction">정정 신청 내역</NavLink>
			<NavLink to="/mypage">마이페이지</NavLink>
		</Nav>
	);
};

export default Navigator;
