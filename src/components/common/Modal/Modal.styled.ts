import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	position: relative;
`;

export const ModalBox = styled.div`
	background: white;
	border-radius: 8px;
	padding: 50px;
	width: 550px;
	height: auto;
	max-height: 90vh;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
`;

export const ModalHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	h2 {
		margin: 0;
		font-size: 1.5rem;
		text-align: center;
	}
`;

export const ModalContent = styled.div`
	text-align: center;
	padding-bottom: 10px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	margin-top: 20px;
`;

export const Button = styled.button`
	flex: 1;
	padding: 10px 0;
	border: none;
	border-radius: 4px;
	color: black;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #5a6268;
	}

	&:nth-child(2) {
		background-color: #029688;
		color: white;
		&:hover {
			background-color: #027056;
		}
	}
`;
