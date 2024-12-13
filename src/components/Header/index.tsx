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
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const Header = () => {
	const user = useAppSelector((state) => state.userInfo.user);
	const dispatch = useAppDispatch();
	const logOut = () => {
		auth.signOut();
		dispatch(setIsLogined(false));
		dispatch(setUserInfo(null));
	};
	return (
		<HeaderContainer>
			<LeftContainer>
				<NavLink to="/">
					<Logo src={logoImage} alt="로고" />
				</NavLink>

				<Nav>
					<NavLink to="/">내 일정</NavLink>
					<NavLink to="/salary">급여내역 조회</NavLink>
					<NavLink to="/salary-correction">정정 신청 내역</NavLink>
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
					<Profile src={user?.photoURL || profileImage} alt="프로필 이미지" />
				</ProfileImageContainer>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
