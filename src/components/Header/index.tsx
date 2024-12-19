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
	ThemeToggleButton,
} from "./Header.styled";
import profileImage from "@/assets/img/profile.png";
import logoImage from "@/assets/img/logo.png";
import SunIcon from "@/assets/img/light.png";
import MoonIcon from "@/assets/img/dark.png";
import logo_white from "@/assets/img/logo_white.png";
import Button from "../Button";
import { useTheme } from "@/context/themeContext";
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
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<HeaderContainer>
			<LeftContainer>
				<NavLink to="/">
					<Logo src={isDarkMode ? logo_white : logoImage} alt="로고" />
				</NavLink>

				<Nav>
					<NavLink to="/">내 일정</NavLink>
					<NavLink to="/salary">급여 내역 조회</NavLink>
					<NavLink to="/salary-correction">정정 신청 내역</NavLink>
					<NavLink to="/mypage">마이페이지</NavLink>
				</Nav>
			</LeftContainer>

			<ProfileContainer>
				<ThemeToggleButton
					src={isDarkMode ? SunIcon : MoonIcon}
					alt={isDarkMode ? "라이트 모드 아이콘" : "다크 모드 아이콘"}
					onClick={toggleTheme}
					$isDarkMode={isDarkMode}
				/>
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
