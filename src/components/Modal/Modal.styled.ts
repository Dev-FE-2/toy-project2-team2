import styled from "styled-components";
import {
	getColor,
	getFontSize,
	getFontWeight,
	getBorderRadius,
} from "@/styles/theme";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${getColor("dim")};
	z-index: 1050;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	position: relative;
`;

export const ModalBox = styled.div`
	background: ${getColor("white")};
	border-radius: ${getBorderRadius("lg")};
	border: 1px solid ${getColor("grayLight")};
	padding: 30px;
	height: auto;
	max-height: 90vh;
	box-sizing: border-box;
`;

export const ModalHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	h2 {
		margin: 5px 0;
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
	max-width: 400px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 20px;
`;
