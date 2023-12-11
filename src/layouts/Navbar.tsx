import { darkTheme, lightTheme } from "@src/styles/theme";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

type NavbarType = {
	toggleSidebar: () => void;
	isDark: boolean;
}

const NavbarStyled = styled.nav<{isDark:boolean}>`
	background-color: ${props => props.isDark ? darkTheme.primaryColor : lightTheme.primaryColor};
	color: ${props => props.isDark ? darkTheme.textColor : lightTheme.textColor};
	display: flex;
	justify-content: space-between;
	padding: 10px;

	a{
		color: #fff;
	}
`;

const Navbar: React.FC<NavbarType> = ({toggleSidebar, isDark}) => {
	return (
		<NavbarStyled isDark={isDark}>
			<button onClick={toggleSidebar}><GiHamburgerMenu  style={{ color: "white" }}/></button>
			<a href="/logout">Logout</a>
		</NavbarStyled>
	);
};

export default Navbar;