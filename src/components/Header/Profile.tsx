import profileImage from "@/assets/img/profile.png";
import Button from "../Button";
import { auth } from "@/firebase";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
	ProfileContainer,
	ProfileImage,
	ProfileInfo,
	ProfileImageContainer,
	ThemeToggleButton,
} from "./Header.styled";
import { useTheme } from "@/context/themeContext";
import SunIcon from "@/assets/img/light.png";
import MoonIcon from "@/assets/img/dark.png";

const Profile = () => {
	const user = useAppSelector((state) => state.userInfo.user);
	const dispatch = useAppDispatch();

	const logOut = () => {
		auth.signOut();
		dispatch(setIsLogined(false));
		dispatch(setUserInfo(null));
	};
	const { isDarkMode, toggleTheme } = useTheme();
	return (
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
				<ProfileImage
					src={user?.photoURL || profileImage}
					alt="프로필 이미지"
				/>
			</ProfileImageContainer>
		</ProfileContainer>
	);
};

export default Profile;
