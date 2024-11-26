import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 40px;
	border-bottom: 1px solid black;
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
	color: black;
	font-weight: 500;

	&:hover {
		color: #029688;
		font-weight: bolder;
	}
	&.active {
		font-weight: bolder;
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
	overflow: hidden; /* 이미지가 원형을 벗어나지 않도록 */
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
	font-size: 14px;
	line-height: 1.6;
`;
