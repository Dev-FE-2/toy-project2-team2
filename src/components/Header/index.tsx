import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Profile from "./Profile";
import Navigator from "./Navigator";
import SideBar from "./SideBar";
import { HeaderContainer, LogoLink, HamburgerBtn } from "./Header.styled";

import logoImage from "@/assets/img/logo.png";
import HamburgerIcon from "@/assets/img/hamburger_icon.svg?react";
import { useTheme } from "styled-components";
import { getBreakPoints } from "@/styles/theme";

const Header = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const theme = useTheme();
	const breakPoint = parseInt(getBreakPoints("md")({ theme }));
	const location = useLocation();

	useEffect(() => {
		// 리사이즈 이벤트
		const handleResize = () => {
			if (window.innerWidth > breakPoint && isMobileNavOpen) {
				setIsMobileNavOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [breakPoint, isMobileNavOpen]);

	useEffect(() => {
		setIsMobileNavOpen(false);
	}, [location.pathname]);

	return (
		<HeaderContainer>
			<LogoLink to="/">
				<img src={logoImage} alt="로고" />
			</LogoLink>

			<Navigator />
			<Profile />

			<HamburgerBtn onClick={() => setIsMobileNavOpen(true)}>
				<HamburgerIcon width="36" height="36" fill="#000" />
			</HamburgerBtn>

			<SideBar onClick={setIsMobileNavOpen} isOpen={isMobileNavOpen} />
		</HeaderContainer>
	);
};

export default Header;
