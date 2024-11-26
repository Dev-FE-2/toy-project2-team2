import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	border-bottom: 1px solid black;
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 140px;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 40px;
	margin-left: 20px;
	text-align: left;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: 500;
	&:hover {
		color: gray;
	}
`;

export const ProfileContainer = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;
