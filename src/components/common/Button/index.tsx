import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "../../../types/compontents/button";

const Button = ({
	children,
	buttonType = "primary",
	onClick,
	disabled,
}: ButtonProps) => {
	return (
		<StyledButton buttonType={buttonType} onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
