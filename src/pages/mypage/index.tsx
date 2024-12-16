import { MyPageContainer, MyPageHeader, ProfileBox } from "./MyPage.styled";
import { UserInfoBox } from "./components/UserInfoBox/UserInfoBox";
import { ImageBox } from "./components/ImageBox/ImageBox";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/store";
import { useState } from "react";

const MyPage = () => {
	const userData = useSelector((state: RootState) => state.userInfo.user);
	const [$isEditing, $setIsEditing] = useState(false);
	if (!userData) {
		return <p>로딩중</p>;
	}
	return (
		<MyPageContainer>
			<MyPageHeader>
				<Title title="마이페이지" />
			</MyPageHeader>
			<ProfileBox>
				<ImageBox
					userImageData={userData.photoURL}
					$isEditing={$isEditing}
				></ImageBox>
				<UserInfoBox
					userData={userData}
					$isEditing={$isEditing}
					$setIsEditing={$setIsEditing}
				></UserInfoBox>
			</ProfileBox>
		</MyPageContainer>
	);
};

export default MyPage;
