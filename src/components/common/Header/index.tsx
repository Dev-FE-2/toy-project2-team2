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
import profileImage from "@/assets/img/profile.png";
import logoImage from "@/assets/img/logo.png";

interface User {
	name: string;
	team: string;
	position: string;
}

const Header = () => {
	const user: User = { name: "홍길동", team: "디자인팀", position: "사원" };
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
					<div>{user.name}</div>
					<div>{`${user.team} / ${user.position}`}</div>
				</ProfileInfo>

				<ProfileImageContainer>
					<Profile src={profileImage} alt="프로필 이미지" />
				</ProfileImageContainer>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
