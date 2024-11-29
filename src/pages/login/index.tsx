import React from "react";
import {
	HelperText,
	LoginBox,
	LoginContainer,
	LoginForm,
	LoginHeader,
	SignUpGuide,
} from "./Login.styled";
import { Button, Input } from "@/components/common";

const LoginPage = () => {
	return (
		<LoginContainer>
			<LoginBox>
				<LoginHeader>로그인</LoginHeader>
				<LoginForm>
					<Input label={"Email"}></Input>
					<HelperText>유효하지 않은 이메일입니다.</HelperText>
					<Input label={"Password"} type="password"></Input>
					<HelperText>유효하지 않은 비밀번호입니다.</HelperText>
					<Button>로그인 하기</Button>
				</LoginForm>
				<SignUpGuide>
					계정이 없으신가요? <a href="/signup">회원가입 하기</a>
				</SignUpGuide>
			</LoginBox>
		</LoginContainer>
	);
};

export default LoginPage;
