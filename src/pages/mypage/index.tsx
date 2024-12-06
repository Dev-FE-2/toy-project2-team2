import { MyPageContainer, MyPageHeader, ProfileBox } from "./MyPage.styled";
import { UserInfoBox } from "./components/UserInfoBox";
import { ImageBox } from "./components/ImageBox";
import Title from "@/components/Title";

const MyPage = () => {
	return (
		<MyPageContainer>
			<MyPageHeader>
				<Title title="마이페이지" />
			</MyPageHeader>
			<ProfileBox>
				<ImageBox></ImageBox>
				<UserInfoBox></UserInfoBox>
			</ProfileBox>
		</MyPageContainer>
	);
};

export default MyPage;
