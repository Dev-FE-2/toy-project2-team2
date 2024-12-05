import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import type { ModalProps } from "@/types/components/modal";
import {
	ModalOverlay,
	ModalContainer,
	ModalBox,
	ModalHeader,
	ModalContent,
	ButtonContainer,
} from "./Modal.styled";

const Modal = ({
	isOpen,
	title,
	onClose,
	children,
	confirmLabel = "확인",
	onConfirm,
}: ModalProps) => {
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
						<Button size={"small"} onClick={onConfirm || onClose}>
							{confirmLabel}
						</Button>
					</ButtonContainer>
				</ModalBox>
			</ModalContainer>
		</ModalOverlay>,
		document.getElementById("modal")!,
	);
};

export default Modal;
