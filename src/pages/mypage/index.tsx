import { MyPageContainer, MyPageHeader, ProfileBox } from "./MyPage.styled";
import { UserInfoBox } from "./components/UserInfoBox";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/store";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MyPage = () => {
	const userData = useSelector((state: RootState) => state.userInfo.user);
	const [$isEditing, $setIsEditing] = useState(false);
	if (!userData) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "60vh",
				}}
			>
				<ClipLoader
					color="#029688"
					loading={true}
					size={50}
					cssOverride={{
						borderWidth: "4px",
					}}
				/>
			</div>
		);
	}
	return (
		<MyPageContainer>
			<MyPageHeader>
				<Title title="마이페이지" />
			</MyPageHeader>
			<ProfileBox>
				<UserInfoBox
					userData={userData}
					$isEditing={$isEditing}
					$setIsEditing={$setIsEditing}
				/>
			</ProfileBox>
		</MyPageContainer>
	);
};

export default MyPage;
