import { MyPageContainer, MyPageHeader, ProfileBox } from "./MyPage.styled";
import { UserInfoBox } from "./components/UserInfoBox";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/store";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";

const MyPage = () => {
	const userData = useSelector((state: RootState) => state.userInfo.user);

	return (
		<LoaderWrapper isLoading={!userData}>
			<MyPageContainer>
				<MyPageHeader>
					<Title title="마이페이지" />
				</MyPageHeader>
				<ProfileBox>
					<UserInfoBox userData={userData!} />
				</ProfileBox>
			</MyPageContainer>
		</LoaderWrapper>
	);
};

export default MyPage;
