import React, { useState } from "react";
import {
	HelperText,
	LoginBox,
	LoginContainer,
	LoginForm,
	LoginHeader,
	SignUpGuide,
} from "./Login.styled";
import { Button, Input } from "@/components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { listenAuthChanges } from "@/store/userInfoListener";
import { store } from "@/store";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isIdError, setIsIdError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setPassword(e.target.value);
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setIsIdError(false);
				setIsPasswordError(false);
				dispatch(setIsLogined(true));
				listenAuthChanges(store.dispatch);
				navigate("/");
			})
			.catch((e) => {
				switch (e.code) {
					case "auth/user-not-found":
						console.log(e.code);
						setIsIdError(true);
						console.log(isIdError);
						break;
					case "auth/invalid-email":
						console.log(e.code);
						setIsIdError(true);
						console.log(isIdError);
						break;
					case "auth/invalid-credential":
						console.log(e.code);
						setIsPasswordError(true);
						console.log(isPasswordError);
						break;
					case "auth/missing-password":
						console.log(e.code);
						setIsPasswordError(true);
						console.log(isPasswordError);
						break;
					case "auth/too-many-requests":
						alert("너무 많은 요청을 보내셨습니다 잠시 후 다시 시도해주세요.");
						break;
					default:
						console.log(e.code);
				}
			});
	};
	return (
		<LoginContainer>
			<LoginBox>
				<LoginHeader>로그인</LoginHeader>
				<LoginForm onSubmit={handleSubmit}>
					<Input label={"Email"} value={email} onChange={handleEmail} />
					<HelperText $isIdError={isIdError}>
						유효하지 않은 이메일입니다.
					</HelperText>
					<Input
						label={"Password"}
						type="password"
						value={password}
						onChange={handlePassword}
					/>
					<HelperText $isPasswordError={isPasswordError}>
						유효하지 않은 비밀번호입니다.
					</HelperText>
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
