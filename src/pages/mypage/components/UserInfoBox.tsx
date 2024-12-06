import {
	InfoTitle,
	InfoValue,
	UserInfoBoxContainer,
} from "./UserInfoBox.styled";

export const UserInfoBox = () => {
	return (
		<UserInfoBoxContainer>
			<InfoTitle>
				<div>Email</div>
				<div>이름</div>
				<div>소속</div>
				<div>직급</div>
			</InfoTitle>
			<InfoValue>
				<div>email@email.ocm</div>
				<div>홍길동</div>
				<div>디자인팀</div>
				<div>사원</div>
			</InfoValue>
		</UserInfoBoxContainer>
	);
};
