import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import { MypageWrapper, Main, MypageContainer } from "./mypage.styled";

const MypageLayout = () => {
	return (
		<MypageWrapper>
			<Header />
			<Main>
				<MypageContainer>
					<Outlet />
				</MypageContainer>
			</Main>
		</MypageWrapper>
	);
};

export default MypageLayout;
