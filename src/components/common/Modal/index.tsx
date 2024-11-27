import React from "react";
import { createPortal } from "react-dom";
import {
	ModalOverlay,
	ModalContainer,
	ModalBox,
	ModalHeader,
	CloseButton,
	ModalContent,
	ButtonContainer,
	Button,
} from "./Modal.styled";

interface ModalProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
	if (!isOpen) return null;

	return createPortal(
		<ModalOverlay>
			<ModalContainer>
				<ModalBox>
					<ModalHeader>
						<h2>{title}</h2>
						<CloseButton onClick={onClose}>&times;</CloseButton>
					</ModalHeader>
					<ModalContent>{children}</ModalContent>
					<ButtonContainer>
						<Button onClick={onClose}>취소</Button>
						<Button>확인</Button>
					</ButtonContainer>
				</ModalBox>
			</ModalContainer>
		</ModalOverlay>,
		document.getElementById("modal")!, // 'modal' 컨테이너로 Portal 렌더링
	);
};

export default Modal;
