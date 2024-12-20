import { getColor } from "@/styles/theme";
import styled from "styled-components";

export const UploadButtonContainer = styled.div<{ $isEditing: boolean }>`
	${(props) =>
		props.$isEditing ? "visibility: visible" : "visibility: hidden"};
	position: absolute;
	bottom: 10px;
	right: 0;
	background-color: ${getColor("white")};
	border: 1px solid ${getColor("secondaryDark")};
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;

	input {
		display: none;
	}
`;
