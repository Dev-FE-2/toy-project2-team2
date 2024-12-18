import { flexCenter } from "@/styles/commonStyles";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const UserInfoBoxContainer = styled.div``;
export const UserInfoContent = styled.div`
	${flexCenter}
`;
export const InfoTitle = styled.div`
	flex-direction: column;
	font-size: ${getFontSize("lg")};
	font-weight: ${getFontWeight("bold")};
	div {
		padding: 10px 0;
	}
`;
export const InfoValue = styled.div<{ readOnly: boolean }>`
	font-size: ${getFontSize("lg")};
	margin-left: 10px;
	flex-direction: column;
	div {
		height: 40px;
	}
	div:first-child > input {
		border: none;
	}
	input {
		padding: 0;
		background-color: ${getColor("white")};
		cursor: default;
		color: ${getColor("secondaryDark")};
		font-size: ${getFontSize("lg")};
		border: ${(props) =>
			props.readOnly ? "none" : `1px solid ${getColor("grayLight")}`};
	}
`;
export const ImageBoxContainer = styled.div`
	${flexCenter}
	flex-direction: column;
	button {
		padding: 13px 0;
	}
`;
export const ImageCircle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 20px;
	overflow: hidden;
`;
export const UserImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
