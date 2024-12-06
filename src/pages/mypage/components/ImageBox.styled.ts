import { flexCenter } from "@/styles/commonStyles";
import styled from "styled-components";

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
`;
export const UserImage = styled.img`
	width: 100%;
	height: 100%;
`;
