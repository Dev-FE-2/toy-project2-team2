import { MyPageContainer, MyPageHeader, ProfileBox } from "./MyPage.styled";
import { UserInfoBox } from "./components/UserInfoBox";
import { ImageBox } from "./components/ImageBox";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/store";

const MyPage = () => {
	const userData = useSelector((state: RootState) => state.userInfo.user);
	if (!userData) {
		return <p>로딩중</p>;
	}
	return (
		<MyPageContainer>
			<MyPageHeader>
				<Title title="마이페이지" />
			</MyPageHeader>
			<ProfileBox>
				<ImageBox userImageData={userData.photoURL}></ImageBox>
				<UserInfoBox userData={userData}></UserInfoBox>
			</ProfileBox>
		</MyPageContainer>
	);
};

export default MyPage;
