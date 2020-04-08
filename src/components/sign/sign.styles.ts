import styled from 'styled-components';

import { Button as RawButton } from '../cart/cart-total/cart-total.styles';

export const OuterWrapper = styled.div`
	width: 38rem;
	margin: 0 auto;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Button = styled(RawButton)`
	height: unset;
	padding: 1.5rem 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${(p) => p.theme.fonts.Poppins};
	font-size: 1.6rem;

	&:last-child {
		margin-top: 1rem;
	}
`;
