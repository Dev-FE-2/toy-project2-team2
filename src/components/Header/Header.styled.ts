import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
	getColor,
	getFontWeight,
	getFontSize,
	getBreakPoints,
	getBorderRadius,
} from "../../styles/theme";
import { flexCenter } from "@/styles";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
	border-bottom: 1px solid ${getColor("secondaryDark")};
	background-color: ${getColor("white")};
	z-index: 1000;

	@media (max-width: ${getBreakPoints("md")}) {
		padding: 10px 20px;
		justify-content: center;
	}
`;

export const LogoLink = styled(RouterNavLink)`
	display: inline-block;
	height: 45px;
	width: 150px;
	max-width: 150px;
	object-fit: contain;
	padding-top: 10px;
	& > img {
		width: 100%;
	}
`;

export const Nav = styled.nav`
	display: flex;
	gap: 40px;
	text-align: left;

	@media (max-width: ${getBreakPoints("md")}) {
		display: none;
	}

	@media (max-width: ${getBreakPoints("lg")}) {
		gap: 20px;
	}

	.open & {
		display: flex;
		flex-direction: column;
		gap: 35px;
	}
`;

export const NavLink = styled(RouterNavLink)`
	text-decoration: none;
	color: ${getColor("grayDark")};
	font-weight: ${getFontWeight("medium")};

	&:hover {
		color: ${getColor("primary")};
		font-weight: ${getFontWeight("bold")};
	}
	&.active {
		color: ${getColor("secondaryDark")};
		font-weight: ${getFontWeight("bold")};
	}
`;

export const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	.open & {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		margin-bottom: 40px;
	}

	@media (max-width: ${getBreakPoints("md")}) {
		display: none;
	}
`;

export const ProfileImageContainer = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: ${getFontSize("sm")};
	line-height: 1.6;
	button {
		width: 65px;
		height: 26px;
		font-size: ${getFontSize("xs")};
		font-weight: ${getFontWeight("regular")};
		padding: 0;
	}

	.open & {
		align-items: flex-start;
	}
`;

export const HamburgerBtn = styled.button`
	display: none;
	position: absolute;
	top: 4px;
	right: 16px;

	background-color: transparent;
	padding: 0;
	font-size: 0;
	border-radius: ${getBorderRadius("sm")};

	&:hover {
		background-color: ${getColor("white_hover")};
	}

	@media (max-width: ${getBreakPoints("md")}) {
		display: inline-block;
	}
`;

export const MobileNavigation = styled.div`
	position: fixed;
	top: 0;
	right: -320px;
	z-index: 1001;

	max-width: 320px;
	width: 100%;
	min-height: 100%;
	background-color: ${getColor("white")};
	border-left: 1px solid ${getColor("grayLight")};

	transition: 0.3s;

	&.open {
		right: 0;
	}
`;

export const MobileNavCon = styled.div`
	padding: 20px;
`;

export const MobileNavHeader = styled.div`
	${flexCenter}
	position: relative;
	margin-bottom: 40px;
`;

export const CloseBtn = styled.button`
	position: absolute;
	top: -5px;
	right: -4px;
	background-color: transparent;
	border-radius: ${getBorderRadius("sm")};
	padding: 5px;
	font-size: 0;

	&:hover {
		background-color: ${getColor("white_hover")};
	}
`;

export const MobileNavTitle = styled.p`
	font-size: ${getFontSize("md")};
	font-weight: ${getFontWeight("bold")};
`;
export const ThemeToggleButton = styled.img<{ $isDarkMode: boolean }>`
	width: 24px;
	height: 24px;
	cursor: pointer;
	margin-right: 16px;
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;

	${({ $isDarkMode }) =>
		$isDarkMode &&
		`
    filter: invert(1) brightness(2);
  `}

	&:hover {
		transform: scale(1.1);
		opacity: 0.6;
	}

	&:active {
		transform: scale(0.5);
	}
`;
