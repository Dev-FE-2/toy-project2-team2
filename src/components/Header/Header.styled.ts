import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { getColor, getFontWeight, getFontSize } from "../../styles/theme";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 40px;
	border-bottom: 1px solid ${getColor("secondaryDark")};
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 140px;
`;

export const Logo = styled.img`
	height: 45px;
	width: auto;
	padding-top: 10px;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 40px;
	margin-left: 20px;
	text-align: left;
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
	gap: 20px;
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

export const Profile = styled.img`
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
`;
