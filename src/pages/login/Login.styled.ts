import { flexCenter } from "@/styles/commonStyles";
import {
	getBorderRadius,
	getColor,
	getFontSize,
	getFontWeight,
} from "@/styles/theme";
import styled from "styled-components";

export const LoginContainer = styled.div`
	width: 600px;
	height: 550px;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: ${getBorderRadius("md")};
	${flexCenter}

	h1 {
		padding-bottom: 30px;
	}
`;
export const LoginBox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const LoginHeader = styled.h1`
	font-size: ${getFontSize("xl")};
	font-weight: ${getFontWeight("bold")};
`;
export const LoginForm = styled.form`
	margin: 0 -10px;
	${flexCenter}
	flex-direction: column;

	div {
		width: 420px;
	}
	button {
		margin: 10px;
	}
`;
export const HelperText = styled.p<{
	$isIdError?: boolean;
	$isPasswordError?: boolean;
}>`
	width: 100%;
	margin: 10px 0;
	padding: 0 10px;
	color: ${getColor("danger")};
	display: ${(props) =>
		props.$isIdError ? "block" : props.$isPasswordError ? "block " : "none"};
`;
export const SignUpGuide = styled.div`
	margin-top: 30px;
`;
