import React from "react";

import { CardContainer, CardProps } from "@src/styles/style";

const Card: React.FC<CardProps> = ({ children, variant="default", isDark, className, height }) => {
	return (
		<CardContainer className={className} $height={height} $variant={variant} $isDark={isDark}>
			{children}
		</CardContainer>
	);
};

export default Card;
