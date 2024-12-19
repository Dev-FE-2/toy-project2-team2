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
} from "./Header.styled";

const Profile = () => {
	const user = useAppSelector((state) => state.userInfo.user);
	const dispatch = useAppDispatch();

	const logOut = () => {
		auth.signOut();
		dispatch(setIsLogined(false));
		dispatch(setUserInfo(null));
	};
	return (
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
				<ProfileImage
					src={user?.photoURL || profileImage}
					alt="프로필 이미지"
				/>
			</ProfileImageContainer>
		</ProfileContainer>
	);
};

export default Profile;
