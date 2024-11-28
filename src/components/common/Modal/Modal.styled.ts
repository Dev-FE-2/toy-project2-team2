import styled from "styled-components";
import { getColor, getFontSize, getFontWeight } from "../../../styles/theme";
export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${getColor("dim")};
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	position: relative;
`;

export const ModalBox = styled.div`
	background: ${getColor("white")};
	border-radius: 8px;
	padding: 50px;
	width: 550px;
	height: auto;
	max-height: 90vh;
	box-shadow: 0 2px 10px ${getColor("grayDark")};
	box-sizing: border-box;
`;

export const ModalHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	h2 {
		margin: 0;
		font-size: ${getFontSize("xl")};
		font-weight: ${getFontWeight("bold")};
		text-align: center;
	}
`;

export const ModalContent = styled.div`
	text-align: center;
	padding-bottom: 10px;
	padding-top: 20px;
	font-size: ${getFontSize("md")};
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 20px;
`;
