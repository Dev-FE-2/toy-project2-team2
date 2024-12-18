import { flexCenter } from "@/styles/commonStyles";
import { getBorderRadius, getBreakPoints, getColor } from "@/styles/theme";
import styled from "styled-components";

export const MyPageContainer = styled.div`
	padding: 70px 95px 100px;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: ${getBorderRadius("md")};
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: ${getBreakPoints("md")}) {
		padding: 50px 45px 80px;
	}
`;
export const MyPageHeader = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 80px;

	@media (max-width: ${getBreakPoints("md")}) {
		margin-bottom: 25px;
	}
`;
export const ProfileBox = styled.div`
	width: 100%;
	${flexCenter};
	justify-content: space-evenly;

	@media (max-width: ${getBreakPoints("md")}) {
		flex-direction: column;
	}
`;
