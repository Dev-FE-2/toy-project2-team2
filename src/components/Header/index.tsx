import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Profile from "./Profile";
import Navigator from "./Navigator";
import SideBar from "./SideBar";
import { HeaderContainer, LogoLink, HamburgerBtn } from "./Header.styled";

import logoImage from "@/assets/img/logo.png";
import HamburgerIcon from "@/assets/img/hamburger_icon.svg?react";
import { getBreakPoints, getColor } from "@/styles/theme";
import logo_white from "@/assets/img/logo_white.png";
import { useTheme as useStyledTheme } from "styled-components";
import { useTheme as useThemeContext } from "@/context/themeContext";

const Header = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const theme = useStyledTheme();
	const breakPoint = parseInt(getBreakPoints("md")({ theme }));
	const location = useLocation();
	const { isDarkMode } = useThemeContext();
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
				<img src={isDarkMode ? logo_white : logoImage} alt="로고" />
			</LogoLink>
			<Navigator />
			<Profile />
			<HamburgerBtn onClick={() => setIsMobileNavOpen(true)}>
				<HamburgerIcon
					width="36"
					height="36"
					fill={getColor("blacks")({ theme })}
				/>
			</HamburgerBtn>

			<SideBar onClick={setIsMobileNavOpen} isOpen={isMobileNavOpen} />
		</HeaderContainer>
	);
};

export default Header;
