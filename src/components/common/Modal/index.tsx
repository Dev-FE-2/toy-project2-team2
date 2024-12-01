import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
	ModalOverlay,
	ModalContainer,
	ModalBox,
	ModalHeader,
	ModalContent,
	ButtonContainer,
} from "./Modal.styled";
import Button from "../Button";

interface ModalProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
	useEffect(() => {
		const preventGoBack = () => {
			history.go(1);
			onClose();
		};

		history.pushState(null, "", location.href);
		window.addEventListener("popstate", preventGoBack);

		return () => window.removeEventListener("popstate", preventGoBack);
	}, [onClose]);

	if (!isOpen) return null;

	return createPortal(
		<ModalOverlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<ModalBox>
					<ModalHeader>
						<h2>{title}</h2>
					</ModalHeader>
					<ModalContent>{children}</ModalContent>
					<ButtonContainer>
						<Button buttonType={"white"} size={"small"} onClick={onClose}>
							취소
						</Button>
						<Button size={"small"} onClick={onClose}>
							확인
						</Button>
					</ButtonContainer>
				</ModalBox>
			</ModalContainer>
		</ModalOverlay>,
		document.getElementById("modal")!, // 'modal' 컨테이너로 Portal 렌더링
	);
};

export default Modal;
