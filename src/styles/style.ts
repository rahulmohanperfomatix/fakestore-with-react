import styled, { css, CSSProp } from "styled-components";
import { lightTheme } from "./theme";

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

export const Rol = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px; // Negate the padding on the columns
  margin-left: -15px; // to ensure proper alignment and spacing
`;

export const Col = styled.div<Sizes>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

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
    variant?: "default" | "primary",
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
	default:
		return css``;
	}
};
