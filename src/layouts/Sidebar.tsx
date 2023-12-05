import React from "react";

import styled from "styled-components";
import { darkTheme, lightTheme } from "@src/styles/theme";

type SidebarType = {
    isOpen: boolean;
    isDark: boolean;
}

const SidebarStyled = styled.div<{isOpen: boolean, isDark: boolean}>`
  width: 200px;
  background-color: ${props => !props.isDark ? lightTheme.primaryColor : darkTheme.primaryColor};
  height: 100vh;
  position: fixed;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.isOpen ? "0" : "-100%"});
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: ${props => !props.isDark ? lightTheme.secondaryColor : darkTheme.secondaryColor};
    }
  }

  @media (max-width: 768px) {
    transform: translateX(-100%);
  }
`;

const Sidebar: React.FC<SidebarType> = ({isOpen, isDark}) => {
	return (
		<SidebarStyled isOpen={isOpen} isDark={isDark}>
			<ul>
				<li>Products</li>
				<li>Categories</li>
			</ul>
		</SidebarStyled>
	);
};

export default Sidebar;