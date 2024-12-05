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
import Button from "../Button";
import { auth } from "@/firebase";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

const Header = () => {
	const user = useSelector((state: RootState) => state.auth.user);

	const logOut = () => {
		auth.signOut();
		console.log(auth.currentUser);
	};

	return (
		<HeaderContainer>
			<LeftContainer>
				<NavLink to="/">
					<Logo src={logoImage} alt="로고" />
				</NavLink>

				<Nav>
					<NavLink to="/schedule">내 일정</NavLink>
					<NavLink to="/salary">급여내역 조회</NavLink>
					<NavLink to="/salary-correction">급여 정정 신청</NavLink>
					<NavLink to="/mypage">마이페이지</NavLink>
				</Nav>
			</LeftContainer>

			<ProfileContainer>
				<ProfileInfo>
					<div>{user?.name}</div>
					<div>
						{user?.team} / {user?.grade}
					</div>
					<Button size="small" onClick={logOut}>
						로그아웃
					</Button>
				</ProfileInfo>

				<ProfileImageContainer>
					<Profile src={profileImage} alt="프로필 이미지" />
				</ProfileImageContainer>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
