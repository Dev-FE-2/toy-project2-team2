import React from "react";
import {
	HeaderContainer,
	LeftContainer,
	Nav,
	NavLink,
	ProfileContainer,
} from "./Header.styled";

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<LeftContainer>
				<NavLink to="/">Good Work</NavLink>

				<Nav>
					<NavLink to="/">내 일정</NavLink>
					<NavLink to="/pay">급여내역 조회</NavLink>
					<NavLink to="/pay-correction">급여 정정 신청</NavLink>
					<NavLink to="/mypage">마이페이지</NavLink>
				</Nav>
			</LeftContainer>

			<ProfileContainer>{/* 프로필 기본이미지 */}</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
