import styled, { css } from 'styled-components';

import { Button as RawButton } from '../cart/cart-total/cart-total.styles';

export const OuterWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Button = styled(RawButton)`
	height: unset;
	padding: 1.5rem 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${(p) => p.theme.fonts.Poppins};
	font-size: 1.6rem;

	${(p: { marginTop?: string }) =>
		css`
			margin-top: ${p.marginTop};
		`};
`;
