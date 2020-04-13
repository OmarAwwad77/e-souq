import React from 'react';
import styled from 'styled-components';
import { Link } from '../nav-items/nav-items.styles';
import { Title, Button } from '../cart/cart-total/cart-total.styles';
import CartIcon from '../cart-icon/cart-icon';

const OuterWrapper = styled.div`
	height: 32rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ButtonWrapper = styled.div`
	align-self: stretch;
`;

const ReturnToShop = () => {
	return (
		<OuterWrapper>
			<Title fontSize='2.5rem'>Your Cart is Empty</Title>
			<CartIcon width='17rem' height='17rem' withoutCount />
			<ButtonWrapper>
				<Link to='/shop'>
					<Button>Return to Shop</Button>
				</Link>
			</ButtonWrapper>
		</OuterWrapper>
	);
};

export default ReturnToShop;
