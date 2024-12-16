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
	buttons = [],
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
						{buttons.map(({ label, size, onClick, buttonType }, idx) => (
							<Button
								key={idx}
								buttonType={buttonType} 
								size={size} 
								onClick={onClick}
							>
								{label}
							</Button>
						))}
					</ButtonContainer>
				</ModalBox>
			</ModalContainer>
		</ModalOverlay>,
		document.getElementById("modal")!,
	);
};

export default Modal;
