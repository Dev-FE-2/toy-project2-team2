import {
	InfoTitle,
	InfoValue,
	UserInfoBoxContainer,
} from "./UserInfoBox.styled";
import { UserData } from "../type/UserInfoBox";

export const UserInfoBox = ({ userData }: UserData) => {
	console.log(userData);
	return (
		<UserInfoBoxContainer>
			<InfoTitle>
				<div>Email</div>
				<div>이름</div>
				<div>소속</div>
				<div>직급</div>
			</InfoTitle>
			<InfoValue>
				<div>{userData.email}</div>
				<div>{userData.name}</div>
				<div>{userData.team}</div>
				<div>{userData.grade}</div>
			</InfoValue>
		</UserInfoBoxContainer>
	);
};
