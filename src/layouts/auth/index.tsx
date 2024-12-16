import { Outlet } from "react-router-dom";
import { AuthContainer, AuthWrapper, Main } from "./auth.styled";

const AuthLayout = () => {
	return (
		<AuthWrapper>
			<Main>
				<AuthContainer>
					<Outlet />
				</AuthContainer>
			</Main>
		</AuthWrapper>
	);
};

export default AuthLayout;
