import { flexCenter } from "@/styles/commonStyles";
import { getBorderRadius, getColor } from "@/styles/theme";
import styled from "styled-components";

export const MyPageContainer = styled.div`
	width: 840px;
	height: 550px;
	margin: 45px auto;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: ${getBorderRadius("md")};
	${flexCenter}
	flex-direction: column;
`;
export const MyPageHeader = styled.div`
	width: 100%;
	margin-left: 95px;
	position: relative;
	bottom: 95px;
`;
export const ProfileBox = styled.div`
	width: 100%;
	${flexCenter};
	justify-content: space-evenly;
`;
