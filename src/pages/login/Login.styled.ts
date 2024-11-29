import { flexCenter } from "@/styles/commonStyles";
import { getColor, getFontSize, getFontWeight } from "@/styles/theme";
import styled from "styled-components";

export const LoginContainer = styled.div`
	width: 600px;
	height: 550px;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	border: 1px solid ${getColor("secondaryLight")};
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
	display: inline;
`;
export const LoginForm = styled.div`
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
export const HelperText = styled.div`
	padding: 0 10px;
	color: ${getColor("danger")};
	display: ${(props) => (props.isError ? "block" : "none")};
`;
export const SignUpGuide = styled.div`
	margin-top: 30px;
`;
