import { authActions } from "@src/modules/auth/authSlice";
import { darkTheme, lightTheme } from "@src/styles/theme";
import { clearStorage } from "@src/utils/utils";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogout = () => {
		clearStorage();
		clearStorage(true);
		dispatch(authActions.clearState());
		navigate("/login");
	};
	return (
		<NavbarStyled isDark={isDark}>
			<button onClick={toggleSidebar}><GiHamburgerMenu  style={{ color: "white" }}/></button>
			<a onClick={onLogout}>Logout</a>
		</NavbarStyled>
	);
};

export default Navbar;