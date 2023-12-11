import styled, { css, CSSProp } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { HTMLAttributes } from "react";

type Sizes = {
  [key: string]: number;
};

const sizes: Sizes = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

interface Media {
  [key: string]: (
    literals: TemplateStringsArray,
    ...placeholders: CSSProp[]
  ) => ReturnType<typeof css>;
}

const media: Media = Object.keys(sizes).reduce((acc: Media, label: string) => {
	acc[label] = (literals: TemplateStringsArray, ...placeholders: CSSProp[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)}
    }
  `;
	return acc;
}, {});


export { sizes, media };

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  max-width: 100%;
`;

export type ColType = HTMLAttributes<HTMLDivElement> & {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export const Col = styled.div<ColType>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  flex: 0 0 100%;
  max-width: 100%;

  ${(props) =>
		props.sm &&
    media.sm`
    flex: 0 0 ${props.sm}%;
    max-width: ${props.sm}%;
  `}
  ${(props) =>
		props.md &&
    media.md`
    flex: 0 0 ${props.md}%;
    max-width: ${props.md}%;
  `}
  ${(props) =>
		props.lg &&
    media.lg`
    flex: 0 0 ${props.lg}%;
    max-width: ${props.lg}%;
  `}
  ${(props) =>
		props.xl && media.xl`
    flex: 0 0 ${props.xl}%;
    max-width: ${props.xl}%;
  `}
`;

type BoxProps = {
  $width?: 25 | 50 | 75 | 100;
  $height?: 200 | 400 | 600 | 800 | 1000;
};

export const Box = styled.div<BoxProps>`
  ${(props) => props.$width && `width: ${props.$width}%;`}
  ${(props) => props.$height && `height: ${props.$height}px;`}
`;

export type CardProps = {
    children: React.ReactNode,
    isDark: boolean,
    variant?: "default" | "primary" | "secondary",
    className?: string,
    height?: number,
}

export const CardContainer = styled.div<{ $variant: CardProps["variant"], $isDark: boolean, $height?: number}>`
    box-shadow: ${props => props.$isDark ? "0 4px 8px 0 rgba(255,255,255,0.2)" : "0 4px 8px 0 rgba(0,0,0,0.2)"};
    transition: 0.3s;
    padding: 16px;
    border-radius: 5px;
    background-color: #fff;
    margin: 10px;
    width: 100%;
    ${(props) => props.$height && `min-height: ${props.$height}px;`}

    ${({$variant}) => variantStyles($variant)}

    &:hover {
        box-shadow:${props => props.$isDark ? "0 4px 8px 0 rgba(255,255,255,0.3)" : "0 4px 8px 0 rgba(0,0,0,0.3)"};
    }

`;

const variantStyles = (variant: CardProps["variant"]) => {
	switch (variant) {
	case "primary":
		return css`background-color: ${lightTheme.primaryColor}; color: white;`;
	case "secondary":
		return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background-color: #f5f5f5;
    overflow: hidden;
    color: #333;

    .product-image {
        width: auto;
        height: 150px !important;
        object-fit: cover;
    }

    .product-title {
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 20px; 
      margin-top: 10px;
      font-weight: 600;
    }    

    .product-price {
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: 600;
    }

    .action-button {
        background-color: ${lightTheme.primaryColor};
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: darken(${lightTheme.primaryColor}, 10%);
        }
    }
    `;
	default:
		return css``;
	}
};

export type ChipsProps = {
  children: React.ReactNode,
  variant: "primary"|"reset"|"default",
  isDark: boolean,
}

const variantChipStyles = (variant: ChipsProps["variant"], isDark: boolean) => {
	switch(variant) {
	case "primary": 
		return css`
    background-color: ${isDark ? darkTheme.secondaryColor : lightTheme.secondaryColor};
    color: ${isDark ? darkTheme.white : lightTheme.white};
  `;
	case "reset": 
		return css`
      background-color: #f7f7f7;
      color: #333;
      border-radius: none;
    `;
	case "default": 
		return css`
      background-color: ${isDark ? darkTheme.primaryColor : lightTheme.primaryColor};
      color: ${isDark ? darkTheme.white : lightTheme.white};
    `;
	}
};

export const StyledChip = styled.div<{$variant: ChipsProps["variant"], $isDark: boolean}>`
  padding: 4px 10px;
  border-radius: 25px;
  display: inline-block;
  font-size: 0.875rem;
  margin: 5px;
  ${({ $variant, $isDark }) => variantChipStyles($variant || "default", $isDark)}

  &:hover {
    cursor: pointer;
  }
`;
