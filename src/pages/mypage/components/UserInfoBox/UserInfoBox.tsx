import {
	InfoTitle,
	InfoValue,
	UserInfoBoxContainer,
	UserInfoContent,
} from "./UserInfoBox.styled";
import { UserData } from "../../type/UserInfoBox";
import { Input } from "@/components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import { updateUserInfoData } from "@/services/mypageUpdateService";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { UserInfoUpdateButton } from "./UserInfoUpdateButton";

export const UserInfoBox = ({ userData }: UserData) => {
	const uid = useSelector((state: RootState) => state.loginAuth.uid);
	const [isEditing, setIsEditing] = useState(false);
	const [userInfoData, setUserInfoData] = useState({
		email: userData.email,
		name: userData.name,
		team: userData.team,
		grade: userData.grade,
	});
	const dispatch = useDispatch();
	const handleInput = async () => {
		if (!isEditing) {
			setIsEditing(true);
		} else {
			if (uid) {
				await updateUserInfoData(uid, userInfoData);
				const newUserData = await getUserData(uid);
				dispatch(
					setUserInfo({
						email: newUserData.email,
						name: newUserData.name,
						team: newUserData.team,
						grade: newUserData.grade,
						photoURL: newUserData.photoURL,
					}),
				);
			} else {
				console.log(
					"데이터를 가져오는 중 문제가 발생했습니다. 다시 시도해주세요",
				);
			}

			setIsEditing(false);
		}
	};
	const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInfoData({
			...userInfoData,
			[name]: value,
		});
	};
	const cancelEditing = () => {
		setUserInfoData({
			email: userData.email,
			name: userData.name,
			team: userData.team,
			grade: userData.grade,
		});
		setIsEditing(false);
	};
	return (
		<UserInfoBoxContainer>
			<UserInfoContent>
				<InfoTitle>
					<div>Email</div>
					<div>이름</div>
					<div>소속</div>
					<div>직급</div>
				</InfoTitle>
				<InfoValue>
					<Input value={userInfoData.email} readOnly />
					<Input
						value={userInfoData.name}
						readOnly={!isEditing}
						onChange={handelChange}
						name="name"
					/>
					<Input
						value={userInfoData.team}
						readOnly={!isEditing}
						onChange={handelChange}
						name="team"
					/>
					<Input
						value={userInfoData.grade}
						readOnly={!isEditing}
						onChange={handelChange}
						name="grade"
					/>
				</InfoValue>
			</UserInfoContent>
			<UserInfoUpdateButton
				$isEditing={isEditing}
				onClick={{ handleInput, cancelEditing }}
			/>
		</UserInfoBoxContainer>
	);
};
