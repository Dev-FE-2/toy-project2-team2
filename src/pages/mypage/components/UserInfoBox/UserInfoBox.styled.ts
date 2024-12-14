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
