import { flexCenter } from "@/styles/commonStyles";
import { getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
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
export const InfoValue = styled.div`
	font-size: ${getFontSize("lg")};
	margin-left: 10px;
	flex-direction: column;
	div {
		padding: 10px 0;
	}
`;
