import React from "react";

import styled from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme"; 

type CustomButtonProps = {
    styles?: React.CSSProperties;
    text: string;
    classes?: {div: string, button: string};
    onCustomButtonClick?: () => void;
    variant: "primary" | "secondary";
    isDark: boolean
};

const StyledButton = styled.button<{$variant: "primary" | "secondary", $isDark: boolean}>`
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: ${props => props.$isDark ? darkTheme.primaryColor : lightTheme.primaryColor};
        color: ${lightTheme.white} ;
        border: ${props => props.$isDark ? darkTheme.secondaryColor : lightTheme.secondaryColor};
    
        &:hover {
            background-color: ${props => props.$isDark ? darkTheme.primaryColorLight : lightTheme.primaryColorDark};
        }
    `;

const CustomButton: React.FC<CustomButtonProps> = ({ text, variant, isDark, classes, onCustomButtonClick }) => {    
  const onClick = () => {
    if (onCustomButtonClick) {
      onCustomButtonClick();
    }
  };

  return (
    <div className={classes?.div}>
      <StyledButton onClick={onClick} className={classes?.button} $variant={variant} $isDark={isDark}>{text}</StyledButton>
    </div>
  );
};

export default CustomButton;
