import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import { MainWrapper, Main, MainContainer } from "./main.styled";

const MainLayout = () => {
	return (
		<MainWrapper>
			<Header />
			<Main>
				<MainContainer>
					<Outlet />
				</MainContainer>
			</Main>
		</MainWrapper>
	);
};

export default MainLayout;
