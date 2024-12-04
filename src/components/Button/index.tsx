import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "@/types";

const Button = ({
	children,
	buttonType = "primary",
	size = "regular",
	onClick,
	disabled,
}: ButtonProps) => {
	return (
		<StyledButton
			buttonType={buttonType}
			size={size}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
