import React from "react";
import {
	HeaderContainer,
	LeftContainer,
	Logo,
	Nav,
	NavLink,
	ProfileContainer,
	Profile,
	ProfileInfo,
	ProfileImageContainer,
} from "./Header.styled";
import profileImage from "../../../assets/profile.png";
import logoImage from "../../../assets/logo.png";

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<LeftContainer>
				<NavLink to="/">
					<Logo src={logoImage} alt="로고" />
				</NavLink>

				<Nav>
					<NavLink to="/">내 일정</NavLink>
					<NavLink to="/pay">급여내역 조회</NavLink>
					<NavLink to="/pay-correction">급여 정정 신청</NavLink>
					<NavLink to="/mypage">마이페이지</NavLink>
				</Nav>
			</LeftContainer>

			<ProfileContainer>
				<ProfileInfo>
					<div>홍길동</div>
					<div>디자인팀 / 사원</div>
				</ProfileInfo>

				<ProfileImageContainer>
					<Profile src={profileImage} alt="프로필 이미지" />
				</ProfileImageContainer>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
