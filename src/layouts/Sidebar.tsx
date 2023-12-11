import React, { useState } from "react";

import styled from "styled-components";
import { darkTheme, lightTheme } from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

type SidebarType = {
  isOpen: boolean;
  isDark: boolean;
};

const SidebarStyled = styled.div<{ isOpen: boolean; isDark: boolean }>`
  width: 200px;
  background-color: ${(props) =>
    !props.isDark ? lightTheme.primaryColor : darkTheme.primaryColor};
  height: 100vh;
  position: fixed;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    padding: 10px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: ${(props) =>
    !props.isDark ? lightTheme.secondaryLightColor : darkTheme.secondaryLightColor};
    }
  }

  .nav-item {
    &.active {
      background-color: ${(props) =>
    !props.isDark ? lightTheme.secondaryColor : darkTheme.secondaryColor};
    }
  }
`;

const Sidebar: React.FC<SidebarType> = ({ isOpen, isDark }) => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState(window.location.pathname);

  const handleNavigation = (path: string) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <SidebarStyled isOpen={isOpen} isDark={isDark}>
      <ul>
        <li
          className={`nav-item ${
            (activePath === "/dashboard/products" || activePath === "/dashboard") ? "active" : ""
          }`}
          onClick={() => handleNavigation("/dashboard/products")}
        >
            Products
        </li>
        <li
          className={`nav-item ${
            activePath === "/dashboard/categories" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/dashboard/categories")}
        >
            Users
        </li>
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
