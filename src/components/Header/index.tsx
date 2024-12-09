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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { setUserInfo } from "@/store/slices/userInfoSlice";

const Header = () => {
	const user = useSelector((state: RootState) => state.userInfo.user);
	console.log(user);
	const dispatch = useDispatch();
	const logOut = () => {
		auth.signOut();
		dispatch(setIsLogined(false));
		dispatch(setUserInfo(null));
		console.log(auth.currentUser);
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
					<Profile
						src={user ? user.photoURL : profileImage}
						alt="프로필 이미지"
					/>
				</ProfileImageContainer>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
